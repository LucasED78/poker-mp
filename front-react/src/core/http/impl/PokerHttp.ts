import IPokerHttp from "../IPokerHttp";
import PokerHttpResponseImpl from "./PokerHttpResponseImpl";
import api from '../api';
import PokerHttpErrorImpl from "./PokerHttpErrorImpl";
import HttpMethods from "../HttpMethods";
import { AxiosResponse } from "axios";

class PokerHttp implements IPokerHttp<PokerHttpResponseImpl> {
  request = async (url: string, method: HttpMethods, data?: any, headers?: any): Promise<PokerHttpResponseImpl> => {
    try {
      const response = await this.getMethod(method, url, data);

      const { data: responseData } = response;
      

      if (!responseData) {
        throw new PokerHttpErrorImpl("data cannot be processed");
      }
      
      return new PokerHttpResponseImpl(responseData.data);
    } catch(e){
      const { message } = e;

      if (message == 'Network Error') throw new PokerHttpErrorImpl('Sorry, It looks like you have no internet connection');

      throw new PokerHttpErrorImpl('Unexpected error');
    }
  }

  get = async (url: string, headers?: any): Promise<PokerHttpResponseImpl> => {
    return await this.request(url, HttpMethods.GET);
  }

  post = async (url: string, data?: any, headers?: any): Promise<PokerHttpResponseImpl> => {
    return await this.request(url, HttpMethods.POST, data);
  }

  put = async (url: string, data?: any, headers?: any): Promise<PokerHttpResponseImpl> => {
    return await this.request(url, HttpMethods.PUT, data);
  }

  delete = async (url: string, headers?: any): Promise<PokerHttpResponseImpl> => {
    return await this.request(url, HttpMethods.DELETE);
  }

  getMethod = async (method: HttpMethods, url: string, data?: any): Promise<AxiosResponse<any>> => {
    switch(method) {
      case HttpMethods.GET:
        return await api.get(url);
      case HttpMethods.POST:
        return await api.post(url, data);
      case HttpMethods.PUT:
        return await api.put(url, data);
      case HttpMethods.DELETE:
        return await api.delete(url);
    }
  }
}

export default PokerHttp;