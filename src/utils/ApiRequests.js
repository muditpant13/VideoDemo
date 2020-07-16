import responseMock from './resposnedemo.json'

export const API_HOST = "http://34.93.243.159:3001/"

export const getVideoDemoData = () => {
    return fetch(API_HOST + 'videoDemo/list?agent=demo')
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };


 export const login = (postBody) => {
    return fetch(API_HOST + 'videDemo/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: postBody.email,
          password: postBody.password
        })
      })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return responseMock
      });
 }