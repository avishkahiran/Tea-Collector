import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { IconButton } from "react-native-paper";

export default function LorryRequest({navigation}) {
  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: "center", marginTop: 20 }}>
        Lorry Requested details
      </Text>
      <View>
        <Text style={{ fontSize: 40, top: 70, marginLeft: 20 }}>1 </Text>
        <Text style={{ fontSize: 20, marginLeft: 70 }}>Date - 2022.05.22</Text>
        <Text style={{ fontSize: 15, marginLeft: 70 }}>SE-005</Text>
        <Text style={{ fontSize: 30, marginLeft: 70 }}>Athuraliya</Text>
      </View>
      <View>
        <Text style={{ fontSize: 40, top: 70, marginLeft: 20 }}>2 </Text>
        <Text style={{ fontSize: 20, marginLeft: 70 }}>Date - 2022.05.25</Text>
        <Text style={{ fontSize: 15, marginLeft: 70 }}>SE-005</Text>
        <Text style={{ fontSize: 30, marginLeft: 70 }}>Athuraliya</Text>
      </View>
      <View style={{ marginLeft: 260, marginTop: 170 }}>
        <IconButton
          icon="plus-circle-outline"
          iconColor={"#09B44D"}
          size={50}
          onPress={() => navigation.navigate("AddLorryRequest")}
        />
      </View>
    </View>
  );
}


