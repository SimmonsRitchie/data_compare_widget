import React from "react";

class ContainerSplit extends React.Component {
  render() {
    const {
      left,
      right
    } = this.props;

    return (
      <div className="container__split">
        <div className="container__split-inner">{left}</div>
        <div className="container__split-inner">{right}</div>
      </div>
    );
  }
}

export default ContainerSplit;
