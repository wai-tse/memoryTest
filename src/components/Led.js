import React from "react";
import { connect } from "react-redux";

export class Led extends React.Component {
  click = () => {};
  mouseOver = () => {};

  render() {
    return (
      <button
        className="Led"
        onClick={this.click}
        onMouseOver={this.mouseOver}
        id={this.props.id}
      >
        {this.props.lst[2]}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  lst: state.lst
});

export default connect(mapStateToProps)(Led);
