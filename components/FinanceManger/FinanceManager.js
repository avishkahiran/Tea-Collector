import { StyleSheet, Text, View } from "react-native";
import { IconButton,TextInput,Surface,MD3Colors  } from "react-native-paper";
import * as React from 'react';

import Route from "../DataAccess/Route.Class";
const RouteAccess = new Route();

export default function FinanceManager({navigation}) {
    const [search, setSearch] = React.useState("");
    const [RoutesData, setRoutes] = React.useState([]);

    const getRoutes = async () => {
        let data  = await RouteAccess.getAllRoute();
        setRoutes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id  })));
      };

    function deleteRoute(id){
      RouteAccess.deleteRoute(id).then(() => {
        alert("Route Deleted!");
        getRoutes();
      });
    }

    async function searchRoutes(keyword){
      setSearch(keyword);
      let data  = await RouteAccess.findRoute(keyword);
      setRoutes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id  })));
    }

    React.useEffect(() => {
        getRoutes();

        const focusHandler = navigation.addListener('focus', () => {
          getRoutes();
        });
    },[navigation]);

    return (
        <View style={styles.container}>
            <TextInput
                label="Search..."
                mode="outlined"
                style={{width:'100%'}}
                value={search}
                onChangeText={search => searchRoutes(search)}
                />
            
            {RoutesData.map((doc) => {
              return (
                <Surface key={doc.id} elevation={4} style={{width:'100%',marginTop:30,borderBottomLeftRadius:4,borderBottomRightRadius:4}}>
                    <View style={styles.containerItem}>
                        <IconButton
                                    icon="account-multiple"
                                    iconColor={'#000'}
                                    size={60}
                                    onPress={() => console.log('Pressed')}
                                />
                        <View>
                            <Text>Name : {doc.lorryNum}</Text>
                            <Text>NIC : {doc.sDate}</Text>
                            <Text>Mobile : {doc.sTime}</Text>
                            <Text>Email : {doc.route}</Text>
                        </View>
                    </View>
                    <View style={styles.containerBtn}>
                            <IconButton
                                    icon="pencil"
                                    mode="contained"
                                    iconColor={'#000'}
                                    style={styles.lBtn}
                                    backgroundColor={MD3Colors.error90}
                                    size={20}
                                    onPress={() => navigation.navigate('EditRoute', {
                                      id:doc.id
                                    })}
                                />
                            <IconButton
                                    icon="delete"
                                    mode="contained"
                                    iconColor={'#FFF'}
                                    back
                                    style={styles.rBtn}
                                    backgroundColor={MD3Colors.error50}
                                    size={20}
                                    onPress={() => deleteRoute(doc.id)}
                                />
                    </View>
                </Surface>
              );
                })
            }
            

            <IconButton
                icon="plus-thick"
                mode="contained"
                iconColor={'#09B44D'}
                style={styles.plusBtn}
                backgroundColor={MD3Colors.neutralVariant90}
                size={40}
                onPress={() => navigation.navigate('AddRoute')}
            />

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin:20,
    
  },
  containerItem: {
    flexDirection:'row',
    width:'100%',
    backgroundColor:'#FFF',
    padding:10,
    borderLeftColor:'#09B44D',
    borderLeftWidth:4,
    borderRadius:5,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0
  },
  containerBtn: {
    flexDirection:'row',
    width:'100%',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderLeftColor:'#09B44D',
    borderLeftWidth:4,
  },
  lBtn:{
    borderBottomLeftRadius:3,
    borderRadius:0,
    width:'50%',
    padding:0,
    margin:0
  },
  rBtn:{
    borderBottomRightRadius:5,
    borderRadius:0,
    width:'50%',
    padding:0,
    margin:0
  },
  plusBtn:{
    position:'absolute',
    bottom:5,
    right:5
  }
});
