
import {
  INPUT_FILE_PATH,
  PARENT_OPTIONS_KEY,
  CHILD_OPTIONS_KEY,
  FILTER_OUT,
  GROUP_BY,
  FIELDS
} from "../../config";
import {processData} from '../process/processData'
import { csv } from "d3-fetch";

export const loadData = () => {
  return Promise.all([csv(INPUT_FILE_PATH)]).then(([data]) => {
    return processData({
      data,
      groupBy: GROUP_BY,
      filters: FILTER_OUT,
      fields: FIELDS,
      parentOptionsKey: PARENT_OPTIONS_KEY,
      childOptionsKey: CHILD_OPTIONS_KEY
    });
  })
}