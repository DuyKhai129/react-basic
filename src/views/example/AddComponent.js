import React, { Component } from "react";

class AddComponent extends Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    //alert("Hello,are you ok today");
    if (!this.state.title || !this.state.salary) {
      alert("missing required params");
      return;
    }
    console.log(">>>check dataInput: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="title"> Title:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangeTitle(event)}
          />
          <br />
          <label htmlFor="salary">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}
export default AddComponent;
