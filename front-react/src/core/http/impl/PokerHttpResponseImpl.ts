class PokerHttpResponseImpl implements IPokerHttpResponse {
  success: boolean = true;
  data: any;
  
  constructor(data: any){
    this.data = data;
  }
}

export default PokerHttpResponseImpl