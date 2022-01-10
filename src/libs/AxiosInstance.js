import axios from 'axios';
import ErrorHandler from '@/libs/ErrorHandler';
import { Message } from 'ant-design-vue';

const inst = axios.create({
  baseURL: '',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  }
});

inst.interceptors.request.use(
  (config) => {
    /* 处理函数请求头，如：config.headers.Authorization = auth; */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

inst.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    Message.error(ErrorHandler(error));
    return Promise.reject(error);
  }
);

export default inst;
