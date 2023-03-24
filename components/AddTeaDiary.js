import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import logo from "./../assets/logo_with_black.png";
import { Button, TextInput } from "react-native-paper";
import * as React from "react";
import Diary from "./DataAccess/Diary.Class";

export default function AddTeaDiary() {
  const [date, setdate] = React.useState(null);
  const [ammount, setammount] = React.useState(null);
  const [lorryNo, setlorryNo] = React.useState(null);

  async function addDiaryCall() {
    if (date == null || ammount == null || lorryNo == null) {
      alert("Please fill complete form!");
      return -1;
    }
    let call = new Diary(ammount,date,lorryNo);
    let result = await call.addDiary();
    if(result == 1){
      alert("Diary details added!");
    }

  }

  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={logo} />
      <Text style={styles.txtStyle}>Add Tea Diary Details</Text>

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
        label="Enter Ammount"
        value={ammount}
        keyboardType="phone-pad"
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(ammount) => setammount(ammount)}
      />

      <TextInput
        style={styles.txtInputSyl}
        label="Enter Lorry Number"
        value={lorryNo}
        keyboardType="lorryNo-address"
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(lorryNo) => setlorryNo(lorryNo)}
      />

      <Button
        style={styles.startBtn}
        mode="contained"
        buttonColor="#000"
        onPress={() => addDiaryCall()}
      >
        Add
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
