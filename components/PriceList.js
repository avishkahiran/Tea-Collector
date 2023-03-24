import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { Button, IconButton,MD3Colors } from "react-native-paper";
import Price from "./DataAccess/Price.Class";
const price = new Price();
export default function PriceList({navigation}) {
  const [PriceData, setPrice] = React.useState([]);

  const getAll = async () => {
    let data  = await price.getAll();
    setPrice(data.docs.map((doc) => ({ ...doc.data(), id: doc.id  })));
  };

  async function deleteDoc(id){
    let result = await price.delete(id);
    alert("Price deatils deleted!");
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
      {PriceData.map((data,index) => {
        return(
          <View key={data.id} style={styles.container}>
            <View style={{flex:1}}>
              <Text style={{ fontSize: 40, marginLeft: 10 }}>{index+1} </Text>
            </View>
            <View style={{flex:6}}>
              <Text style={{ fontSize: 20, marginLeft: 70 }}>Date - {data.date}</Text>
              <Text style={{ fontSize: 15, marginLeft: 70 }}>{data.name}</Text>
              <Text style={{ fontSize: 30, marginLeft: 70 }}>{data.weight}Kg</Text>
              <Text style={{ fontSize: 40, marginLeft: 70 }}>{data.price}/=</Text>            
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
                    style={{position:'absolute',right:0,marginTop:100,marginRight:30}}
                                      backgroundColor={MD3Colors.neutralVariant40}
                                      size={20}
                                      onPress={() => navigation.navigate('EditPrice', {
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
          size={60}
          onPress={() => navigation.navigate("AddPrice")}
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
