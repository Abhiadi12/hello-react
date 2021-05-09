import React, { Component } from 'react'
export default class FirstOne extends React.Component  {
  constructor(props)
  {
    //super(props);
    console.log(" Executed First ");
    this.state = {
      name: "abhisek",
      roll: "172"
    }
  }

  componentDidMount()
  {
    console.log("Mounted Successfully any api call do here");
  }

  static getDerivedStateFromProps(nextProps, prevState)
  {
    console.log(nextProps,prevState);
    //console.log("Before the render call");
   
    
    return null;
  }

  render(){
    const {name,roll} = this.state;
    return(
      <div>
        <p> Your Name {name} </p>
        <p> Your Age {roll} </p>
      </div>
    );
  }
}
