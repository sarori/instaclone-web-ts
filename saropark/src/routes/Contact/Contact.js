import Footer from "../Home/Component/Footer"
import MainFolders from "../Home/Component/MainFolders"
import MainContact from "./Component/MainContact"
import {
	Container,
	FooterWrapper,
	LeftContainer,
	RightContainer,
	Wrapper,
} from "../Home/HomeStyles"

const Contact = () => {
	return (
		<Wrapper>
			<Container>
				<LeftContainer>
					<MainContact />
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

export default Contact
