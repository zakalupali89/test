export const optionsNationality = [
	{},
	{label: 'American', value: 'American'},
	{label: 'German', value: 'German'},
	{label: 'Italian', value: 'Italian'}
]

export function getOptionsMonths() {
	const months = [];
	for (let i = 0; i < 12; i++) {
		const monthName = new Date(2023, i).toLocaleString('default', {month: 'long'});
		months.push(monthName);
	}
	return months.map(item => ({label: item, value: item}));
}

export function getRange(length, start = 1, step = 1) {
	return [...Array.from({length}, (v, i) => start + i * step)];
}

export function getOptionsNumbers(length, start = 1, step = 1) {
	return getRange(length, start, step).map((item) => ({label: item, value: item}));
}
