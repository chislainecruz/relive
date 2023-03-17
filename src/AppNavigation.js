import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Timeline from "./screens/Timeline";
import PostView from "./screens/PostView";
import EditPostView from "./screens/EditPostView";
import ActionHeader from "./components/ActionHeader";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Group>
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
        }}
      />
      <Stack.Screen
        name="PostView"
        component={PostView}
        options={({ navigation, route }) => {
          return {
            headerLeft: () => null,
            headerRight: () => (
              <ActionHeader
                navigation={navigation}
                postId={route.params.postId}
              />
            ),
            headerTitle: "",
          };
        }}
      />
    </Stack.Group>

    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name="EditPostView"
        component={EditPostView}
        options={({ navigation, route }) => {
          return {
            // headerRight: () => (
            //   <SaveHeader navigation={navigation} post={route.params.post} />
            // ),
            // headerLeft: () => <Logo />,
            // headerTitle: "",
            headerShown: false,
          };
        }}
      />
    </Stack.Group>
  </Stack.Navigator>
);

const NavContainer = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default NavContainer;
