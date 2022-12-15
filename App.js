import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SettingMain from "./src/settings/SettingMain";

export default function App() {
  return (
    <View style={styles.container}>
      <SettingMain />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
