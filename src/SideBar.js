import { Button,IconButton } from "@material-ui/core";
import "./sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import { Inbox } from "@material-ui/icons";
import SideBarOptions from "./SideBarOptions";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import { AccessTime } from "@material-ui/icons";
import { LabelImportant } from "@material-ui/icons";
import { NearMeSharp } from "@material-ui/icons";
import NoteIcon from "@material-ui/icons/Note";
import { ExpandMoreRounded } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";



const SideBar = () => {
  const dispatch  = useDispatch()
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        fontSize="large"
        className="sidebar_compose"
        onClick={()=>dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SideBarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SideBarOptions Icon={StarIcon} title="Starred" number={54} />
      <SideBarOptions Icon={AccessTime} title="Snoozed" number={54} />
      <SideBarOptions Icon={LabelImportant} title="Important" number={54} />
      <SideBarOptions Icon={NearMeSharp} title="Sent" number={54} />
      <SideBarOptions Icon={NoteIcon} title="Drafts" number={54} />
      <SideBarOptions Icon={ExpandMoreRounded} title="More" number={54} />


{/* footer section */}
      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
