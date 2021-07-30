import styled from "styled-components"

export const Folder = {
	FolderWrapper: styled.div`
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		width: 100%;
		height: 60%;
	`,
	FolderContainer: styled.div`
		width: 50%;
		height: 25%;
		&:hover {
			div {
				span {
					cursor: pointer;
					padding: 0px 3px;
					border-radius: 4px;
					background-color: #0652dd;
					/* opacity: 0.3; */
					transition: 0.1s ease-in-out;
				}
			}
			div {
				img {
					cursor: pointer;
					padding: 0px 3px;
					border-radius: 4px;
					background-color: #2f3640;
					/* opacity: 0.7; */
					transition: 0.1s ease-in-out;
				}
			}
		}
	`,
	FolderimgDiv: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	Folderimg: styled.img`
		width: 60%;
		height: 35%;
		margin-top: 5px;
	`,
	FolderName: styled.div`
		display: flex;
		justify-content: center;

		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
			Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		font-size: 14px;
		font-weight: 700;
		color: white;
		text-shadow: 1px 1px 2px black;
	`,
}

export const FileScreen = {
	Wrapper: styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	Container: styled.div`
		width: 90%;
		height: 85%;
	`,
	Top: styled.div`
		width: 100%;
		height: 6%;
		background-color: #57606f;
		opacity: 0.9;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	`,
	Body: styled.div`
		width: 100%;
		height: 94%;
		background-color: white;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	`,
	RoundBtn: styled.div`
		width: 15px;
		height: 15px;

		border-radius: 50%;
		margin: 5px;
		&:first-child {
			margin-left: 10px;
			background-color: red;
			cursor: pointer;
		}
		&:nth-child(2) {
			background-color: #fbc531;
		}
		&:last-child {
			background-color: #44bd32;
		}
	`,
}
