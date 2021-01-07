import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

:root {
	font-size: 10pt;
	font-family: "Open Sans","Roboto", "Arial",sans-serif;
	color: var(--dark-green);
	background: var(--bg);
	--main-green: #39b54a;
	--white: #fff;
	--dark-gray: #333;
	--grey: #484848;
	--off-grey: #767676;
	--light-grey: #A5A5A5;

	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	
}

button,a{
	&:hover{
		cursor: pointer;
	}
}


`;
