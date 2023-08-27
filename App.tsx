import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Provider } from "react-redux";
import {
  homeName,
  loginName,
  registerName,
  resetPasswordName,
  venueDetailName,
  venueName,
} from "./src/constants";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  VenueDetailScreen,
  VenueScreen,
} from "./src/screens";
import store from "./src/store";
import { ToastProvider } from "react-native-toast-notifications";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <React.StrictMode>
      <ToastProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={homeName}
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name={loginName} component={LoginScreen} />
              <Stack.Screen name={registerName} component={RegisterScreen} />
              <Stack.Screen
                name={resetPasswordName}
                component={ResetPasswordScreen}
              />
              <Stack.Screen name={homeName} component={HomeScreen} />
              <Stack.Screen name={venueName} component={VenueScreen} />
              <Stack.Screen
                name={venueDetailName}
                component={VenueDetailScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ToastProvider>
    </React.StrictMode>
  );
};

export default App;
