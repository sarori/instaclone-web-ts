import styled from "styled-components"

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 3%;
	position: relative;
	box-shadow: 0px 11px 10px 1px rgba(58, 58, 58, 0.3);
	border-bottom: solid 1px darkgray;
`
export const HeaderCover = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 1;
	background-color: #d2dae2;
	opacity: 0.9;
`
export const HeaderContent = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 2;
`
