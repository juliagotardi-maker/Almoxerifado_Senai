import React from "react";
import { Stack } from "expo-router";

export default function TelasLayout() {
  return <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FFFFFF" } }} />;
}
