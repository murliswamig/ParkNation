import React from 'react';

// for nav //
import {NavigationContainer} from '@react-navigation/native';


import {Provider} from "react-redux";
import store from "./src/redux/store/store";
import {useAuth} from "./src/utils/useAuth";
import { UserContext } from './src/context/UserContext';
import { AuthContext } from './src/context/AuthContext';
import FlashMessage from "react-native-flash-message";
import NetInfo from '@react-native-community/netinfo';
import { createStackNavigator } from '@react-navigation/stack';
import AuthLoadingScreen from "./src/navigations/AuthLoadingScreen";
import AuthStack from "./src/navigations/AuthStack";
import HomeStack from "./src/navigations/homeStack";


const RootStack = createStackNavigator();

export default function App() {

    const { auth, state } = useAuth();
    const [netConnected, setNetConnected] = React.useState(false);
    const [isUser, setIsUser] = React.useState(true);


    React.useEffect(() => {
        setTimeout(() => {
            ///SplashScreen.hide();
        }, 2000);
        NetInfo.addEventListener(handleConnectivityChange);
    }, []);

    const handleConnectivityChange = state => {
        if (state.isConnected) {
            global.isConnected = true;
            setNetConnected(state.isConnected);
        } else {
            global.isConnected = false;
            setNetConnected(state.isConnected);
        }
    };

    const isConnected = async () => {
        await fetch('https://www.google.com/')
            .then(response => {
                if (response.ok) {
                    global.isConnected = true;
                    setNetConnected(true);
                }
                // Do stuff with the response
            })
            .catch(error => {
                return false;
            });
    };

    const _renderScreens = () => {
        console.log("state.user",state.user)
        if (state.loading) {
            return (
                <RootStack.Screen
                    name={'AuthLoadingScreen'}
                    component={AuthLoadingScreen}
                />
            );
        }else if (state.user) {
            console.log("user is here ",state.user)
            global.token = state.user.token;
            global.user_id = state.user.user_id;
               return <RootStack.Screen name={'HomeStack'}>
                   {() => (
                       <UserContext.Provider value={state.user}>
                           <HomeStack/>
                       </UserContext.Provider>
                   )}
               </RootStack.Screen>
        }else {
            // console.log('app js last else  ==>>',state.user)

            return <RootStack.Screen name={'AuthStack'} component={AuthStack} />;
        }
    }


    return (
        <Provider store={store}>
            <AuthContext.Provider value={auth}>
                <NavigationContainer>
                    <RootStack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}>
                        {_renderScreens()}
                    </RootStack.Navigator>
            </NavigationContainer>
            </AuthContext.Provider>
            {/*{_renderModelView()}*/}
            <FlashMessage position="top" />
        </Provider>
    );
}
