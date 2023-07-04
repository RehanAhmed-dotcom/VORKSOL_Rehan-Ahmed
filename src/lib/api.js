import Axios from 'axios';
const axios = Axios.create({
  baseURL:
    'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
});

const bufferUrl = () => {
  const request = `04252023032040_00148466-6020-496d-879a-01edabd564d1`;
  return axios
    .get(request)
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in catch login', e);
    });
};
const normalUrl = () => {
  const request = `01232022112248_69365b28-43e0-406f-a0ce-8e6716146f61`;
  return axios
    .get(request)
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in catch login', e);
    });
};

export {bufferUrl, normalUrl};
