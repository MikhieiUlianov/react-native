import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [loading, setLoading] = useState(false);
  async function signupHandler({ email, password }) {
    setLoading(true);
    try {
      await createUser(email, password);
    } catch (e) {
      Alert.alert("Authentication failed", "Could not sign up.");
    }
    setLoading(false);
  }

  if (loading) return <LoadingOverlay message={"Creating user..."} />;
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
