import React from "react";

class ContainerSplit extends React.Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <div className="container__split">
        {children}
      </div>
    );
  }
}

export default ContainerSplit;
