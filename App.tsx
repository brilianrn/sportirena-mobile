import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";
import { Provider } from "react-redux";
import {
  bookingName,
  courtPath,
  homePath,
  loginPath,
  myBookingDetailPath,
  myBookingPath,
  myBookingPaymentPath,
  paymentPath,
  privacyPolicePath,
  privacyPoliceProfilePath,
  profileName,
  registerName,
  resetPasswordName,
  tncPath,
  transferBankPath,
  updatePasswordPath,
  updateProfilePath,
  venueDetailPath,
  venuePath,
} from "./src/constants";
import {
  BookingScreen,
  CourtScreen,
  HomeScreen,
  LoginScreen,
  MyBookingDetailScreen,
  MyBookingPaymentScreen,
  MyBookingScreen,
  PaymentScreen,
  PrivacyPoliceProfileScreen,
  PrivacyPoliceScreen,
  ProfileScreen,
  RegisterScreen,
  ResetPasswordScreen,
  TncScreen,
  TransferBankScreen,
  UpdatePasswordScreen,
  UpdateProfileScreen,
  VenueDetailScreen,
  VenueScreen,
} from "./src/screens";
import store from "./src/store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <React.StrictMode>
      <SafeAreaProvider>
        <ToastProvider>
          <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName={homePath}
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name={loginPath} component={LoginScreen} />
                <Stack.Screen name={registerName} component={RegisterScreen} />
                <Stack.Screen
                  name={resetPasswordName}
                  component={ResetPasswordScreen}
                />
                <Stack.Screen name={homePath} component={HomeScreen} />
                <Stack.Screen name={venuePath} component={VenueScreen} />
                <Stack.Screen name={bookingName} component={BookingScreen} />
                <Stack.Screen
                  name={privacyPolicePath}
                  component={PrivacyPoliceScreen}
                />
                <Stack.Screen
                  name={myBookingPath}
                  component={MyBookingScreen}
                />
                <Stack.Screen
                  name={myBookingDetailPath}
                  component={MyBookingDetailScreen}
                />
                <Stack.Screen name={profileName} component={ProfileScreen} />
                <Stack.Screen name={paymentPath} component={PaymentScreen} />
                <Stack.Screen name={courtPath} component={CourtScreen} />
                <Stack.Screen name={tncPath} component={TncScreen} />
                <Stack.Screen
                  name={myBookingPaymentPath}
                  component={MyBookingPaymentScreen}
                />
                <Stack.Screen
                  name={updatePasswordPath}
                  component={UpdatePasswordScreen}
                />
                <Stack.Screen
                  name={updateProfilePath}
                  component={UpdateProfileScreen}
                />
                <Stack.Screen
                  name={privacyPoliceProfilePath}
                  component={PrivacyPoliceProfileScreen}
                />
                <Stack.Screen
                  name={transferBankPath}
                  component={TransferBankScreen}
                />
                <Stack.Screen
                  name={venueDetailPath}
                  component={VenueDetailScreen}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </ToastProvider>
      </SafeAreaProvider>
    </React.StrictMode>
  );
};

export default App;
