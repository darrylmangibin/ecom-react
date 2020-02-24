import React from "react";
import classnames from 'classnames';

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...props }) => {
	return (
		<button className={classnames("custom-button", {
			'google-sign-in': isGoogleSignIn,
			'inverted': inverted
		})} {...props}>
			{children}
		</button>
	);
};

export default CustomButton;
