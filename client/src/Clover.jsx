import React from 'react';

function Clover() {
  fetch('api/clover')
  .then(handleErrors)
  .then(res=>res.json())
  .then(json=>console.log(json))
  .catch(error => console.log(error));

  function handleErrors(resp) {
    if(!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp;
  }
}

export default Clover;
