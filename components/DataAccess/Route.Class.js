import { firebase } from "../../config/firebaseConfig";

export default class Route {
    constructor(route,lorryNum,sDate,sTime) {
      this.route = route;
      this.lorryNum = lorryNum;
      this.sDate = sDate;
      this.sTime = sTime;
      this.ref = firebase.firestore().collection("routes"); 
    }

    async addRoute(){
      const data = {
        route:this.route,
        lorryNum:this.lorryNum,
        sDate:this.sDate,
        sTime:this.sTime
      }
      let result = null;
      result = await this.ref.add(data);
      return 1;

    }

    async updateRoute(id){
      const data = {
        route:this.route,
        lorryNum:this.lorryNum,
        sDate:this.sDate,
        sTime:this.sTime
      }
      let result = null;
      result = await this.ref.doc(id).update(data);
      return 1;

    }

    async getRoute(id){
      const result = await this.ref.doc(id).get();
      return result.data();
    }

    async getAllRoute(){
      const result = await this.ref.get();
      return result;
    }

    async deleteRoute(id){
      const result = await this.ref.doc(id).delete();
      return result;
    }

    async findRoute(keyword){
      const result = await this.ref
      .where('lorryNum', '>=', keyword)
      .where('lorryNum', '<=', keyword+ '\uf8ff')
      .get();

      result.docs.map((doc) => ({ ...doc.data(), id: doc.id  }))
      
      return result;
    }

}
