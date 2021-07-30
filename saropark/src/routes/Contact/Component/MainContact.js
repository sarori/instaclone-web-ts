import { useHistory } from "react-router-dom"
import { FileScreen } from "../../SharedStyles"
import { Contact } from "../ContactStyles"

const MainContact = () => {
	const history = useHistory()
	return (
		<FileScreen.Wrapper>
			<FileScreen.Container>
				<FileScreen.Top>
					<FileScreen.RoundBtn onClick={() => history.push("/")}></FileScreen.RoundBtn>
					<FileScreen.RoundBtn></FileScreen.RoundBtn>
					<FileScreen.RoundBtn></FileScreen.RoundBtn>
				</FileScreen.Top>
				<FileScreen.Body>
					<Contact.Header>
						<Contact.To>To:&nbsp;&nbsp;</Contact.To>{" "}
						<Contact.Name>Saro Park</Contact.Name>
					</Contact.Header>
					<Contact.Body>
						<Contact.BLeft>How Can I Contact You?</Contact.BLeft>
						<Contact.BRight>
							<Contact.TextWrapper>
								<Contact.Text>Github</Contact.Text>{" "}
								<img src={"/images/git.png"} alt="github" />
							</Contact.TextWrapper>
						</Contact.BRight>
						<Contact.BRight></Contact.BRight>
						<Contact.BRight></Contact.BRight>
						<Contact.BRight></Contact.BRight>
						<Contact.BRight>Thank you💕</Contact.BRight>
					</Contact.Body>
				</FileScreen.Body>
			</FileScreen.Container>
		</FileScreen.Wrapper>
	)
}

export default MainContact
