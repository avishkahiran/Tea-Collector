import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { IconButton } from "react-native-paper";

export default function SellerViewRoute() {
  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: "center", marginTop: 20 }}>
        View Route
      </Text>
      <View>
        <Text style={{ fontSize: 40, top: 70, marginLeft: 20 }}>1 </Text>
        <Text style={{ fontSize: 20, marginLeft: 70 }}>Date - 2022.05.22</Text>
        <Text style={{ fontSize: 15, marginLeft: 70 }}>Karagoda Uyandoda</Text>
        <Text style={{ fontSize: 15, marginLeft: 70 }}>2.00pm</Text>
        <Text style={{ fontSize: 30, marginLeft: 70 }}>CB - 34789</Text>
      </View>
      <View>
        <Text style={{ fontSize: 40, top: 70, marginLeft: 20 }}>2 </Text>
        <Text style={{ fontSize: 20, marginLeft: 70 }}>Date - 2022.05.25</Text>
        <Text style={{ fontSize: 15, marginLeft: 70 }}>15Kg</Text>
        <Text style={{ fontSize: 15, marginLeft: 70 }}>2.00pm</Text>
        <Text style={{ fontSize: 30, marginLeft: 70 }}>QRB - 98734</Text>
      </View>
    </View>
  );
}


