import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import logo from "./../assets/logo_with_black.png";
import { Button, TextInput } from "react-native-paper";
import * as React from "react";
import { IconButton } from "react-native-paper";

export default function LorrySellingList({navigation}) {
    return (
      <View>
        <View>
          <Text style={{ fontSize: 40, top: 70, marginLeft: 20 }}>1 </Text>
          <Text style={{ fontSize: 20, marginLeft: 70 }}>Date-2022.05.22</Text>
          <Text style={{ fontSize: 15, marginLeft: 70 }}>Samarasingha</Text>
          <Text style={{ fontSize: 40, marginLeft: 70 }}>100Kg</Text>
        </View>
        <View>
          <Text style={{ fontSize: 40, top: 70, marginLeft: 20 }}>2 </Text>
          <Text style={{ fontSize: 20, marginLeft: 70 }}>
            Date - 2022.05.25
          </Text>
          <Text style={{ fontSize: 15, marginLeft: 70 }}>Kusumawathi</Text>
          <Text style={{ fontSize: 40, marginLeft: 70 }}>500Kg</Text>
        </View>
        <View style={{ marginLeft: 260, marginTop: 240 }}>
          <IconButton
            icon="plus-circle-outline"
            iconColor={"#09B44D"}
            size={50}
            onPress={() => navigation.navigate("AddPrice")}
          />
        </View>
      </View>
    );
}
