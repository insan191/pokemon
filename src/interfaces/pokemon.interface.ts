export interface NamedAPIResourceList {
	count: number
	next: null | string
	previous: null | string
	results: NamedAPIResource[]
}

export interface NamedAPIResource {
	name: string
	url: string
}

export interface Pokemon {
	abilities: AbilityElement[]
	base_experience: number | null
	forms: NamedAPIResource[]
	game_indices: PokemonGameIndex[]
	height: number
	held_items: HeldItem[]
	id: number
	is_default: boolean
	location_area_encounters: string
	moves: MoveElement[]
	name: string
	order: number
	past_types: PastType[]
	species: NamedAPIResource
	sprites: PokemonSprites
	stats: StatElement[]
	types: PokemonType[]
	weight: number
}

interface AbilityElement {
	ability: NamedAPIResource
	is_hidden: boolean
	slot: number
}

interface PokemonGameIndex {
	game_index: number
	version: NamedAPIResource
}

interface HeldItem {
	item: NamedAPIResource
	version_details: HeldItemVersionDetail[]
}

interface HeldItemVersionDetail {
	rarity: number
	version: NamedAPIResource
}

interface MoveElement {
	move: NamedAPIResource
	version_group_details: VersionGroupDetail[]
}

interface VersionGroupDetail {
	level_learned_at: number
	move_learn_method: NamedAPIResource
	version_group: NamedAPIResource
}

interface PastType {
	generation: NamedAPIResource
	types: PastTypeType[]
}

interface PastTypeType {
	slot: number
	type: NamedAPIResource
}

interface PokemonSprites {
	back_default: null | string
	back_female: null | string
	back_shiny: null | string
	back_shiny_female: null | string
	front_default: null | string
	front_female: null | string
	front_shiny: null | string
	front_shiny_female: null | string
	other: Other
	versions: Versions
}

interface DreamWorld {
	front_default: null | string
	front_female: null | string
}

interface Other {
	dream_world: DreamWorld
	home: Home
	'official-artwork': OfficialArtwork
}

interface Home {
	front_default: null | string
	front_female: null | string
	front_shiny: null | string
	front_shiny_female: null | string
}

interface OfficialArtwork {
	front_default: null | string
	front_shiny: null | string
}

interface GenerationI {
	'red-blue': RedBlue
	yellow: Yellow
}

interface Yellow {
	back_default: null | string
	back_gray: null | string
	back_transparent: null | string
	front_default: null | string
	front_gray: null | string
	front_transparent: null | string
}

interface RedBlue {
	back_default: null | string
	back_gray: null | string
	back_transparent: null | string
	front_default: null | string
	front_gray: null | string
	front_transparent: null | string
}

interface Versions {
	'generation-i': GenerationI
	'generation-ii': GenerationIi
	'generation-iii': GenerationIii
	'generation-iv': GenerationIv
	'generation-v': GenerationV
	'generation-vi': GenerationVi
	'generation-vii': GenerationVii
	'generation-viii': GenerationViii
}

interface GenerationVii {
	icons: GenerationViiIcons
	'ultra-sun-ultra-moon': UltraSunUltraMoon
}

interface GenerationViii {
	icons: GenerationViiiIcons
}

interface GenerationViiiIcons {
	front_default: null | string
	front_female: null | string
}

interface UltraSunUltraMoon {
	front_default: null | string
	front_female: null | string
	front_shiny: null | string
	front_shiny_female: null | string
}

interface GenerationViiIcons {
	front_default: null | string
	front_female: null | string
}

interface GenerationVi {
	'omegaruby-alphasapphire': OmegarubyAlphasapphire
	'x-y': XY
}

interface OmegarubyAlphasapphire {
	front_default: null | string
	front_female: null | string
	front_shiny: null | string
	front_shiny_female: null | string
}

interface XY {
	front_default: null | string
	front_female: null | string
	front_shiny: null | string
	front_shiny_female: null | string
}

interface GenerationV {
	'black-white': BlackWhite
}

interface BlackWhite {
	animated: Animated
	back_default: null | string
	back_female: null | string
	back_shiny: null | string
	back_shiny_female: null | string
	front_default: null | string
	front_female: null | string
	front_shiny: null | string
	front_shiny_female: null | string
}

interface Animated {
	back_default: null | string
	back_female: null | string
	back_shiny: null | string
	back_shiny_female: null | string
	front_default: null | string
	front_female: null | string
	front_shiny: null | string
	front_shiny_female: null | string
}

interface GenerationIv {
	'diamond-pearl': DiamondPearl
	'heartgold-soulsilver': HeartgoldSoulsilver
	platinum: Platinum
}

interface DiamondPearl {
	back_default: null | string
	back_female: null | string
	back_shiny: null | string
	back_shiny_female: null | string
	front_default: null | string
	front_female: null | string
	front_shiny: null | string
	front_shiny_female: null | string
}

interface HeartgoldSoulsilver {
	back_default: null | string
	back_female: null | string
	back_shiny: null | string
	back_shiny_female: null | string
	front_default: null | string
	front_female: null | string
	front_shiny: null | string
	front_shiny_female: null | string
}

interface Platinum {
	back_default: null | string
	back_female: null | string
	back_shiny: null | string
	back_shiny_female: null | string
	front_default: null | string
	front_female: null | string
	front_shiny: null | string
	front_shiny_female: null | string
}

interface GenerationIii {
	emerald: Emerald
	'firered-leafgreen': FireredLeafgreen
	'ruby-sapphire': RubySapphire
}

interface Emerald {
	front_default: null | string
	front_shiny: null | string
}

interface FireredLeafgreen {
	back_default: null | string
	back_shiny: null | string
	front_default: null | string
	front_shiny: null | string
}

interface RubySapphire {
	back_default: null | string
	back_shiny: null | string
	front_default: null | string
	front_shiny: null | string
}

interface GenerationIi {
	crystal: Crystal
	gold: Gold
	silver: Silver
}

interface Silver {
	back_default: null | string
	back_shiny: null | string
	front_default: null | string
	front_shiny: null | string
	front_transparent: null | string
}

interface Gold {
	back_default: null | string
	back_shiny: null | string
	front_default: null | string
	front_shiny: null | string
	front_transparent: null | string
}

interface Crystal {
	back_default: null | string
	back_shiny: null | string
	back_shiny_transparent: null | string
	back_transparent: null | string
	front_default: null | string
	front_shiny: null | string
	front_shiny_transparent: null | string
	front_transparent: null | string
}

interface StatElement {
	base_stat: number
	effort: number
	stat: NamedAPIResource
}

interface PokemonType {
	slot: number
	type: NamedAPIResource
}
