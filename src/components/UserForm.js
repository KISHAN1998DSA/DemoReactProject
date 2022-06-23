import React, { Component } from "react";
import "./ArrayStyle.css";
import InputData from "./InputData";
import TextArea from "./TextArea";

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userNameError: false,
      comment: "",
      commentError: false,
      topic: "",
      topicError: false,
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }
  handleUserNameChange = (e) => {
    // console.log(e);
    this.setState({
      userName: e,
    });
  };
  handleCommentChange = (e) => {
    this.setState({
      comment: e,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event, type) => {
    if (this.validate()) {
      alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`);
    }
    event.preventDefault();
  };
  validate = () => {
    let error = true;
    if (this.state.userName === "") {
      error = false;
      this.setState({
        userNameError: "UserName is Empty",
      });
    } else if (
      this.state.userName.length < 4 ||
      this.state.userName.length > 8
    ) {
      error = false;
      this.setState({
        userNameError: "UserName is must be 4 to 8",
      });
    } else {
      this.setState({
        userNameError: "",
      });
    }
    if (this.state.comment === "") {
      error = false;
      this.setState({
        commentError: "Comment is Empty",
      });
    } else {
      this.setState({
        commentError: "",
      });
    }
    if (this.state.topic === "") {
      error = false;
      this.setState({
        topicError: "Select topic ",
      });
    } else {
      this.setState({
        topicError: "",
      });
    }
    return error;
  };

  render() {
    const { userName, comment, topic } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e, "submit")}>
        <div>
          <label className="form-label">UserName</label>
          <InputData
            userName={userName}
            handleUserName={this.handleUserNameChange}
            userNameError={this.state.userNameError}
          />
        </div>
        <div>
          <label>Comment</label>
          <TextArea
            comment={comment}
            handleComment={this.handleCommentChange}
            commentError={this.state.commentError}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange} className="form-control"> 
            <option value="">Select</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Node">Node</option>
            <option value="Ecma">Ecma</option>
          </select>
          {this.state.topicError && (
            <span className="error">{this.state.topicError}</span>
          )}
        </div>
        <div>
          <button className="primary font-xl btn btn-success ">Submit</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
