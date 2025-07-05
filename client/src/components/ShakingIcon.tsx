import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  PressableStateCallbackType,
  GestureResponderEvent,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

interface TabIconProps {
  icon: React.ReactNode;
  label: string;
  focused: boolean;
  onPress?: (event: GestureResponderEvent) => void; // 👈 꼭 받아야 함
  activeColor?: string;
  inactiveColor?: string;
}

type TabParamList = {
  Home: undefined;
  Setting: undefined;
  Menu: undefined;
};

export default function TabIcon({
  icon,
  label,
  focused,
  activeColor = "#fff",
  inactiveColor = "#aaa",
  onPress,
}: TabIconProps) {
  const scale = useSharedValue(1);

  const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>();

  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", () => {
      Haptics.selectionAsync(); // 진동 효과
    });
    return unsubscribe;
  }, [navigation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const getBackgroundColor = (pressed: boolean): string => {
    if (pressed) return "#3d3d3d4f";
    return "transparent";
  };

  return (
    <Pressable
      onPressIn={() => {
        scale.value = withSequence(
          withSpring(0.8, { damping: 5 }),
          withSpring(1.05, { damping: 5 }),
          withSpring(1.0, { damping: 5 })
        );
      }}
      onPressOut={() => {
        scale.value = withSpring(1.0, { damping: 6 });
      }}
      onPress={(e) => {
        Haptics.selectionAsync();
        scale.value = withSpring(0.95);

        onPress?.(e);
      }}
      hitSlop={10}
      style={({ pressed }: PressableStateCallbackType) => [
        {
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
          padding: 8,
          backgroundColor: getBackgroundColor(pressed),
          boxSizing: "border-box",
        },
      ]}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <View>{icon}</View>
        <Text
          style={{
            color: focused ? activeColor : inactiveColor,
            marginTop: 4,
          }}
        >
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
