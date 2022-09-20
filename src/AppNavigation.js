import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Timeline from "./screens/Timeline";
import PostView from "./screens/PostView";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Timeline"
      component={Timeline}
      options={{
        title: "Relive",
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
        // headerShown: false
      }}
    />
    <Stack.Screen name="PostView" component={PostView} />
  </Stack.Navigator>
);

const NavContainer = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default NavContainer;
