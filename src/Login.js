import { signInWithPopup } from "firebase/auth";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";
const Login = () => {
  const dispatch = useDispatch();

  const SignIn = async () => {
    await signInWithPopup(auth, provider)
      .then((user) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="Login_container">
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="logo"
        />
        {/* <button onClick={() => }>Login</button>
        Butto */}
        <Button onClick={SignIn}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
