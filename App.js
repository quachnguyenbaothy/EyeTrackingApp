import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import AnUongScreen from "./screen/AnUongScreen";
import GiaiTriScreen from "./screen/GiaiTriScreen";
import GiaoTiepScreen from "./screen/GiaoTiepScreen";
import YeuCauScreen from "./screen/YeuCauScreen";
import HomeScreen from "./screen/HomeScreen";
import SinhHoatScreen from "./screen/SinhHoatScreen";
import SucKhoeScreen from "./screen/SucKhoeScreen";



// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};
const Stack = createNativeStackNavigator();
// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="HomeScreen"
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="AnUongScreen" component={AnUongScreen} />
          <Stack.Screen name="GiaiTriScreen" component={GiaiTriScreen} />
          <Stack.Screen name="GiaoTiepScreen" component={GiaoTiepScreen} />
         <Stack.Screen name="SucKhoeScreen" component={SucKhoeScreen} />
          <Stack.Screen name="YeuCauScreen" component={YeuCauScreen} />
          <Stack.Screen name="SinhHoatScreen" component={SinhHoatScreen} />
         
         
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
