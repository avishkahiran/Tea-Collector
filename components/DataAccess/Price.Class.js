import { firebase } from "../../config/firebaseConfig";

export default class Price {
  constructor(name, date, weight, price) {
    this.name = name;
    this.date = date;
    this.weight = weight;
    this.price = price;
    this.ref = firebase.firestore().collection("prices");
  }

  async addPrice() {
    const data = {
      name: this.name,
      date: this.date,
      weight: this.weight,
      price: this.price,
    };
    console.log(data);
    let result = null;
    result = await this.ref.add(data);
    return 1;
  }

  async updatePrice(id){
    const data = {
      name: this.name,
      date: this.date,
      weight: this.weight,
      price: this.price,
    };
    let result = null;
    result = await this.ref.doc(id).update(data);
    return 1;

  }

  async getPrice(id) {
    const result = await this.ref.doc(id).get();
    return result.data();
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
