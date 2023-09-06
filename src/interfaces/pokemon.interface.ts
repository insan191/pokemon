export interface IPokemon {
	name: string
	url: string
}

export interface IPokemonData {
	count: number
	next: string
	previous: null | string
	results: IPokemon[]
}
