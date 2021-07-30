import Footer from "./Component/Footer"
import MainFolders from "./Component/MainFolders"
import MainIntro from "./Component/MainIntro"
import { Container, FooterWrapper, LeftContainer, RightContainer, Wrapper } from "./HomeStyles"

const Home = () => {
	return (
		<Wrapper>
			<Container>
				<LeftContainer>
					<MainIntro />
				</LeftContainer>
				<RightContainer>
					<MainFolders />
				</RightContainer>
			</Container>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	)
}

export default Home
