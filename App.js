import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Image,View,Text,StyleSheet } from 'react-native';

const Stack = createStackNavigator();

import LoadScreen from "./components/LoadScree";
import Home from "./components/Home";
import ChoseAuth from "./components/ChoseAuth";
import SignUp from "./components/SignUp";
import CreatePin from "./components/CreatePin";
import SignIn from "./components/SignIn";

import FinanceHome from "./components/FinanceHome";

import AddPrice from "./components/AddPrice";
import LorrySellingList from "./components/LorrySellingList";
import PriceList from "./components/PriceList";
import GenarateReport from "./components/GenarateReport";

import SellerHome from "./components/SellerHome";
import TeaDiary from "./components/TeaDiary";
import LorryRequest from "./components/LorryRequest";
import AddTeaDiary from "./components/AddTeaDiary";
import AddLorryRequest from "./components/AddLorryRequest";
import SellerViewRoute from "./components/SellerViewRoute";

import AdminHome from "./components/AdminHome";
import LorryRoute from "./components/LorryRouteManager/LorryRoute";
import AddRoute from "./components/LorryRouteManager/AddRoute";
import EditRoute from "./components/LorryRouteManager/EditRoute";

import LorryOwner from "./components/LorryOwner";
import LorrySellingDetails from "./components/LorrySellingDetails";
import AddLorrySellingDetails from "./components/AddLorrySellingDetails";

import * as React from 'react';
import FinanceManager from "./components/FinanceManger/FinanceManager";

export default function App() {
  return (

    <NavigationContainer initialRouteName="LorryOwner">
      <Stack.Navigator>
        <Stack.Screen
          name="LoadScreen"
          options={{ headerShown: false }}
          component={LoadScreen}
        />
        <Stack.Screen
          name="LorryOwner"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={LorryOwner}
        />

        <Stack.Screen
          name="TeaDiary"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={TeaDiary}
        />

        <Stack.Screen
          name="AddTeaDiary"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={AddTeaDiary}
        />
        <Stack.Screen
            name="PriceList"
            options={{
              headerStyle: { backgroundColor: "#09B44D" },
              headerTintColor: "#fff",
              title: "Collector",
              headerTitle: (props) => <LogoTitle {...props} />,
            }}
            component={PriceList}
          />
      <Stack.Screen
          name="AddPrice"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={AddPrice}
        />
        <Stack.Screen name="LorryRoute" 
          options={{headerStyle:{backgroundColor:'#09B44D'},headerTintColor:'#fff',title:'Collector'
          ,headerTitle: (props) => <LogoTitle {...props} />
          }}
          component={LorryRoute}
        />
        <Stack.Screen name="FinanceManagerM" 
          options={{headerStyle:{backgroundColor:'#09B44D'},headerTintColor:'#fff',title:'Collector'
          ,headerTitle: (props) => <LogoTitle {...props} />
          }}
          component={FinanceManager}
        />
        <Stack.Screen
          name="EditRoute"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={EditRoute}
        />
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ChoseAuth"
          options={{ headerShown: false }}
          component={ChoseAuth}
        />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Create Pin" component={CreatePin} />

        {/* finance manager routes */}

        <Stack.Screen
          name="FinanceHome"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={FinanceHome}
        />
        <Stack.Screen
          name="LorrySellingList"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={LorrySellingList}
        />
        
        <Stack.Screen
          name="GenarateReport"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={GenarateReport}

        />

        {/* seller routes */}
        <Stack.Screen
          name="SellerHome"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={SellerHome}
        />
        

        <Stack.Screen
          name="LorryRequest"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={LorryRequest}
        />
        <Stack.Screen
          name="SellerViewRoute"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={SellerViewRoute}
        />
        <Stack.Screen
          name="AddLorryRequest"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={AddLorryRequest}
        />

        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen
          name="AdminHome"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={AdminHome}
        />
        <Stack.Screen
          name="AddRoute"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={AddRoute}
        />
        

        <Stack.Screen
          name="LorrySellingDetails"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={LorrySellingDetails}
        />

        <Stack.Screen
          name="AddLorrySellingDetails"
          options={{
            headerStyle: { backgroundColor: "#09B44D" },
            headerTintColor: "#fff",
            title: "Collector",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
          component={AddLorrySellingDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function LogoTitle() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.labelStyle}>Tea Collector</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#09B44D',
    padding: 8,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:-25
  },
  logoStyle:{
    width: 30, 
    height: 30
  },
  labelStyle:{
    color:'#fff',
    fontSize:15,
    marginLeft:8,
    fontWeight:"bold"
  }
});