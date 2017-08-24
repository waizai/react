import React, { Component } from 'react';
import ChildD from "./ChildD.js";

// 演示生命周期

export default class ChildA extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 2
    }
  }

  componentWillMount () {
    console.log('will mount');
    // window.setTimeout(() => {
    //   this.setState({
    //     a: 100
    //   })
    // }, 2000)
  }

  componentDidMount () {
    console.log('did mount');
    // this.setState({
    //   a: 5
    // })

  }

  componentWillUpdate() {
    console.log('will update')
    // this.setState({
    //   a: 5
    // })
  }

  componentDidUpdate() {
    console.log('did update')
    // this.setState({
    //   a: 5
    // })
  }

  componentWillReceiveProps (nextProps, nextState) {
    console.log('will receive props')
    // this.setState({
    //   a: 5
    // })
  }

  shouldComponentUpdate () {
    console.log('should update')
    return true
    // return false
  }

  render () {
    console.log('child a')
    // this.setState({
    //   a: 5
    // })

    let { a } = this.state;
    let childDProps = {
      e: 10
    };

    return <div>
      this is ChildA, this.state { a }
      {/*<ChildD childDProps={childDProps} />*/}
      </div>
  }
}

