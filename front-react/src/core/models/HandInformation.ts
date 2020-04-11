class HandInformation {
  handType: string;
  handRank: string;
  value: number;
  handName: string;

  constructor(
    handType: string,
    handRank: string,
    value: number,
    handName: string
  ) {
    this.handType = handType;
    this.handRank = handRank;
    this.value = value;
    this.handName = handName;
  }

  static fromJSON(data: any): HandInformation {
    return new HandInformation(
      data.handType,
      data.handRank,
      data.value,
      data.handName
    );
  }
}

export default HandInformation;