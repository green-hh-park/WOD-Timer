import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingMain from "./src/settings/SettingMain";
import WorkoutManage from "./src/settings/WorkoutManage";

function HomeScreen() {
  return (
    <View style={{}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WorkoutSetting"
          component={SettingMain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkoutManage"
          component={WorkoutManage}
          options={{ headerShown: false }}
        />
        {/*<Stack.Screen name="Settings" component={SettingMain} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
