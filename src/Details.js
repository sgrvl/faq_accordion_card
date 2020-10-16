import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import arrowImg from "./images/icon-arrow-down.svg";

const Item = styled(motion.li)`
	border-bottom: 1px solid hsl(240, 5%, 91%);
	display: grid;
	grid-template: 1fr 1fr / 90% 10%;
	width: 100%;

	h4 {
		${(props) =>
			props.isOpen
				? `
          font-weight: 700; 
          color: inherit;
        `
				: `
          font-weight: 400; 
          color: hsl(240, 6%, 50%);
        `}
	}
`;

const StyledContent = styled(motion.p)`
	padding-bottom: 1rem;
	grid-row: 2;
`;

const Arrow = styled.img`
	height: 0.65em;
	cursor: pointer;
	grid-column: 2;
`;

const Details = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Item isOpen={isOpen} layout>
			<h4>{title}</h4>
			<AnimatePresence>
				{isOpen && (
					<StyledContent
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{content}
					</StyledContent>
				)}
			</AnimatePresence>
			<Arrow src={arrowImg} onClick={() => setIsOpen(!isOpen)} />
		</Item>
	);
};

export default Details;
