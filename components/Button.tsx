import { ReactNode } from "react";
import { Pressable } from "react-native";

const Button = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress: () => void;
  /* 
  viewStyles?: Record<string, string | number>; */
}) => {
  return (
    <Pressable onPress={onPress} /*  style={viewStyles} */>
      {children}
    </Pressable>
  );
};

export default Button;
