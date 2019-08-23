import React from 'react';

class Body extends React.Component {
  
  state = {
    parentSelection: "",
    child1Selection: "",
    child2Selection: ""
  }

  

  render() {
    return (
      <div className="body__container has-text-centered">
      <p>Insert stuff in this component or replace it with your own components.</p>
    </div>
    )
  }
}


export default Body