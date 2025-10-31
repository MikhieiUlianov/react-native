import { Button, View, StyleSheet, Alert } from "react-native-web";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

const ImagePicker = () => {
  const [cameraPermissionsInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermisions() {
    if (cameraPermissionsInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (
      (cameraPermissionsInformation.permissionResponse =
        PermissionStatus.DENIED)
    ) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );

      return false;
    }

    return true;
  }
  async function ImageHandler() {
    const hasPermissions = await verifyPermisions();

    if (!hasPermissions) return;
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }
  return (
    <View>
      <View></View>
      <Button onPress={ImageHandler} title="Take Image" />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
