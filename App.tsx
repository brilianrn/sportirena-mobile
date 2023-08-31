import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ToastProvider } from "react-native-toast-notifications";
import { Provider } from "react-redux";
import {
  bookingName,
  homeName,
  loginName,
  myBookingGuestName,
  myBookingName,
  registerName,
  resetPasswordName,
  venueDetailName,
  venueName,
} from "./src/constants";
import {
  BookingScreen,
  GuestScreen,
  HomeScreen,
  LoginScreen,
  MyBookingScreen,
  RegisterScreen,
  ResetPasswordScreen,
  VenueDetailScreen,
  VenueScreen,
} from "./src/screens";
import store from "./src/store";

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
              <Stack.Screen name={bookingName} component={BookingScreen} />
              <Stack.Screen name={myBookingName} component={MyBookingScreen} />
              <Stack.Screen name={myBookingGuestName} component={GuestScreen} />
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
