import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:focus {
		outline: 0;
		box-shadow: 0 0 0 0.063rem ${({ theme }) => theme.colors.blue};
		//border: 0.063rem solid ${({ theme }) => theme.colors.blue};
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
