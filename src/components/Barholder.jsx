import React from "react";
import { randomArrayWithRange } from "../algorithms/RandomArray.js";
import "../styling/Barholder.css";

class Barholder extends React.Component {
  constructor() {
    super();

    this.state = {
      minimum: 50,
      maximum: 650,
      amount: 25,
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

  bubbleSort = () => {
    let array = this.state.randomArray.slice();
    let animations = [];
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          this.swap(array, j, j + 1);
          animations.push(array.slice());
        }
      }
    }

    console.log(animations);

    const loopAnimations = (arr, i) => {
      const ttime = 50;
      if (i < arr.length) {
        const animationArray = arr[i];
        this.setState({ randomArray: animationArray });
        i++;
        setTimeout(loopAnimations, ttime, arr, i);
      }
    };

    loopAnimations(animations, 0);
  };

  swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  componentDidMount() {}

  createBars = randArray => {
    return (
      <div className="barholder-wrapper">
        {randArray.map((bar, index) => (
          <div
            style={{ height: `${bar}px` }}
            key={index}
            className="array-element"
          >
            {bar}
          </div>
        ))}
        <button onClick={this.bubbleSort}></button>
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
