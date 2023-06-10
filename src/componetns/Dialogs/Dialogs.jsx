import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validator/validators";
import { Input } from "../FormsContorls/FormsConstorls";
import classes from "./Dialogs.module.css";
import DialogItems from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
  let dialogElements = props.messagePage.dialogsData.map((dialog) => (
    <DialogItems name={dialog.name} id={dialog.id} ava={dialog.ava} />
  ));
  let messgaeElemenst = props.messagePage.messagesData.map((message) => (
    <Message text={message.text} id={message.id} />
  ));
  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogElements}</div>
      <div className={classes.messages}>
        <div className={classes.card}>
          <div className={classes.chat_header}>Chat</div>
          <div className={classes.chat_window}>
            <ul className={classes.message_list}>{messgaeElemenst}</ul>
          </div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.chat_input}>
        <Field
          className={classes.message_input}
          name="newMessageBody"
          placeholder="Your message."
          component={Input}
          validate={[required]}
        />
        <button className={classes.send_button}>Send</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: "dialogsAddMessageForm" })(
  AddMessageForm
);
export default Dialogs;
