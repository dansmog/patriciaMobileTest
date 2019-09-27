import React from "react";
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';


import LoginScreen from "./screens/login";
import SignupScreen from "./screens/signup";
import CheckoutScreen from "./screens/checkout"



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

const MainNavigator = createStackNavigator(
  {
    Checkout: {
      screen: CheckoutScreen,
      navigationOptions: {
        header: null
      }
    },
   
  },
  {
    initialRouteName: 'Checkout',
    navigationOptions: {
      header: null
    }
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Main: MainNavigator
  },
  {
    initialRouteName: "Main",
    navigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
