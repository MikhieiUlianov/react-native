import { ReactNode } from "react";
import { Pressable } from "react-native";

const Button = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress: () => void;
}) => {
  return <Pressable onPress={onPress}>{children}</Pressable>;
};

export default Button;
