import React from "react";
import { createParentOptions } from '../utils/process/options'
import ContainerSplit from "./container/ContainerSplit";
import InfoBox from "./infoBox/infoBox"
import SelectSet from "./select/SelectSet";
import {
  PARENT_OPTIONS_KEY,
  CHILD_OPTIONS_KEY,
  PARENT_LABEL,
  CHILD_LABEL,
  FIELDS
} from "../config";

class Body extends React.Component {
  state = {
    // parentOptions: [],
    select1Parent: null,
    select1Child: null,
    select2Parent: null,
    select2Child: null
  };

  // componentDidMount() {
  //     const parentOptions = createParentOptions(this.props.data, PARENT_OPTIONS_KEY)
  //     this.setState({
  //       parentOptions
  //     });
  // }

  handleSelect = (selection, meta) => {
    const selectName = meta.name;
    const selectSet = selectName.match(/select\d/)[0];
    const selectMember = selectName.match(/(parent|child)/i)[0];
    if (selectMember === "Parent" && this.state[selectSet + "Child"]) {
      // If parent select is selected after child select has been set,
      // clear the child select's value.
      this.setState({
        [selectName]: selection,
        [selectSet + "Child"]: null
      });
    } else {
      this.setState({
        [selectName]: selection
      });
    }
  };

  render() {
    const data = this.props.data
    const parentOptions = createParentOptions(this.props.data, PARENT_OPTIONS_KEY)

    const {
      select1Parent,
      select2Parent,
      select1Child,
      select2Child
    } = this.state;
    return (
      <div className="container__body has-text-centered">
        <ContainerSplit
          left={
            <SelectSet
              data={data}
              setNum={1}
              parentOptionsKey={PARENT_OPTIONS_KEY}
              parentOptions={parentOptions}
              parentLabel={PARENT_LABEL}
              parentValue={select1Parent}
              childOptionsKey={CHILD_OPTIONS_KEY}
              childLabel={CHILD_LABEL}
              childValue={select1Child}
              handleSelect={this.handleSelect}
            />
          }
          right={
            <SelectSet
              data={data}
              setNum={2}
              parentOptionsKey={PARENT_OPTIONS_KEY}
              parentOptions={parentOptions}
              parentLabel={PARENT_LABEL}
              parentValue={select2Parent}
              childOptionsKey={CHILD_OPTIONS_KEY}
              childLabel={CHILD_LABEL}
              childValue={select2Child}
              handleSelect={this.handleSelect}
            />
          }
        />
        <ContainerSplit
          left={
            select1Child && (
              <InfoBox
                selectedChildVal={select1Child}
                data={data}
                childOptionsKey={CHILD_OPTIONS_KEY}
                fields={FIELDS}
              />
            )
          }
          right={
            select2Child && (
              <InfoBox
                selectedChildVal={select2Child}
                data={data}
                childOptionsKey={CHILD_OPTIONS_KEY}
                fields={FIELDS}
              />
            )
          }
        />
      </div>
    );
  }
}

export default Body;
