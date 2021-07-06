import React from "react";
import PropTypes from "prop-types";

export function Info({ color }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 7C13 10.2843 10.2856 13 6.9971 13C3.71435 13 1 10.2843 1 7C1 3.71567 3.70855 1 6.9913 1C10.2798 1 13 3.71567 13 7ZM7.60334 10H6.39311V5.63637H7.60334V10ZM7.65732 4.46023C7.65732 4.7983 7.36186 5.07387 7.00107 5.07387C6.64311 5.07387 6.34766 4.7983 6.34766 4.46023C6.34766 4.125 6.64311 3.84943 7.00107 3.84943C7.36186 3.84943 7.65732 4.125 7.65732 4.46023Z"
        fill={color}
      />
    </svg>
  );
}

Info.propTypes = {
  color: PropTypes.string,
};

Info.defaultProps = {
  color: "black",
};
