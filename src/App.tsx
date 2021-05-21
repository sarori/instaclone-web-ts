import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"

interface IForm {
	name: string
	lastname?: string
}

function App() {
	const { register, handleSubmit, getValues } = useForm<IForm>()
	const onValid: SubmitHandler<IForm> = (data) => {
		console.log(data)
		const { name, lastname } = getValues()
	}

	return (
		<form onSubmit={handleSubmit(onValid)}>
			<input
				{...register("name", {
					required: true,
				})}
			/>
			<input {...register("lastname")} />
		</form>
	)
}

export default App
