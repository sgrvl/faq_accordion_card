import React from "react";
import FAQ from "./FAQ";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Kumbh Sans', sans-serif;
  }

  body {
    background: linear-gradient(hsl(273, 75%, 66%),hsl(240, 73%, 65%)) no-repeat fixed;
    color: hsl(240, 6%, 50%);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  h1, h4 {
    color: hsl(238, 29%, 16%);
    font-weight: 700;
  }
`;

const StyledApp = styled.div`
	position: absolute;
	background: white;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 1440px;
	height: 70vh;

	@media screen and (min-width: 768px) {
		width: 70vw;
	}

	border-radius: 25px;
	box-shadow: 0 1.7px 3.3px rgba(0, 0, 0, 0.056), 0 4px 8px rgba(0, 0, 0, 0.081),
		0 7.5px 15px rgba(0, 0, 0, 0.1), 0 13.4px 26.8px rgba(0, 0, 0, 0.119),
		0 25.1px 50.1px rgba(0, 0, 0, 0.144), 0 60px 120px rgba(0, 0, 0, 0.2);
`;

function App() {
	return (
		<>
			<StyledApp>
				<FAQ />
			</StyledApp>
			<GlobalStyle />
		</>
	);
}

export default App;
