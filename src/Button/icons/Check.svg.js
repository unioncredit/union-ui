import React from "react";
import PropTypes from "prop-types";

export function Check({ color }) {
  return (
    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.97852 10.1777C4.28906 10.1777 4.5293 10.0488 4.69922 9.79688L10.207 1.21875C10.3301 1.02539 10.3828 0.861328 10.3828 0.703125C10.3828 0.287109 10.0898 0 9.66797 0C9.38086 0 9.20508 0.105469 9.0293 0.380859L3.94922 8.4375L1.3418 5.0918C1.16602 4.86328 0.984375 4.76953 0.726562 4.76953C0.304688 4.76953 0 5.06836 0 5.47852C0 5.66016 0.0644531 5.83594 0.216797 6.01758L3.25195 9.80273C3.45703 10.0605 3.67383 10.1777 3.97852 10.1777Z"
        fill={color}
      />
    </svg>
  );
}

Check.propTypes = {
  color: PropTypes.string,
};

Check.defaultProps = {
  color: "black",
};
