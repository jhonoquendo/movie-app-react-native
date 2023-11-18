import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";
import Home from "../views/Home";
import MovieDetail from "../views/MovieDetail";

const Stack = createNativeStackNavigator<RootStackParams>();
const RouteScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "#9b4b00",
  },
  headerTitleStyle: {
    color: "#fff",
  },
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={RouteScreenDefaultOptions}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={RouteScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
