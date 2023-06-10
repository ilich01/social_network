import React, { useEffect } from "react";
import { useState } from "react";
const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const ativateEditMode = () => {
    setEditMode(true);
  };
  const deativateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={ativateEditMode}>
            {props.status || "My status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            placeholder={"My status"}
            onChange={onStatusChange}
            onBlur={deativateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
