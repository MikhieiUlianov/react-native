import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native-web";

function LoginScreen() {
  const [loading, setLoading] = useState(false);
  async function loginHandler({ email, password }) {
    setLoading(true);
    try {
      await login(email, password);
    } catch (e) {
      Alert.alert("Authentication failed", "Could not log you in.");
      setLoading(false);
    }
  }

  if (loading) return <LoadingOverlay message={"Logging you in..."} />;
  return <AuthContent onAuthenticate={loginHandler} isLogin />;
}

export default LoginScreen;
