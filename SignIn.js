import { StyleSheet, View, Text,Image } from 'react-native';
import logo from './../assets/logo_with_black.png'
import { Button,TextInput } from 'react-native-paper';
import * as React from 'react';

import User from './DataAccess/User.Class';

export default function SignIn({ navigation }) {

    const [nic, setNIC] = React.useState(null);
    const [pin, setPin] = React.useState(null);

    async function login(){

      if(nic == null){
        alert("Please fill nic field!");
        return -1;
      }else if(pin == null){
        alert("Please fill pin field!");
        return -1;
      } 
  
      const UserAccess = new User();
      UserAccess.getUser(nic, pin).then((res) => {
        let result = 0;
        let utype = null;
        res.forEach(doc => {
          result = 1;
          utype = doc.data()['type'];
        });
        if(result == 1){
          console.log(utype);
          if(utype == 'admin'){
            navigation.navigate('AdminHome');
          }else if(utype == 'seller'){
            navigation.navigate('SellerHome');
          }else if(utype == 'manager'){
            navigation.navigate('FinanceHome');
          }else if(utype == 'lorry'){
            navigation.navigate('LorryOwner');
          }
          else{
            navigation.navigate('Home');
          }
        }else{
          alert("NIC or PIN Incorrect!");
        }
      });
    }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={logo}
      />
      
      <Text style={styles.txtStyle}>Sign In</Text>

    <TextInput
      style={styles.txtInputSyl}
      label="Enter NIC"
      value={nic}
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onChangeText={nic => setNIC(nic)} />

    <TextInput
      style={styles.txtInputSyl}
      label="PIN Number"
      value={pin}
      mode="outlined"
      secureTextEntry={true}
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onChangeText={pin => setPin(pin)} />

    <Button icon="account-plus" style={styles.startBtn} mode="contained" buttonColor="#000" onPress={()=>login()}>
        Sign In
    </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    color:'#2a400b',
    fontSize:22,
    fontWeight:"bold",
    marginTop:10,
    marginBottom: 50,
  },
  txtInputSyl: {
    width:'90%',
    borderColor:'#09B44D',
    selectionColor:'#09B44D',
    marginTop:15,
  },
  logoStyle: {
    width: 100,
    height: 125,
  },
  startBtn: {
    marginTop:25,
    width:'90%',
    backgroundColor:'#09B44D',
  },
});
