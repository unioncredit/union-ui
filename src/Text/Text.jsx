import React from "react";
import PropTypes from 'prop-types';

import "./text.scss";

export function Text({ children, size }) {
	return (
		<p className="text">{children}</p>
	);
}

Text.propTypes = {
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}