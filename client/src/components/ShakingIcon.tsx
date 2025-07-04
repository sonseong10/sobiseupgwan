import React, { useRef, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

interface Props {
  icon: React.ReactNode;
  label: string;
  focused: boolean;
  activeColor?: string;
  inactiveColor?: string;
}

type TabParamList = {
  Home: undefined;
  Setting: undefined;
  Menu: undefined;
};

export default function TangleTabIcon({
  icon,
  label,
  focused,
  activeColor = "#fff",
  inactiveColor = "#aaa",
}: Props) {
  const scale = useSharedValue(1);
  const wasFocused = useRef(false);

  useEffect(() => {
    if (focused && !wasFocused.current) {
      scale.value = withSequence(
        withSpring(1.2, { stiffness: 180, damping: 5 }),
        withSpring(0.95, { stiffness: 180, damping: 7 }),
        withSpring(1.0, { stiffness: 180, damping: 10 })
      );
    }
    wasFocused.current = focused;
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    alignItems: "center",
  }));

  const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>();

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", () => {
      Haptics.selectionAsync(); // 진동 실행
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Animated.View style={animatedStyle}>
      <View style={styles.center}>{icon}</View>
      <Text
        style={{
          color: focused ? activeColor : inactiveColor,
          fontSize: 12,
          marginTop: 2,
        }}
      >
        {label}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
