// axios configurtaion

import axios from "axios";

const commonApi = async (method, url, requestBody) => {
  let configObject = {
    method: method,
    url: url,
    data: requestBody,
  };

  return await axios(configObject)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export default commonApi;
