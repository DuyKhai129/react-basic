import React, { Component, Fragment } from "react";
import ChildComponent from "./ChildComponents";
import AddComponent from "./AddComponent";

class MyComponent extends Component {
  /*
    JSX
    It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

    JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.


    */
  //giúp cho dữ liệu thay đổi theo ý muốn
  //   state = {
  //     name: "Henry",
  //     age: 23,
  //   };
  //   handleOnChangeName = (event) => {
  //     this.setState({
  //       age: event.target.value,
  //     });
  //   };
  //   handleClickButton = () => {
  //     alert("Click me");
  //   };
  //re-render
  //   render() {
  //     return (
  //       <Fragment>
  //         <div className="first"> Hello {this.state.name}</div>
  //         <div>
  //           <input
  //             value={this.state["age"]}
  //             type="text"
  //             onChange={(event) => this.handleOnChangeName(event)}
  //           />
  //           age: {this.state["age"]}
  //         </div>

  //         <div className="second">welcome to with react.JS</div>
  //         <div className="third">
  //           <button onClick={() => this.handleClickButton()}> Click me</button>
  //         </div>
  //       </Fragment>
  //       //     <>
  //       //     <div className="first"> Hello {name}</div>
  //       //     <div className="second">welcome to with react.JS</div>
  //       //   </>
  //     );
  //   }
  // }
  state = {
    arrJobs: [
      { id: 1, title: "Developers", salary: "1000" },
      { id: 2, title: "BA", salary: "900" },
      { id: 3, title: "Testers", salary: "800" },
    ],
  };

  addNewJob = (job) => {
    // let currentJob = this.state.arrJobs
    console.log("<<<<check", job);
    this.setState({
      // arrJobs:this.state.arrJobs.push(job)
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  //re-render
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

//import * as Component from './myComponent.js' export a lot of
export default MyComponent;
