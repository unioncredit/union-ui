import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export const Button = ({ label, ...props }) => {
  return (
    <button
      type="button"
      className="button"
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};