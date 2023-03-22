import { StyleSheet, View,Image } from 'react-native';
import logo from './../assets/logo_with_black.png'
import { Button,TextInput,Text,IconButton, Modal, List,Portal,Provider } from 'react-native-paper';
import * as React from 'react';

import User from './DataAccess/User.Class';

export default function CreatePin({ route,navigation }) {

    const [visible, setVisible] = React.useState(false);
    const { name, nic, phoneNumber, email } = route.params;
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [pin, setpin] = React.useState(null);
    const [confirmPin, setConfirmpin] = React.useState(null);

  async function addUserCall(){

    if(pin == null){
      alert("Please fill pin field!");
      return -1;
    }else if(confirmPin == null){
      alert("Please fill confirm pin field!");
      return -1;
    }

    if(pin != confirmPin){
      alert("Pin & confirm pin is not matching!");
      return -1;
    }

    //add user
    const UserAccess = new User(name,nic,phoneNumber,pin,email.toString());
    UserAccess.addUser().then((res) => {
      console.log(res);
      if(res == 1){
        alert("Registered Successfully!");
        navigation.navigate('Sign In');
      }
    });
  }

  return (
    

    <Provider>
        <View style={styles.container}>
        <Image
            style={styles.logoStyle}
            source={logo}
        />
        
        <Text style={styles.txtStyle}>Create PIN</Text>

        <TextInput
        style={styles.txtInputSyl}
        label="Enter PIN"
        value={pin}
        mode="outlined"
        outlineColor='#09B44D'
        activeOutlineColor='#09B44D'
        secureTextEntry={true}
        onChangeText={pin => setpin(pin)} />

        <TextInput
        style={styles.txtInputSyl}
        label="Confirm PIN"
        value={confirmPin}
        mode="outlined"
        outlineColor='#09B44D'
        secureTextEntry={true}
        activeOutlineColor='#09B44D'
        onChangeText={confirmPin => setConfirmpin(confirmPin)} />

        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>

                <List.Section>
                    <List.Subheader style={{fontWeight:'bold',marginBottom:10,fontSize:18}}>How to create a PIN number</List.Subheader>
                    <List.Item title="4 Digital Number" left={() => <List.Icon icon="shield-lock" />} />
                    <List.Item title="PIN code cannot start with 0" left={() => <List.Icon icon="shield-lock" />} />
                    <List.Item title="All 4 digit cannot be same (eg - 1111 and 2222)" left={() => <List.Icon icon="shield-lock" />} />
                </List.Section>

            </Modal>
            </Portal>
            <IconButton icon="help" style={styles.lockBtn} mode="contained"  size={18} iconColor="#fff" onPress={showModal}>
        </IconButton>

        <Text style={styles.txtPinStyle}>how to create PIN number</Text>

            <Button icon="shield-lock" style={styles.startBtn} mode="contained" buttonColor="#000" onPress={()=>addUserCall()}>
            Continue
            </Button>

        </View>

    </Provider>

    
  );
}

const containerStyle = {
    backgroundColor: 'white', 
    padding: 20,
    margin:20,
    borderRadius:10,
};

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
  txtPinStyle: {
    color:'#2a400b',
    fontSize:16,
    marginTop: 5,
    fontStyle:'italic',
  },
  logoStyle: {
    width: 100,
    height: 125,
  },
  startBtn: {
    marginTop:40,
    width:'90%',
    backgroundColor:'#09B44D',
  },
  lockBtn: {
    marginTop:25,
    backgroundColor:'#000',
    position:'relative',
  }
});
