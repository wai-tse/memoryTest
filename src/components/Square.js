import React from "react";
import { connect } from "react-redux";

export class Square extends React.Component {
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
    this.props.dispatch({ type: "INCREMENT", id: this.props.id });
    setTimeout(() => {
      console.log(this.props.lst);
      this.props.dispatch({ type: "DISPLAY", id: this.props.lst[0] });
      // if (this.props.lst[0] == this.props.lst[1]) console.log("Match");
      // if (this.props.lst[0].length == this.props.lst[1].length) {
      //   console.log("Match Length");
      //   var check = this.props.lst[4](this.props.lst[0] === this.props.lst[1]);
      //   if (check === 0) {
      //     this.props.dispatch({ type: "LEVEL_UP" });
      //   } else if (check === 2) {
      //     this.props.dispatch({ type: "LEVEL_DOWN" });
      //   } else
      //     alert("Test ended. You working memory level is " + this.props.lst[3]);
      //   var numLst = [];
      //   for (var i = 0; i < 10; i++) {
      //     numLst.push(i);
      //   }
      //   var rNumLst = numLst.pick(this.props.lst[3]);
      //   var rNumStr = rNumLst.join("");
      //   console.log(rNumStr);
      //   this.props.dispatch({ type: "SAVE_SHOWLIST", id: rNumStr });
      //   this.props.dispatch({ type: "RESET_PLAYLIST" });
      //   setTimeout(() => this.showTime(), 1000);
      // }
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

export default connect(mapStateToProps)(Square);
