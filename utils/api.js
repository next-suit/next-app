import {API_DOMAIN} from "./const";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {toast} from "./helper";

const api = {
  get,
  post,
  delete: del,
};
export default api;

function get(path, params = {}){
  let param = [];
  for(let i in params){
    param.push(`${i}=${params[i]}`);
  }
  const query = param.join('&');
  return request('GET', `${path}?${query}`, null, {});
}

function post(path, data = {}){
  return request('POST', path, data, {});
}

function del(path){
  return request('POST', path, null, {});
}

async function request(method, path, body, config = {}){
  const token = await AsyncStorage.getItem('token');
  let options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    ...config,
  };
  if(method !== 'GET' && method !== 'HEAD'){
    options.body = JSON.stringify(body);
  }
  return new Promise((resolve, reject) => {
    fetch(`${API_DOMAIN}/api${path}`, options).then(async response => {
      if(response.status === 200){
        return response.json();
      }else if (response.status === 422){
        const json = await response.json();
        let message = json.message;
        if(json.errors){
            let err_bags = [];
            for(let i in json.errors){
                err_bags = [...json.errors[i]];
                break;
            }
            message = err_bags[0];
        }
        toast(message);
        throw new Error(message);
      }else if (response.status === 401){
        // 需要登录授权
        throw new Error(response.message);
      }else if (response.status === 404){
        toast('404 Not Found.');
        throw new Error('404 Not Found.');
      }else if (response.status === 503){
        toast('暂时不提供服务');
        throw new Error('暂时不提供服务');
      }else{
        toast(response.message);
        throw new Error(response.message);
      }
    }).then(json => {
      if(json.code !== 0){
        return reject(json.message );
      }
      resolve(json.data);
    }).catch(err => reject(err.message));
  });

}

