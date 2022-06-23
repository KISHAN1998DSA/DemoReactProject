import React from "react";
function InputData(props) {
  return (
    <div>
      <input
      className="form-control"
        type="text"
        value={props.userName}
        onChange={e=>props.handleUserName(e.target.value)}
      />
      {props.userNameError && (
            <span className="error">{props.userNameError}</span>
          )}
    </div>
  );
}
export default InputData;
