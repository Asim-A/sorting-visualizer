import React from "react";
import { randomArrayWithRange } from "../algorithms/RandomArray.js";
import "../styling/Barholder.css";

class Barholder extends React.Component {
  constructor() {
    super();

    this.state = {
      minimum: 5,
      maximum: 250,
      amount: 10,
      randomArray: []
    };

    this.state.randomArray = randomArrayWithRange(
      this.state.minimum,
      this.state.maximum,
      this.state.amount
    );
  }

  sortIt = () => {
    let randomArray = this.state.randomArray.sort((a, b) => {
      return a - b;
    });

    this.setState({
      randomArray
    });
  };

  componentDidMount() {
    console.log(this.state.randomArray);
    setTimeout(this.sortIt(), 1000);
    console.log(this.state.randomArray);
  }

  createBars = randArray => {
    return (
      <div className="barholder-wrapper">
        {randArray.map((bar, index) => (
          <div key={index} className="array-element">
            {bar}
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="barholder">{this.createBars(this.state.randomArray)}</div>
    );
  }
}

export default Barholder;
