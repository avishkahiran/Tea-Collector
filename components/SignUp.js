import { StyleSheet, View, Text,Image } from 'react-native';
import logo from './../assets/logo_with_black.png'
import { Button,TextInput } from 'react-native-paper';
import * as React from 'react';

export default function SignUp({ navigation }) {

    const [name, setName] = React.useState(null);
    const [nic, setNIC] = React.useState(null);
    const [phoneNumber, setPhoneNumber] = React.useState(null);
    const [email, setEmail] = React.useState(null);

  async function addUserCall(){
    if(name == null || nic == null || phoneNumber == null){
      alert("Please fill complete form!");
      return -1;
    }    
    navigation.navigate('Create Pin', {
        name: name,nic,
        nic: nic,
        phoneNumber: phoneNumber,
        email: email
    });
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={logo}
      />
      <Text style={styles.txtStyle}>Sign Up</Text>

      <TextInput
      style={styles.txtInputSyl}
      label="Enter Name"
      value={name}
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onChangeText={name => setName(name)} />

    <TextInput
      style={styles.txtInputSyl}
      label="NIC Number"
      value={nic}
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onChangeText={nic => setNIC(nic)} />

    <TextInput
      style={styles.txtInputSyl}
      label="Phone Number"
      value={phoneNumber}
      keyboardType="phone-pad"
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onChangeText={phoneNumber => setPhoneNumber(phoneNumber)} />

    <TextInput
      style={styles.txtInputSyl}
      label="Email Address"
      value={email}
      keyboardType="email-address"
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onChangeText={email => setEmail(email)} />

    <Button icon="account-plus" style={styles.startBtn} mode="contained" buttonColor="#000" onPress={()=>addUserCall()}>
        Sign Up
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
