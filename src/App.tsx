import React from "react"
import { gql, useMutation } from "@apollo/client"
import { login, loginVariables } from "./__generated__/login"

const LOGIN_MUTATION = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			ok
			token
			error
		}
	}
`

function App() {
	const [loginMutation] = useMutation<login, loginVariables>(LOGIN_MUTATION, {
		variables: {
			username: "hello",
			password: "asdf",
		},
	})
	return <h1>Apollo</h1>
}

export default App
