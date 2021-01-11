import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

:root {
	font-size: 7.5pt;
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
	outline: none;
	box-shadow: none;
	&:hover{
		cursor: pointer;
	}
}

@keyframes up {
			from {
				opacity: 0;
				transform: translateY(16px)
			}
			to {
				opacity: 1;
				transform: translateY(0)
			}
		}
		.animateUp {
			animation-name: up;
			animation-duration: 1000ms;
			animation-fill-mode: backwards;
		}

		.swal-modal {
	background-color: white;
	border-radius: 0;
}

.swal-title, .swal-text {
	color: var(--dark-grey);
	font-family: "Roboto", sans-serif;
	font-size: 2rem;
}

.swal-title {
	font-weight: bold;
}

.swal-button {
	width: 10rem;
	height: 4rem;
	background-color: var(--main-green);
	color: white;
	border: none;
	border-radius: 0;
	outline: none;
}

		.swal-button:hover {
			background-color: #2b8a38  !important;
		}



`;
