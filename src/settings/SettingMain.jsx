import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const styles = StyleSheet.create({
  settingContainer: {
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
    padding: 10,
    justifyContent: "center",
  },
});

export default function SettingMain({ route, navigation }) {
  const sampleData = [
    {
      title: "Fran",
      content: "턱걸이 21개-쓰러스터 21개",
      default: true,
    },
    {
      title: "가볍게 달리기",
      content: "달리기(25분)",
      default: false,
    },
    {
      title: "TABATA",
      content: "버피(40초)-팔굽혀펴기(20초)",
      default: false,
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(sampleData);
    setMasterDataSource(sampleData);
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = sampleData.filter((item) => {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  // 추후에 data 가져올 axios
  /*useEffect(() => {
    axios.get("./sampleWorkout.json").then(function (response) {
      console.log(response);
    });
  }, []);*/

  const selectExercise = (param) => {
    console.log(param);
    /*axios
      .post("url", {
        id: "해당 아이디",
      })
      .then(function (response) {
        // response
      })
      .catch(function (error) {
        // 오류발생시 실행
      })
      .finally(function () {
        // 항상 실행
      });*/
  };

  return (
    <View style={styles.settingContainer}>
      {/*운동 설정에 대한 큰 박스*/}
      <View style={{ width: "100%", backgroundColor: "#fff", height: 170 }}>
        {/*그 안의 돋보기가 속해있는 큰 박스*/}
        <View style={{ width: "100%", alignItems: "center" }}>
          {/*운동설정, 편집이 들어가 있는 박스*/}
          <View
            style={{
              padding: 20,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 55 }}></Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>운동 설정</Text>
            <Pressable onPress={() => navigation.navigate("WorkoutManage")}>
              <Text>편집</Text>
            </Pressable>
          </View>
          <View
            style={{
              padding: 10,
              width: "98%",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F5F5F5",
            }}
          >
            <Image
              source={require("../../assets/search.png")}
              style={{ width: 32, height: 32, marginRight: 20 }}
            />
            <TextInput
              value={search}
              onChangeText={(text) => searchFilterFunction(text)}
              style={{
                width: "100%",
                height: 40,
                padding: 10,
              }}
            ></TextInput>
          </View>
        </View>
      </View>
      {/*<Pressable onPress={addExercise}>
        <View
          style={{
            padding: 20,
            backgroundColor: "#fff",
            height: 70,
            width: "100%",
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/pushup.png")}
            style={{ width: 48, height: 48, marginRight: 20 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>운동 추가</Text>
        </View>
      </Pressable>*/}
      {/* 운동 목록 */}
      <View style={{ marginTop: 30 }}>
        {filteredDataSource.map((param, idx) => {
          return (
            // 운동
            <Pressable
              key={idx}
              onPress={() => {
                selectExercise(idx);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 20,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                  backgroundColor: "#fff",
                }}
              >
                {/*타이틀*/}
                <View>
                  <Text style={{ fontSize: 24, marginBottom: 10 }}>
                    {param.title}
                  </Text>
                  <Text>{param.content}</Text>
                </View>
                {param.default === true && (
                  <Image
                    source={require("../../assets/check.png")}
                    style={{ width: 48, height: 48 }}
                  />
                )}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
