import "./EmailRow.css";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { useHistory } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory()
  return (
    <div className="emailRow" onClick={()=>history.push('/mail')}>
      <div className="emailRow_Options">
        <Checkbox />
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow_title">{title}</div>

      <div className="emailRow_message">
        <h4>
          {subject}{" "}
          <span className="emailRow_description">- {description}</span>
        </h4>
      </div>

      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
