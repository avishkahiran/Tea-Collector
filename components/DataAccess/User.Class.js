import { firebase } from "../../config/firebaseConfig";

export default class User {
    constructor(name, nic, phoneNumber, pin, email) {
      this.name = name;
      this.nic = nic;
      this.phoneNumber = phoneNumber;
      this.pin = pin;
      this.email = email;
      this.ref = firebase.firestore().collection("users"); 
    }

    async addUser(){
      const data = {
        name:this.name,
        nic:this.nic,
        phoneNumber:this.phoneNumber,
        pin:this.pin,
        email:this.email
      }
      let result = null;
      result = await this.ref.add(data);
      return 1;

    }

    async getUser(nic,pin){
      const result = await this.ref.where('nic', '==', nic).where('pin', '==', pin).get();
      return result;
    }

}
