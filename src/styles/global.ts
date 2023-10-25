import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
		background-color: ${({ theme }) => theme.colors.baseBackground};
		color: ${({ theme }) => theme.colors.baseText};
		-web-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: 400 1rem 'Nunito', sans-serif;
	}

`
