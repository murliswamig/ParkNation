import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from "../screens/Home";



const Context = React.createContext();
const Stack = createStackNavigator();

function HomeStack({ state, descriptors, navigation }) {
    return (
        <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );


}

export default HomeStack;
