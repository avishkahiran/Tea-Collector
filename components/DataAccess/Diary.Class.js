import { firebase } from "../../config/firebaseConfig";

export default class Diary {
  constructor(amount, date, lorryNum) {
    this.amount = amount;
    this.date = date;
    this.lorryNum = lorryNum;
    this.ref = firebase.firestore().collection("diary");
  }

  async addDiary() {
    const data = {
      amount: this.amount,
      date: this.date,
      lorryNum: this.lorryNum,
    };
    console.log(data);
    let result = null;
    result = await this.ref.add(data);
    return 1;
  }

  async getPrice() {
    const result = await this.ref.get();
    return result;
  }

  async getAll(){
    const result = await this.ref.get();
    return result;
  }

  async delete(id){
    const result = await this.ref.doc(id).delete();
    return result;
  }
}
