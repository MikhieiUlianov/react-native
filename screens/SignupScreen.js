import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [loading, setLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    setLoading(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (e) {
      Alert.alert("Authentication failed", "Could not sign up.");

      setLoading(false);
    }
  }

  if (loading) return <LoadingOverlay message={"Creating user..."} />;
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
