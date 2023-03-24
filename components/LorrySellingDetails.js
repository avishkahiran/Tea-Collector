import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { IconButton,MD3Colors } from "react-native-paper";
import Seller from "./DataAccess/Seller.Class";

const seller = new Seller();

export default function LorrySellingDetails({ navigation }) {
  const [Data, setData] = React.useState([]);

  const getAll = async () => {
    let data  = await seller.getAll();
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id  })));
  };

  async function deleteDoc(id){
    let result = await seller.delete(id);
    alert("Seller deatils deleted!");
    getAll();
  }

  React.useEffect(() => {
    getAll();

    const focusHandler = navigation.addListener('focus', () => {
      getAll();
    });
  },[navigation]);
  return (
    <View>
      {Data.map((data,index) => {
        return(
          <View key={data.id} style={styles.container}>
            <View style={{flex:1}}>
              <Text style={{ fontSize: 40, marginLeft: 10 }}>{index+1} </Text>
            </View>

            <View style={{flex:6}}>
              <Text style={{ fontSize: 20, marginLeft: 70 }}>{data.sellerID}</Text>
              <Text style={{ fontSize: 15, marginLeft: 70 }}>{data.date}</Text>
              <Text style={{ fontSize: 20, marginLeft: 70 }}>{data.weight}kg</Text>
              <Text style={{ fontSize: 20, marginLeft: 70 }}>
                {data.address}
              </Text>           
            </View>
            <View style={{flex:2}}>

              <IconButton
                    icon="delete"
                    mode="contained"
                    iconColor={'#FFF'}
                    style={{position:'absolute',right:0,marginRight:30}}
                                      backgroundColor={MD3Colors.error50}
                                      size={20}
                                      onPress={() => deleteDoc(data.id)}
                                  />
              <IconButton
                    icon="pencil"
                    mode="contained"
                    iconColor={'#FFF'}
                    style={{position:'absolute',right:0,bottom:0,marginRight:30}}
                                      backgroundColor={MD3Colors.neutralVariant40}
                                      size={20}
                                      onPress={() => navigation.navigate('EditSeller', {
                                        id:data.id
                                      })}
                                  />

            </View>

          </View>
        );
      })}
      
      <View style={{ position:'absolute',right:10,bottom:-100}}>
        <IconButton
          icon="plus-circle-outline"
          iconColor={"#09B44D"}
          size={50}
          onPress={() => navigation.navigate("AddLorrySellingDetails")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    margin:15,
    flexDirection: 'row',
    borderRadius:10,
    padding:10
  }
});