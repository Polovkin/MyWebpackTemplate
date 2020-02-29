<template>
  <div id="app">

    <div class="chat__body">
      <div class="chat__body-list">
        <Chat-filter/>
        <div class="list-toggler"
             @click="listToggle = !listToggle"></div>
        <div class="accordion-main"
             :class="{'show': listToggle}"
             id="accordion">
          <template v-for="items of ConversationCategories">
            <ChatList :conversation-data="items"
                      :conversation-id="items.category_id"
                      :conversation-read="items.category_read"/>
          </template>
        </div>
      </div>

      <div class="chat__body-content"
           v-show="firstLoad">
        <div class="chat__body-header">
          <div v-if="currentUser.conversation_id !== undefined"
               class="chat__body-header-user"
               :id="currentUser.conversation_id">
            <img alt=""
                 :src="currentUser.customer_avatar">
            <p>{{currentUser.customer_name}}</p>
          </div>
        </div>
        <Chat-messages/>
        <Chat-buttons/>
      </div>
      <div class="chat__body-content"
           v-show="!firstLoad">
        <h2 class="chat-empty">Выберите чат</h2>
      </div>
    </div>
  </div>
</template>

<script>
import {eventEmitter} from './main';

import ChatFilter from './components/ChatFilter.vue';
import ChatList from './components/ChatList.vue';
import ChatMessages from './components/ChatMessages.vue';
import ChatButtons from './components/ChatButtons.vue';
import UserList from './components/UserList.vue';

const socket = new WebSocket('wss://hipp.amemory.pro:779/wss');

export default {
  name: 'app',
  components: {
    ChatFilter, ChatList, ChatMessages, ChatButtons, UserList,
  },
  data() {
    return {
      ConversationCategories: [],
      currentUser: {},
      conversationType: '',
      link: document.location.href.split('/')[document.location.href.split('/').length - 1],
      firstLoad: false,
      temp: {},
      managerData: {},
      listToggle: true,

    };
  },
  created() {
    socket.onopen = () => {
      if (this.link === 'manager') {
        socket.send(JSON.stringify({
          'action': 'getCategoryConversation',
          'conversation_type': '1',
        }));
      } else if (this.link === 'pediatrician') {
        socket.send(JSON.stringify({
          'action': 'getCategoryConversation',
          'conversation_type': '2',
        }));
      }
      // socket.send(JSON.stringify({'action': 'getConversations', 'conversation_type': '1'}));
      console.log('Соединение установлено');
    };

    socket.onmessage = (e) => {
      this.parseMessage(e);
    };

    socket.onclose = () => {
      console.log('Соединение прервано');
    };

    socket.onerror = function(error) {
      console.log(error.message);
    };

    eventEmitter.$on('require', (type, id, data) => {
      switch (type) {
        case 'conversation':
          socket.send(JSON.stringify(
              {'action': 'getConversations', 'category_id': `${id}`},
          ));
          break;
        case 'chat':
          socket.send(JSON.stringify({
            'action': 'getChat',
            'conversation_id': `${id}`},
          ));
          this.currentUser = data;
          break;
        case 'faq':
          socket.send(JSON.stringify({'action': 'getFaq'}));
          break;
        case 'items':
          socket.send(JSON.stringify({'action': 'getShop'}));
          break;
      }
    });

    eventEmitter.$on('getFaqData', () => {
      socket.send(JSON.stringify({'action': 'getFaq'}));
    });

    eventEmitter.$on('sendMessage', (data) => {
      if (data.message_file !== null) {
        this.downloadStatus = true;
        console.log(true);
      }
      socket.send(JSON.stringify({
        'action': 'managerMessage',
        'text': data.message_text,
        'file': data.message_file,
        'faq': data.message_faq,
        'product': data.message_shop,
        'conversation_id': data.conversation_id,
      }));
    });
  },
  methods: {
    addNewUser() {
      // socket.send(JSON.stringify({"action": "newConversation", "conversation_id": "48"}));
      console.log(this.ConversationCategories);
    },
    parseMessage(e) {
      const incomingData = JSON.parse(e.data);
      switch (incomingData.type) {
        // Начальная загрузка диалогов
        case 'dataCategoryConversation':
          this.ConversationCategories = incomingData.categories;
          break;
          // Ответ на запрос на получение ОДНОЙ категории sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        case 'dataConversations':
          eventEmitter.$emit('ConversationDialogs', incomingData);
          this.managerData = incomingData;
          break;
          // История и вся переписка
        case 'dataChat':
          eventEmitter.$emit('newChatHistory', incomingData.chat);
          socket.send(JSON.stringify({
            'action': 'getConversations',
            'category_id': `${incomingData.chat.category_id}`},
          ));
          this.firstLoad = true;
          break;
          // Одно новое сообщение
        case 'dataMessage':
          eventEmitter.$emit('NewMessage', incomingData.message);
          break;
          // FAQ
        case 'dataFaq':
          eventEmitter.$emit('faqData', incomingData.faqData);
          break;
          // Shop
        case 'dataShop':
          eventEmitter.$emit('shopData', incomingData.shopData);
          break;
          // Новое сообщение в не открытом чате
        case 'dataUnreadMessage':
          eventEmitter.$emit('UnreadMessage', incomingData.message);
          // socket.send(JSON.stringify({'action': 'getConversations', 'category_id': `${incomingData.message.category_id}`}));
          break;
          // Новый юзер
        case 'newConversation':
          eventEmitter.$emit('addNewCustomerConversation', incomingData);
          // socket.send(JSON.stringify({'action': 'getConversations', 'category_id': `${incomingData.message.category_id}`}));
          break;
        case 'readConversation':
          eventEmitter.$emit('clearConversationPoint', incomingData);
          break;
        case 'readCategory':
          eventEmitter.$emit('clearCategoryPoint', incomingData);
          break;
      }
    },
    // Загрузка переписки при клике наюзера
    callData() {
      socket.send(JSON.stringify({'action': 'getDataConversation'}));
    },
    getConversations() {
      socket.send(JSON.stringify({'action': 'getConversations'}));
    },
    test() {
      socket.send(JSON.stringify({
        'action': 'getConversations',
        'category_id': `5`},
      ));
    },
  },
};


</script>

<style scoped
       lang="scss">

</style>
