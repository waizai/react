import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

import { Button } from "antd";

import ChildA from "./components/ChildA.js";
import ChildB from "./components/ChildB.js";
import ChildC from "./components/ChildC.js";

import { connect } from "react-redux";

// 1. props
// 2. state
// 3. functional component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      e: 10,
      stop: null,
      endTime: null
    };

  }

  forceUpdate(){

  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        e: 1000
      });
    }, 2000)
  }

  clickChildA = param => {
    console.log(param);
    this.setState({
      stop: false
    });
  };


  childBCallback = param => {
    console.log("callback");
    // this.setState({
    //   endTime: 324
    // })
  };

  render() {
    // console.log("parent");

    let { stop: _stop = false, endTime: _endTime = true, e } = this.state;

    let { calculate = 0, dispatch } = this.props;

    // let childBCallback = this.childBCallback

    let childAProps = {
      a: 1,
      b: 2,
      c: 3,
      _stop
    };

    let childBProps = {
      a: 2,
      b: 3,
      c: 4,
      e,
      _endTime,
      calculate,
      childBCallback: this.childBCallback
    };

    let childCProps = {
      a: 10,
      b: 20,
      c: 30,
      calculate,
      dispatch
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="parent">
          <ChildA childAProps={childAProps} />
          <ChildB childBProps={childBProps} />
          <ChildC childCProps={childCProps} />
        </div>

        <Button type="primary" onClick={this.clickChildA.bind(this, { a: 1 })}>
          Primary
        </Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    ...state
  };
};

export default connect(mapStateToProps)(App);
