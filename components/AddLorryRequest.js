import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import logo from "./../assets/logo_with_black.png";
import { Button, TextInput } from "react-native-paper";
import * as React from "react";

export default function AddLorryRequest() {
  const [ID, setID] = React.useState(null);
  const [address, setaddress] = React.useState(null);
  const [date, setdate] = React.useState(null);

  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={logo} />
      <Text style={styles.txtStyle}>Add Tea Diary Details</Text>

      <TextInput
        style={styles.txtInputSyl}
        label="Enter your ID Number "
        value={ID}
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(ID) => setID(ID)}
      />

      <TextInput
        style={styles.txtInputSyl}
        label="Enter your address "
        value={address}
        keyboardType="phone-pad"
        mode="outlined"
        outlineColor="#09B44D"
        activeOutlineColor="#09B44D"
        onChangeText={(address) => setaddress(address)}
      />

      <TextInput
        style={styles.txtInputSyl}
        label="Enter Date "
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
        // onPress={() => addUserCall()}
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

