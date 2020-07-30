class PreLoader extends HTMLElement {
  get loading() {
    return this.hasAttribute('load');
  }

  set loading(elem) {
    console.log(elem)
    // if (elem) {
    //   this.setAttribute('load', '');
    // } else {
    //   this.removeAttribute('load');
    // }
  }

  connectedCallback() {
    this.classList.add('lds-ring')
    this.setAttribute('load', '');
    for (let i = 0; i < 4; i++) this.insertAdjacentHTML('beforeEnd', `<div></div>`)
  }

  constructor() {
    super();
    this.addEventListener('click', e => {
      console.log(this.loading);
    });
  }

}

customElements.define('pre-loader', PreLoader);

