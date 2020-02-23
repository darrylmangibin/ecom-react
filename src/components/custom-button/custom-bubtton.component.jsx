import React from "react";
import classnames from 'classnames';

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...props }) => {
	return (
		<button className={classnames("custom-button", {
			'google-sign-in': isGoogleSignIn
		})} {...props}>
			{children}
		</button>
	);
};

export default CustomButton;
