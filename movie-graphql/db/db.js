export const people = [
	{
		id: 1,
		name: "Sarori",
		age: 15,
		gender: "female",
	},
	{
		id: 2,
		name: "a",
		age: 51,
		gender: "male",
	},
	{
		id: 3,
		name: "b",
		age: 32,
		gender: "female",
	},
	{
		id: 4,
		name: "c",
		age: 48,
		gender: "male",
	},
	{
		id: 5,
		name: "d",
		age: 20,
		gender: "female",
	},
	{
		id: 6,
		name: "e",
		age: 19,
		gender: "male",
	},
	{
		id: 7,
		name: "f",
		age: 38,
		gender: "female",
	},
	{
		id: 8,
		name: "g",
		age: 42,
		gender: "male",
	},
]

export const getById = (id) => {
	const filteredMovies = movies.filter((person) => id === person.id)
	return filteredMovies[0]
}
