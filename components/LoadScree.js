import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './../assets/logo.png'
import { Button } from 'react-native-paper';

export default function LoadScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={logo}
      />
      <Text style={styles.txtStyle}>Tea Collector</Text>

      <Button icon="coffee-to-go" style={styles.startBtn} mode="contained" buttonColor="#000" onPress={()=>navigation.navigate('ChoseAuth')}>
        Let's Start
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09B44D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    color:'#fff',
    fontSize:25,
    fontWeight:"bold",
    marginTop:10,
  },
  logoStyle: {
    width: 100,
    height: 125,
  },
  startBtn: {
    marginTop:20
  },
});
