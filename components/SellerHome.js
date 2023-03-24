import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import img1 from "./../assets/sellerImg.png";
import { IconButton } from "react-native-paper";

export default function SellerHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Ayubowan..!</Text>
      <Image style={styles.image} source={img1} />

      <View style={styles.subContainer}>
        <IconButton
          icon="pencil-box"
          iconColor={"#09B44D"}
          style={styles.btn}
          size={50}
          onPress={() => navigation.navigate("TeaDiary")}
        />
        <Text style={{ textAlign: "center", fontSize: 10 }}>Tea Diary</Text>
      </View>

      <View style={styles.subContainer}>
        <TouchableOpacity>
          <IconButton
            icon="road-variant"
            iconColor={"#09B44D"}
            style={styles.btn}
            size={50}
            onPress={() => navigation.navigate("LorryRequest")}
          />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", fontSize: 10 }}>
          Route Shedule{" "}
        </Text>
      </View>

      <View style={styles.subContainer}>
        <IconButton
          icon="reload"
          iconColor={"#09B44D"}
          style={styles.btn}
          size={50}
          onPress={() => navigation.navigate("SellerViewRoute")}
        />
        <Text style={{ textAlign: "center", fontSize: 10 }}>Request</Text>
      </View>
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
    position: "absolute",
    top: 120,
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

