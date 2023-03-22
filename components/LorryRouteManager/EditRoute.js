import { StyleSheet, View, Text,Image } from 'react-native';
import { Button,TextInput } from 'react-native-paper';
import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import Route from '../DataAccess/Route.Class';

export default function EditRoute({ route,navigation }) {

    const [routeName, setRoute] = React.useState(null);
    const [lorryNum, setLorryNum] = React.useState(null);
    const [sDate, setSDate] = React.useState(null);
    const [sTime, setSTime] = React.useState(null);

    const { id } = route.params;

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


    function getRoute(id){
      const RouteAccess = new Route();
      RouteAccess.getRoute(id).then((data) => {
        setRoute(data.route);
        setLorryNum(data.lorryNum);
        setSDate(data.sDate);
        setSTime(data.sTime);
      });
    }

  React.useEffect(() => {
      getRoute(id);
  },[]);

  async function updateRouteCall(){
    if(routeName == null || lorryNum == null || sDate == null || sTime == null){
      alert("Please fill complete form!");
      return -1;
    }    
    
    //add route for lorry
    const RouteAccess = new Route(routeName,lorryNum,sDate,sTime);
    RouteAccess.updateRoute(id).then((res) => {
      console.log(res);
      if(res == 1){
        alert("Route Updated Successfully!");
        navigation.navigate('LorryRoute');
      }
    });

  }

  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>Edit Lorry Route</Text>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}

      <TextInput
      style={styles.txtInputSyl}
      label="Enter Route"
      value={routeName}
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onChangeText={routeName => setRoute(routeName)} />

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
      onPressIn={showDatepicker}  />

    <TextInput
      style={styles.txtInputSyl}
      label="Enter Time"
      value={sTime}
      mode="outlined"
      outlineColor='#09B44D'
      activeOutlineColor='#09B44D'
      onPressIn={showTimepicker}  />

    <Button icon="pencil" style={styles.startBtn} mode="contained" buttonColor="#000" onPress={()=>updateRouteCall()}>
        Update
    </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
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
