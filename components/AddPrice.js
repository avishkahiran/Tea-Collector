import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import logo from "./../assets/logo_with_black.png";
import { Button, TextInput } from "react-native-paper";
import * as React from "react";
import Price from "./DataAccess/Price.Class";
export default function AddPrice() {
  const [name, setName] = React.useState(null);
  const [date, setdate] = React.useState(null);
  const [weight, setweight] = React.useState(null);
  const [price, setprice] = React.useState(null);

  async function addPriceCall() {
    if (name == null || date == null || weight == null) {
      alert("Please fill complete form!");
      return -1;
    }
    let priceCall = new Price(name,date,weight,price);
    let result = await priceCall.addPrice();
    if(result == 1){
      alert("Price details added!");
    }

  }

  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={logo} />
      <Text style={styles.txtStyle}>Add Price</Text>

      <TextInput
        style={styles.txtInputSyl}
        label="Enter Name"
        value={name}
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(name) => setName(name)}
      />

      <TextInput
        style={styles.txtInputSyl}
        label="Enter Date"
        value={date}
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(date) => setdate(date)}
      />

      <TextInput
        style={styles.txtInputSyl}
        label="Weight"
        value={weight}
        keyboardType="phone-pad"
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(weight) => setweight(weight)}
      />

      <TextInput
        style={styles.txtInputSyl}
        label="price"
        value={price}
        keyboardType="price-address"
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(price) => setprice(price)}
      />

      <Button
        style={styles.startBtn}
        mode="contained"
        buttonColor="#000"
        onPress={() => addPriceCall()}
      >
        Request
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