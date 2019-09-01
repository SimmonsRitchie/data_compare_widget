/* CONFIG

Configure what fields are used to create dropdown options and what data is displayed in infoBox 1 and 2
*/

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


// ------- INFO BOX
// Data will be grouped by this key name.
export const GROUP_BY = "Subject";
// Data within each group will be averaged based on these key names:
export const FIELDS = [
  "Number Scored",
  // "Percent Advanced",
  // "Percent Basic",
  // "Percent Below Basic",
  "Percent Proficient"
];

// ---------------------------------------------------------------------