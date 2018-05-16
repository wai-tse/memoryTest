import React from "react";
import { connect } from "react-redux";

export class Enter extends React.Component {
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
  };

  click = () => {
    this.props.dispatch({ type: "KEYPAD_OFF" });
    var displayNewLst = () => {
      setTimeout(() => {
        var numLst = [];
        for (var i = 0; i < 10; i++) {
          numLst.push(i);
        }
        var rNumLst = numLst.pick(this.props.lst[3]);
        var rNumStr = rNumLst.join("");
        console.log(rNumStr);
        this.props.dispatch({ type: "SAVE_SHOWLIST", id: rNumStr });
        this.props.dispatch({ type: "RESET_PLAYLIST" });
        this.props.dispatch({ type: "DISPLAY", id: "" });
      }, 0);

      setTimeout(() => {
        this.showTime();
        setTimeout(
          () => this.props.dispatch({ type: "KEYPAD_ON" }),
          this.props.lst[3] * 1000
        );
      }, 1000);
    };

    if (this.props.lst[0] == this.props.lst[1]) console.log("Match");
    console.log("Match Length");
    var check = this.props.lst[4](this.props.lst[0] === this.props.lst[1]);
    if (check === 0) {
      this.props.dispatch({ type: "LEVEL_UP" });
      displayNewLst();
    } else if (check === 1) {
      displayNewLst();
    } else if (check === 2) {
      this.props.dispatch({ type: "LEVEL_DOWN" });
      displayNewLst();
    } else if (check === 3) {
      this.props.dispatch({ type: "KEYPAD_OFF" });
      this.props.dispatch({ type: "MSGBOX_ON" });
      this.props.dispatch({ type: "CHANGE_MSG" });
      this.props.dispatch({ type: "RESET_LOGICA" });
    }
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

export default connect(mapStateToProps)(Enter);
