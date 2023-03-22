import { StyleSheet, View, Text,Image } from 'react-native';
import { Button,TextInput } from 'react-native-paper';
import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Route from '../DataAccess/Route.Class';
import logo from './../../assets/logo.png';

export default function AddRoute({ navigation }) {

    const [route, setRoute] = React.useState(null);
    const [lorryNum, setLorryNum] = React.useState(null);
    const [sDate, setSDate] = React.useState(null);
    const [sTime, setSTime] = React.useState(null);

    const [date, setDate] = React.useState(new Date(1598051730000));
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);

      let dateCon = new Date(currentDate);

      if(mode == 'time'){
        setSTime(dateCon.getHours()+":"+dateCon.getMinutes());
      }else{
        setSDate(dateCon.getFullYear()+"/"+dateCon.getMonth()+"/"+dateCon.getDate());
      }
    };
  
    const showMode = (currentMode) => {
      if (Platform.OS === 'android') {
        setShow(false);
        // for iOS, add a button that closes the picker
      }
      setShow(true);

      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

  async function addRouteCall(){
    if(route == null || lorryNum == null || sDate == null || sTime == null){
      alert("Please fill complete form!");
      return -1;
    }    
    
    //add route for lorry
    const RouteAccess = new Route(route,lorryNum,sDate,sTime);
    RouteAccess.addRoute().then((res) => {
      console.log(res);
      if(res == 1){
        alert("Route Added Successfully!");
        navigation.navigate('LorryRoute');
      }
    });

  }



  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>Add Lorry Route</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}

      <Image
        style={styles.logoStyle}
        source={logo}
      />

      <TextInput
      style={styles.txtInputSyl}
      label="Enter Route"
      value={route}
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onChangeText={route => setRoute(route)} />

      <TextInput
      style={styles.txtInputSyl}
      label="Enter Lorry Number"
      value={lorryNum}
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onChangeText={lorryNum => setLorryNum(lorryNum)} />

    <TextInput
      style={styles.txtInputSyl}
      label="Enter Date"
      value={sDate}
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onPressIn={showDatepicker} 
      />

    <TextInput
      style={styles.txtInputSyl}
      label="Enter Time"
      value={sTime}
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D' 
      onPressIn={showTimepicker}
      />

    <Button icon="plus-thick" style={styles.startBtn} mode="contained" buttonColor="#000" onPress={()=>addRouteCall()}>
        Add
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
  logoStyle: {
    width: 100,
    height: 125,
  },
  txtStyle: {
    color:'#2a400b',
    fontSize:22,
    fontWeight:"bold",
    marginTop:30,
    marginBottom: 20,
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
