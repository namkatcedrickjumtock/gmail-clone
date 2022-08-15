import "./EmailList.css";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import RedoIcon from "@material-ui/icons/Redo";
import Checkbox from "@material-ui/core/Checkbox";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import KeyboardHideOutlinedIcon from "@material-ui/icons/KeyboardHideOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import Section from "./Section";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import { useCollection } from "react-firebase-hooks/firestore";
import EmailRow from "./EmailRow";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";

const EmailList = () => {
  const [emails] = useCollection(
    query(collection(db, "emails"), orderBy("timestamp", "desc"))
  );
  return (
    <div className="emailList">
      <div className="EmailList_settings">
        {/* letside */}
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        {/* right side emailis */}
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <ChevronRightOutlinedIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="emaiList_sections">
        <Section
          Icon={InboxOutlinedIcon}
          title="primary"
          selected
          color="red"
        />
        <Section Icon={PeopleAltOutlinedIcon} title="Social" color="#1A73E8" />
        <Section
          Icon={LocalOfferOutlinedIcon}
          title="Promotions"
          color="green"
        />
      </div>

      {/* list of emails */}
      <div className="emailList_list">
        {emails?.docs.map((emailDocs) => (
          <EmailRow
            key={emailDocs.id}
            to={emailDocs.data().to}
            subject={emailDocs.data().subject}
            message={emailDocs.data().message}
            date={emailDocs.data().timestamp?.toDate().toDateString()}
            time={emailDocs.data().timestamp?.toDate().toLocaleTimeString()}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
