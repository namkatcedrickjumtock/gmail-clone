import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import { Notifications } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

const Header = () => {
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

      {/* right hadnside */}
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
