import styled from "styled-components"
import Header from "../routes/Header/Header"
import AppRouter from "./AppRouter"

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	background-image: url("/images/bgimg.jpg");
	background-size: cover;
`

function App() {
	return (
		<Wrapper>
			<Header />
			<AppRouter />
		</Wrapper>
	)
}

export default App
