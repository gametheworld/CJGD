import fetch from 'isomorphic-fetch';

export function sendReq(url, method, data, addtionalHeaders){
    let facoption = {
        method: method,
        mode: 'cors',
        credentials: 'include',
        withCredentials:true,
        headers: {
          'Content-Type': 'application/json'
        },
      };
      //场景比如密钥，或者在headers中加入token等等
      if (addtionalHeaders) {
        for (let key in addtionalHeaders) {
            facoption.headers[key] = addtionalHeaders[key];
        }
      }
      if (method.toLocaleLowerCase() == 'post') {
        facoption.body = data && JSON.stringify(data);
      }
    
      return fetch(url, facoption).then(response => {
          //console.log(response.json().Result)
          return response.json();
      }).catch(error=>{
        window.location='/?#/login';
        return error;
    });
}