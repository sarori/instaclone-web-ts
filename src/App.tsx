import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { ourTheme } from "./styles"

const Container = styled.div`
	background-color: ${(props) => props.theme.bgColor};
	color: ${(props) => props.theme.fontColor};
`

function App() {
	return (
		<ThemeProvider theme={ourTheme}>
			<Container>App</Container>
		</ThemeProvider>
	)
}

export default App
