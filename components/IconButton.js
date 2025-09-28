import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, color, icon }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons
        name={icon}
        color={color}
        style={({ pressed }) => pressed && styles.pressed}
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
