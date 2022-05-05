import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import login from '../screens/Login';
 import ForgotPassword from '../screens/ForgotPassword';
import Home from "../screens/Home";
// import Verification from '../screens/Verification';
// import ResetPassword from '../screens/ResetPassword';
// import TermsCondition from '../screens/TermsOfService';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={'login'} headerMode="none">
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
      {/*<Stack.Screen name="Verification" component={Verification} />*/}
      {/*<Stack.Screen name="ResetPassword" component={ResetPassword} />*/}
      {/*<Stack.Screen name="TermsOfService" component={TermsCondition} />*/}
    </Stack.Navigator>
  );
}

export default AuthStack;
