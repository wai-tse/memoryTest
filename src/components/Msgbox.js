import React from "react";
import { connect } from "react-redux";

export class Msgbox extends React.Component {
  showTime = () => {
    for (let i = 0; i < this.props.lst[1].length; i++) {
      setTimeout(
        () =>
          this.props.dispatch({ type: "DISPLAY", id: this.props.lst[1][i] }),
        i * 1000
      );
    }
    setTimeout(
      () => this.props.dispatch({ type: "DISPLAY", id: "" }),
      this.props.lst[1].length * 1000
    );
    setTimeout(
      () => this.props.dispatch({ type: "KEYPAD_ON" }),
      this.props.lst[1].length * 1000 + 100
    );
  };
  click = () => {
    this.props.dispatch({ type: "RESET_LEVEL" });
    setTimeout(() => {
      var numLst = [];
      for (var i = 0; i < 10; i++) {
        numLst.push(i);
      }

      var rNumLst = numLst.pick(this.props.lst[3]);
      var rNumStr = rNumLst.join("");
      console.log(rNumStr);
      this.props.dispatch({ type: "SAVE_SHOWLIST", id: rNumStr });
      setTimeout(() => console.log(this.props.lst), 0);
      setTimeout(() => this.showTime(), 0);
      setTimeout(() => this.props.dispatch({ type: "MSGBOX_OFF" }), 0);
    }, 0);
  };
  mouseOver = () => {};

  render() {
    return (
      <button
        className="Msgbox"
        onClick={this.click}
        onMouseOver={this.mouseOver}
        id={this.props.id}
      >
        {this.props.lst[7]}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  lst: state.lst
});

export default connect(mapStateToProps)(Msgbox);
