import React from "react";
import COLORS from "constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const TabBarIcon = ({ focused, name }) => {
  return (
    <Ionicons
      name={name}
      size={22}
      color={focused ? COLORS.secondary : COLORS.darkBaseOne}
    />
  );
};

export default TabBarIcon;
