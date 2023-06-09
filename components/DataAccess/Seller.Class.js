import { firebase } from "../../config/firebaseConfig";

export default class Seller {
  constructor(sellerID, address, weight, date) {
    this.sellerID = sellerID;
    this.address = address;
    this.weight = weight;
    this.date = date;
    this.ref = firebase.firestore().collection("seller");
  }

  async addSeller() {
    const data = {
      sellerID : this.sellerID,
      address : this.address,
      weight : this.weight,
      date : this.date
    };
    console.log(data);
    let result = null;
    result = await this.ref.add(data);
    return 1;
  }

  async getSeller(id) {
    const result = await this.ref.doc(id).get();
    return result.data();
  }

  async getAll(){
    const result = await this.ref.get();
    return result;
  }

  async updatePrice(id){
    const data = {
      sellerID : this.sellerID,
      address : this.address,
      weight : this.weight,
      date : this.date
    };
    let result = null;
    result = await this.ref.doc(id).update(data);
    return 1;

  }

  async delete(id){
    const result = await this.ref.doc(id).delete();
    return result;
  }
}
