import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from "antd";
import ChildD from "./ChildD.js";

import { toAdd } from '../actions';

class ChildB extends Component {

  onAdd = () => {
    this.props.dispatch(toAdd(4))
  }

  componentDidUpdate() {
    // console.log('b  bb ~~ did update')
  }

  shouldComponentUpdate (nextProps, nextState) {
    // if (nextProps.e < 1000) {
      return true
    // }
    // return false
  }


  componentWillUpdate() {
    // console.log('b  bb ~~ will update')
  }

  componentDidUpdate() {
    // console.log('b  bb ~~ did update')
  }

  render () {

    // console.log('childb', this.props);
    let { e = 200, calculate } = this.props

    let childDProps = {
      e,
      calculate,
    };

    return (
      <div>
        this is ChildB
        <Button type="dashed" onClick={this.onAdd}>ADD</Button>

        <ChildD childDProps={childDProps}/>
      </div>
    )
  }
}


// const mapStateToProps = (state) => {
//   console.log('childb', state)
//   return {
//     ...state
//   }
// }


export default connect(
  state => {
    return {
      ...state
    }
  }
)(ChildB)

