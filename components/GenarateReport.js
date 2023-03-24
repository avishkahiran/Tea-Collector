import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import img1 from "./../assets/financeHomeImg.png";
import { IconButton } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { Button, TextInput } from "react-native-paper";

export default function GenarateReport({navigation}) {
  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: "center", padding: 30 }}>
        Generate your own Report
      </Text>
      <Avatar.Icon
        size={130}
        style={{ backgroundColor: `#1F782B`, marginLeft: 110 }}
        icon="chart-areaspline"
      />
      <Text style={{ fontSize: 20, textAlign: "center", padding: 20 }}>
        A report is a document that presents information in an organized format
        . Make your report to analyise the information to make future a
        conclusion or resolution reached after consideration.
      </Text>
      <Button
        style={{ width: 300, alignItems: "center", marginLeft: 28 }}
        mode="contained"
        buttonColor="#1F782B"
        onPress={() => navigation.navigate("genarate report")}
      >
        Genarate Report
      </Button>
      <Button
        style={{
          width: 300,
          alignItems: "center",
          marginLeft: 28,
          marginTop: 20,
        }}
        mode="contained"
        buttonColor="#000"
        onPress={() => navigation.navigate("FinanceHome")}
      >
        Exit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  subContainer: {
    top: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  headText: {
    position: "absolute",
    left: 100,
    top: 48,
    fontSize: 34,
    fontWeight: "bold",
    color: "#1F782B",
  },
  image: {
    top: -80,
    width: "80%",
    borderRadius: 25,
  },
  seller: {
    position: "absolute",
    width: 68,
    height: 68,
    borderColor: "#1F782B",
    borderRadius: 25,
  },
  btn: {
    borderWidth: 2,
    borderColor: "#09B44D",
    borderRadius: 10,
  },
});
