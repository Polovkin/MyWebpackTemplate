 const url = '/ru/base/ajax-viber-color/'
      const data = {
        action: 'get'
      };
      const token = document.querySelectorAll('meta')[4].content

      let response = await fetch(url, {
          method: 'POST',
          headers: {'X-CSRF-Token': token,},
          body: data
        });
      let json = await response.json();
      console.log(json);


 const url = '/ru/base/ajax-viber-color/'
      const data = {
        action: 'get'
      };
      const token = document.querySelectorAll('meta')[4].content

      try {
        const response = await axios.post(url, data, {
          headers: {
            'X-CSRF-Token': token,
          },
        })
        await console.log(response.data);
      } catch (e) {
        console.error(e);
      }