import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from "./src/screens";
import {
  homeName,
  loginName,
  registerName,
  resetPasswordName,
} from "./src/constants";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
