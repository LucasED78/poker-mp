import HttpMethods from "./HttpMethods";

interface IPokerHttp<T> {
  request(url: string, method: HttpMethods, data?: any, headers?: any): Promise<T>;
  get(url: string, headers?: any): Promise<T>;
  post(url: string, data?: any, headers?: any): Promise<T>;
  put(url: string, data?: any, headers?: any): Promise<T>;
  delete(url: string, headers?: any): Promise<T>
}

export default IPokerHttp;