import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import { Notifications } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { logOut, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  const signOutFromGmail = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
    });
  };

  return (
    <div className="header">
      {/* left section */}
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="img"
        />
      </div>

      {/* center section */}
      <div className="header_center">
        <SearchIcon />
        <input type="text" placeholder="search Email" />
        <ArrowDropDown className="header_input_caret" />
      </div>
      {/* <p>{JSON.stringify(user)}</p> */}

      {/* right hadnside */}
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton onClick={() => signOutFromGmail()} >
          <Avatar src={user?.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
