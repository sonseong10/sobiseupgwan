import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import Home from "./src/assets/images/icons/home.svg";
import Menu from "./src/assets/images/icons/menu.svg";
import LineChart from "./src/assets/images/icons/chart.svg";

import TangleTabIcon from "./src/components/ShakingIcon";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#222",
            borderTopColor: "#c8c8c8",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            height: 80,
            paddingTop: 8,
            paddingBottom: 8,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
          },
          tabBarActiveTintColor: "#fff", // 활성 탭 아이콘/라벨 색
          tabBarInactiveTintColor: "#aaa", // 비활성 탭 아이콘/라벨 색
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "", // 여기선 label 숨기기 (컴포넌트 내 직접 렌더)
            tabBarIcon: ({ focused, color, size }) => (
              <TangleTabIcon
                focused={focused}
                label="홈"
                icon={
                  <Home
                    width={size}
                    height={size}
                    fill={focused ? "#fff" : "#aaa"}
                  />
                }
              />
            ),
          }}
        />

        <Tab.Screen
          name="Chart"
          component={HomeScreen}
          options={{
            tabBarLabel: "", // 여기선 label 숨기기 (컴포넌트 내 직접 렌더)
            tabBarIcon: ({ focused, color, size }) => (
              <TangleTabIcon
                focused={focused}
                label="분석"
                icon={
                  <LineChart
                    width={size}
                    height={size}
                    fill={focused ? "#fff" : "#aaa"}
                  />
                }
              />
            ),
          }}
        />

        <Tab.Screen
          name="Menu"
          options={{
            tabBarLabel: "", // 여기선 label 숨기기 (컴포넌트 내 직접 렌더)
            tabBarIcon: ({ focused, color, size }) => (
              <TangleTabIcon
                focused={focused}
                label="홈"
                icon={
                  <Menu
                    width={size}
                    height={size}
                    fill={focused ? "#fff" : "#aaa"}
                  />
                }
              />
            ),
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
