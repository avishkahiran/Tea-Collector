import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './../assets/logo_with_black.png'
import { Button } from 'react-native-paper';

export default function ChoseAuth({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={logo}
      />
      <Text style={styles.txtStyle}>Tea Collector</Text>

      <Button icon="login-variant" style={styles.startBtn} mode="contained" buttonColor="#000" onPress={()=>navigation.navigate('Sign In')}>
        Sign IN
      </Button>

      <Button icon="account-plus" style={styles.startBtn} mode="contained" buttonColor="#000" onPress={()=>navigation.navigate('Sign Up')}>
        Sign UP
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
    marginBottom:20,
  },
  logoStyle: {
    width: 100,
    height: 125,
  },
  startBtn: {
    marginTop:20,
    width:'90%',
    backgroundColor:'#09B44D',
  },
});
