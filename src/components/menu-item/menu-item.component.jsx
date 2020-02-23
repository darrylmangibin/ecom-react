import React from "react";
import { withRouter } from 'react-router-dom';
import classnames from "classnames";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
	return (
		<div
			className={classnames("menu-item", {
				large: size
			})}
			onClick={() => history.push(linkUrl)}
		>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
