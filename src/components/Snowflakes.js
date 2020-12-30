import React from 'react'
import styled, { keyframes } from "styled-components";

/**
 * Starfield Background
**/
const Container = styled.div`
	color: white;
	overflow: hidden;
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	width: 100vw;
`;
const animSnowflakes = keyframes`
    from { transform: translateY(-6000px); }
    to { transform: translateY(0px); }
`;
const random = x => Math.floor(Math.random(x) * x);
const multipleBoxShadow = length => {
	const biggestScreenSize = 6560;
	var value = `${random(biggestScreenSize)}px ${random(
		biggestScreenSize
	)}px #FFF`;
	for (var i in Array.from({ length })) {
		value += `, ${random(biggestScreenSize)}px ${random(
			biggestScreenSize
		)}px #FFF`;
	}
	return value;
};
var snowflakes = (h, w, animationTime, shadow) => styled.div`
	width: ${w}px;
	height: ${h}px;
	background: transparent;
	box-shadow: ${multipleBoxShadow(shadow)};
	animation: ${animSnowflakes} ${animationTime}s linear infinite;
	&:after {
		content: " ";
		position: absolute;
		top: 6000px;
		width: ${w}px;
		height: ${h}px;
		box-shadow: ${multipleBoxShadow(shadow)};
	}
`;
const SmallSnowflakes = snowflakes(1, 1, 50, 700);
const MediumSnowflakes = snowflakes(2, 2, 100, 200);
const BigSnowflakes = snowflakes(3, 3, 150, 100);

export const Snowflakes = ({ children, ...props }) => (
	<Container {...props}>
		{children}
		<SmallSnowflakes />
		<MediumSnowflakes />
		<BigSnowflakes />
	</Container>
);

export default Snowflakes

//TODO: was ->  const biggestScreenSize = 2560  ||  from { transform: translateY(-2000px); }  ||  top: 2000px;