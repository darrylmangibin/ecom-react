import React from "react";
import classnames from "classnames";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div
			className={classnames("menu-item", {
				large: size
			})}
		>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			>
				
			</div>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>
	);
};

export default MenuItem;
