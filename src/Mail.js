import { IconButton } from "@material-ui/core";
import "./Mail.css";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import MoveToInboxOutlinedIcon from "@material-ui/icons/MoveToInboxOutlined";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import { useHistory } from "react-router-dom";
import { UnfoldMoreOutlined } from "@material-ui/icons";
import LocalPrintshopOutlinedIcon from "@material-ui/icons/LocalPrintshopOutlined";
import { ExitToApp } from "@material-ui/icons";

const Mail = () => {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIosOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxOutlinedIcon />
          </IconButton>
          <IconButton>
            <ErrorOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <MailOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <WatchLaterOutlinedIcon />
          </IconButton>
          <IconButton>
            <CheckCircleOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>

        {/* righ side header */}
        <div className="mial_toolRight">
          <IconButton>
            <UnfoldMoreOutlined />
          </IconButton>
          <IconButton>
            <LocalPrintshopOutlinedIcon />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>Subject</h2>
          <LabelImportantOutlinedIcon className="mail_important" />
          <p>Title</p>
          <p className='mail_time'>10pm</p>
        </div>
        <div className='mail_message'>
          This is the message Body
        </div>
      </div>
    </div>
  );
};

export default Mail;
