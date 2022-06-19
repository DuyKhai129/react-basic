import React, { Component, Fragment } from "react";

class ChildComponent extends Component {
  /*
    JSX
    It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

    JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.


    */

  state = {
    showJobs: false,
  };
  // handleChangeFirstName = (event) => {
  //   this.setState({
  //     firstName: event.target.value,
  //   });
  // };
  // handleChangeLastName = (event) => {
  //   this.setState({
  //     lastName: event.target.value,
  //   });
  // };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Hello,are you ok today");
    console.log(">>>check dataInput: ", this.state);
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  //re-render
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>> Check Conditional ", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              <h3>Job List</h3>
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} $
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
//when the use (function Components) in huk
export default ChildComponent;
