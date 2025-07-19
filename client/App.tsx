import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import Home from "./src/assets/images/icons/home.svg";
import Menu from "./src/assets/images/icons/menu.svg";
import Chart from "./src/assets/images/icons/diamond.svg";
import * as Haptics from "expo-haptics";
import { StatusBar } from "react-native";
import TabIcon from "./src/components/ShakingIcon";
import { Text, Pressable, Alert } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content" // 시계, 아이콘 색상을 밝게 (흰색 등)
        backgroundColor="#222" // 안드로이드 전용 배경색 설정
      />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#222",
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: "#333333",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            height: 80,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "소비습관",
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: "#222",
            },
            headerTitleStyle: {
              color: "#fff",
              fontSize: 24,
            },
            tabBarButton: (props) => (
              <TabIcon
                icon={
                  <Home
                    width={24}
                    height={24}
                    fill={props["aria-selected"] ? "#fff" : "#aaa"}
                  />
                }
                label="홈"
                focused={props["aria-selected"] ?? false}
                onPress={props.onPress}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Chart"
          component={HomeScreen}
          options={{
            headerTitle: "소비",
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: "#222",
            },
            headerTitleStyle: {
              color: "#fff",
              fontSize: 24,
            },
            headerRight: () => (
              <Pressable
                onPress={() => {
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Warning
                  );
                  Alert.alert("설정 열기", "정말로 열까요?", [
                    { text: "취소", style: "cancel" },
                    { text: "확인", onPress: () => console.log("Go!") },
                  ]);
                }}
              >
                <Text style={{ color: "#fff", marginRight: 16 }}>⚙️</Text>
              </Pressable>
            ),
            tabBarButton: (props) => (
              <TabIcon
                icon={
                  <Chart
                    width={24}
                    height={24}
                    fill={props["aria-selected"] ? "#fff" : "#aaa"}
                  />
                }
                label="분석"
                focused={props["aria-selected"] ?? false}
                onPress={props.onPress}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Menu"
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#222",
            },
            tabBarButton: (props) => (
              <TabIcon
                icon={
                  <Menu
                    width={24}
                    height={24}
                    fill={props["aria-selected"] ? "#fff" : "#aaa"}
                  />
                }
                label="전체"
                focused={props["aria-selected"] ?? false}
                onPress={props.onPress}
              />
            ),
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
