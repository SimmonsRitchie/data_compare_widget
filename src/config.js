/* CONFIG

Configure what fields are used to create dropdown options and what data is displayed in infoBox 1 and 2
*/

// ------ FORMATTERS
// These functions are passed into FIELDS to display data
// in different ways, eg. by adding '%'
const displayAsPercent = (number) => `${number}%`

// ---------------------------------------------------------------------

// ------- LOCATION OF DATA
export const INPUT_FILE_PATH = "./static/exams_2018.csv";

// ------- SELECTS
// Key name of data for options in parent select element
export const PARENT_OPTIONS_KEY = "County"
// Key name of data for options in child select element
export const CHILD_OPTIONS_KEY = "District Name"
// Display name of parent select
export const PARENT_LABEL = "county"
// Display name of child select
export const CHILD_LABEL = "school district"

// -------- PROCESS DATA
/* In this case, our data is a list of test scores for individual schools. Much of the data has shared key values,
eg. School District names. Different processing approaches will be needed with different data*/

/* Remove all values from our data that contain the following value. Takes regex*/
export const FILTER_OUT = [
  {field: 'Group',
  matchVal: /Historically Underperforming/
}
]
// Name of field to group data within each group by. Eg. if each row of our data includes fields 
export const GROUP_BY = 'Subject'
// An aggregrate function will be performed on only these fields:
export const FIELDS = [{
  name: "Number Scored",
  displayName: "Avg test score",
  format: null
},
{
  name: "Percent Proficient",
  displayName: "Proficient",
  format: displayAsPercent
}]

// ---------------------------------------------------------------------