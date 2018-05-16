import React from "react";
import { connect } from "react-redux";

export class BackSpace extends React.Component {
  click = () => {
    this.props.dispatch({ type: "BACKSPACE" });
    setTimeout(() => {
      console.log(this.props.lst);
      this.props.dispatch({ type: "DISPLAY", id: this.props.lst[0] });
    }, 0);
  };
  mouseOver = () => {};

  render() {
    var id = this.props.id;
    return (
      <button
        className="lightOff"
        onClick={this.click}
        onMouseOver={this.mouseOver}
        id={this.props.id}
      >
        {this.props.id}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  lst: state.lst
});

export default connect(mapStateToProps)(BackSpace);
