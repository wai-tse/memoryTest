import React, { Component } from "react";
import { connect } from "react-redux";
import Square from "./Square";
import Enter from "./Enter";
import BackSpace from "./BackSpace";
import Led from "./Led";
import Msgbox from "./Msgbox";

class Container extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <div className="Level">{"Level: " + this.props.lst[3]}</div>
        </div>

        <div className="flex-container">
          <Led />
        </div>
        <div className={this.props.lst[5]}>
          <div className="flex-container">
            <Square id={1} />
            <Square id={2} />
            <Square id={3} />
          </div>
          <div className="flex-container">
            <Square id={4} />
            <Square id={5} />
            <Square id={6} />
          </div>
          <div className="flex-container">
            <Square id={7} />
            <Square id={8} />
            <Square id={9} />
          </div>
          <div className="flex-container">
            <BackSpace id={"Bksp"} />
            <Square id={0} />
            <Enter id={"Enter"} />
          </div>
        </div>
        <div className={this.props.lst[6]}>
          <div className="flex-container">
            <Msgbox />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lst: state.lst
});

export default connect(mapStateToProps)(Container);
