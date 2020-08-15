import axios from 'axios';

export const get = async (url) => {
  let res = await axios.get(url)  
  return res.data;
}

export const post = async (url, param) => {
  let res = await axios.post(url, param);
  return res.data;
}

export const put = async (url, param) => {
  let res = await axios.put(url, param);
  return res.data;
}

export const del = async () => {
  let res = await axios.delete(url, param);
  return res.data;
}