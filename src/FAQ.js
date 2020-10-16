import React from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import Details from "./Details";

const Card = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template: 30% 70% / 1fr;

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr / 1fr 1fr;
	}
`;

const Image = styled.div``;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const List = styled(motion.ul)`
	list-style: none;
	padding: 0;
	width: 100%;
	padding: 2rem;
`;

const FAQ = () => {
	return (
		<Card>
			<Image></Image>
			<Content>
				<h1>FAQ</h1>
				<AnimateSharedLayout>
					<List layout>
						<Details title={TEXT.q1.title} content={TEXT.q1.content} />
						<Details title={TEXT.q2.title} content={TEXT.q2.content} />
					</List>
				</AnimateSharedLayout>
			</Content>
		</Card>
	);
};

export default FAQ;

const TEXT = {
	q1: {
		title: "How many team members can I invite?",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates quam ullam sint ut a culpa.",
	},
	q2: {
		title: "What is the maximum file upload size?",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates quam ullam sint ut a culpa.",
	},
	q3: {
		title: "How do I reset my password?",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates quam ullam sint ut a culpa.",
	},
	q4: {
		title: "Can I cancel my subscription?",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates quam ullam sint ut a culpa.",
	},
	q5: {
		title: "Do you provide additional support?",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates quam ullam sint ut a culpa.",
	},
};
