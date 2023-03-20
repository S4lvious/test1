import axios from "axios";
import config from "./../config";
import RequestCancellation from '../requestCancellation';

let axiosInstance = axios.create({
  baseURL: 'https://api-sandbox.bgp.it/babylonwacc-sbx/',
  timeout: config.TIMEOUT,
  validateStatus: function (status) {
    return status >= 200 && status < 500;
  },
});

axiosInstance.defaults.timeout = 600000; // Improved timeout

axiosInstance.interceptors.request.use(request => {
  request.headers = {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache'
  };
  if (
    request.url !== '/user-management/users/logout' &&
    request.url !== '/user-management/users/acl' &&
    request.url !== '/calc-engine/progress'
  ) {
    const cancelToken = RequestCancellation.getCancelToken();
    request.cancelToken = cancelToken;
  }

  request.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  return request;
});



export default axiosInstance;