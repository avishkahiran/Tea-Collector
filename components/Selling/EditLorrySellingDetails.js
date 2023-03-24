import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import logo from "./../../assets/logo_with_black.png";
import { Button, TextInput } from "react-native-paper";
import * as React from "react";
import Seller from "./../DataAccess/Seller.Class";

export default function EditLorrySellingDetails({ route,navigation }) {
  const { id } = route.params;

  const [sellerID, setsellerID] = React.useState(null);
  const [address, setaddress] = React.useState(null);
  const [weight, setweight] = React.useState(null);
  const [date, setdate] = React.useState(null);

  async function updateSellerCall(){
    if (sellerID == null || address == null || weight == null) {
      alert("Please fill complete form!");
      return -1;
    }  
    
    //add route for lorry
    const RouteAccess = new Seller(sellerID,address,weight,date);
    RouteAccess.updatePrice(id).then((res) => {
      console.log(res);
      if(res == 1){
        alert("Seller Updated Successfully!");
        navigation.navigate('LorrySellingDetails');
      }
    });

  }

  function getSelling(id){
    const RouteAccess = new Seller();
    RouteAccess.getSeller(id).then((data) => {
      setsellerID(data.sellerID);
      setaddress(data.address);
      setweight(data.weight);
      setdate(data.date);
    });
  }

React.useEffect(() => {
  getSelling(id);
},[]);

  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={logo} />
      <Text style={styles.txtStyle}>Add Tea Collection Details</Text>

      <TextInput
        style={styles.txtInputSyl}
        label="Enter Seller ID"
        value={sellerID}
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(sellerID) => setsellerID(sellerID)}
      />

      <TextInput
        style={styles.txtInputSyl}
        label="Enter Address"
        value={address}
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(address) => setaddress(address)}
      />

      <TextInput
        style={styles.txtInputSyl}
        label="Net Weight"
        value={weight}
        keyboardType="phone-pad"
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(weight) => setweight(weight)}
      />

      <TextInput
        style={styles.txtInputSyl}
        label="Collection Date"
        value={date}
        keyboardType="date-address"
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(date) => setdate(date)}
      />

      <Button
        style={styles.startBtn}
        mode="contained"
        buttonColor="#000"
        onPress={() => updateSellerCall()}
      >
        Update
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  txtStyle: {
    color: "#2a400b",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 50,
  },
  txtInputSyl: {
    width: "90%",
    borderColor: "#09B44D",
    selectionColor: "#09B44D",
    marginTop: 15,
  },
  logoStyle: {
    width: 100,
    height: 125,
  },
  startBtn: {
    marginTop: 25,
    width: "90%",
    backgroundColor: "#09B44D",
  },
});
