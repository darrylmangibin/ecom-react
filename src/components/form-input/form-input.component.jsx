import React from "react";
import classnames from "classnames";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...props }) => {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...props} />
			{label ? (
				<label
					className={classnames("form-input-label", {
						shrink: props.value.length
					})}
				>{label}</label>
			) : null}
		</div>
	);
};

export default FormInput;
