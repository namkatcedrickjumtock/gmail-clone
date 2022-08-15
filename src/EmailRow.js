import "./EmailRow.css";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ to, subject, message, date, time }) {
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail(
        // takes a payload
        {
          to,
          subject,
          message,
          date,
          time,
        }
      )
    );
    history.push("/mail");
  };
  const history = useHistory();
  return (
    <div className="emailRow" onClick={() => openMail()}>
      <div className="emailRow_Options">
        <Checkbox />
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow_title">{to}</div>

      <div className="emailRow_message">
        <h4>
          {subject}
          <span className="emailRow_description">- {message}</span>
        </h4>
      </div>
      <p className="emailRow_time">
        {time} {date}
      </p>
    </div>
  );
}

export default EmailRow;
