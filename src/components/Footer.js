/* Footer: insert credit, footnotes and data source.

Note: The logo can look awkward depending on the footnote text (especially if it wraps).
You may need to adjust the css to hide the spotlight logo for smaller screen widths or
simply remove it entirely.
*/

import React from "react";

const Footer = () => {
  const spotlight = "https://www.spotlightpa.org/";
  return (
    <div>
      <div className="footer__container">

        <div className="is-size-7 has-text-grey has-text-centered">
          <p>
            <b>Source: </b>Source of Data.
          </p>
          <p>
            Created by Firstname Lastname, <a href={spotlight}>Spotlight PA</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;


