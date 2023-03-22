import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { IconButton } from "react-native-paper";

import Diary from "./DataAccess/Diary.Class";

const diary = new Diary();

export default function TeaDiary({navigation}) {
  const [Data, setData] = React.useState([]);


  const getAll = async () => {
    let data  = await diary.getAll();
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id  })));
  };

  React.useEffect(() => {
    getAll();

    const focusHandler = navigation.addListener('focus', () => {
      getAll();
    });
  },[navigation]);

  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: "center", marginTop: 20 }}>
        Tea Diary Details{" "}
      </Text>
      {Data.map((data,index) => {
        return(
          <View key={data.id}>
            <Text style={{ fontSize: 40, top: 70, marginLeft: 20 }}>{index+1} </Text>
            <Text style={{ fontSize: 20, marginLeft: 70 }}>Date - {data.date}</Text>
            <Text style={{ fontSize: 15, marginLeft: 70 }}>{data.amount}</Text>
            <Text style={{ fontSize: 30, marginLeft: 70 }}>{data.lorryNum}</Text>
          </View>
        );
      })}
      
      <View style={{ marginLeft: 260, marginTop: 20 }}>
        <IconButton
          icon="plus-circle-outline"
          iconColor={"#09B44D"}
          size={50}
          onPress={() => navigation.navigate("AddTeaDiary")}
        />
      </View>
    </View>
  );
}

