import React from "react";
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "./screens/login";
import SignupScreen from "./screens/signup";



const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: null
    }
  }
);



const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator
  },
  {
    initialRouteName: "Auth",
    navigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
