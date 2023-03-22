import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './../assets/logo.png'
import { Button } from 'react-native-paper';

export default function Home() {
  return (
    <View style={styles.container}>

      <Text>Tea Collector Home</Text>

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
  });

