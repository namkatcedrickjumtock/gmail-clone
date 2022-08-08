import "./SendMail.css";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import CloseIcon from "@material-ui/icons/Close";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

function SendMail() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = async (formData) => {
    await addDoc(collection(db, "emails"), {
      to: formData.To,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    })
    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail_close" onClick={()=> dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="To"
          type="text"
          placeholder="To"
          {...register("To", { required: true })}
        />
        {errors.To && <p className="sendMail_error">To is required.</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">subject is required.</p>
        )}
        <input
          name="message"
          type="text"
          placeholder="Message..."
          className="sendMail_message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">Message is required.</p>
        )}
        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
