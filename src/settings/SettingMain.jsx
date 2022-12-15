import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  settingContainer: {
    width: "98%",
    height: "98%",
    backgroundColor: "aquamarine",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function SettingMain() {
  return (
    <View style={styles.settingContainer}>
      {/*운동 설정에 대한 큰 박스*/}
      <View style={{ width: "100%" }}>
        {/*그 안의 돋보기가 속해있는 큰 박스*/}
        <View style={{ width: "100%" }}>
          {/*운동설정, 편집이 들어가 있는 박스*/}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text></Text>
            <Text>운동설정</Text>
            <Text>편집</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
