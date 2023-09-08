export const conversion = (value: number | null | undefined): number | null => {
	if (value == null) {
		return null
	}
	return value / 10
}
