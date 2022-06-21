import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from "../screens/Home";
import Mobile from "../screens/MobilePass/index";
import Invoice from "../screens/Invoice/index";
import More from "../screens/More/index";
import InvoiceDeatils from "../screens/Invoice/InvoiceDeatils";
const Context = React.createContext();
const Stack = createStackNavigator();

function HomeStack({ state, descriptors, navigation }) {
    return (
        <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Mobile" component={Mobile} />
            <Stack.Screen name="Invoice" component={Invoice} />
            <Stack.Screen name="More" component={More} />
            <Stack.Screen name="InvoiceDeatils" component={InvoiceDeatils} />
            
        </Stack.Navigator>
    );


}

export default HomeStack;
