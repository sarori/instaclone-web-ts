import styled from "styled-components"

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 97%;
`
export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 85%;
`
export const LeftContainer = styled.div`
	width: 85%;
	height: 100%;
	border: 1px solid black;
`
export const RightContainer = styled.div`
	width: 15%;
	height: 100%;
`

export const FooterWrapper = styled.div`
	width: 100%;
	height: 15%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`

export const FooterCover = styled.div`
	width: 34%;
	height: 55%;
	background-color: white;
	opacity: 0.3;
	border-radius: 15px;
	position: absolute;
	z-index: 1;
`

export const FooterContainer = styled.div`
	width: 40%;
	height: 55%;
	border-radius: 15px;
	position: absolute;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 10%;
		height: 95%;
		&:hover {
			width: 12%;
			height: 120%;
			transition: 0.2s ease-in-out;
		}
	}
`
