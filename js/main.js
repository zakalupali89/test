const ALLOWED_AGE = 16;
const INTERVAL_YEARS = 100

const selectDay = document.querySelector('select[name="day"]');
const selectMonth = document.querySelector('select[name="month"]');
const selectYear = document.querySelector('select[name="year"]');

const currentYear = new Date().getFullYear();
const firstYear = currentYear - INTERVAL_YEARS - ALLOWED_AGE;

const months = [];
for (let i = 0; i < 12; i++) {
	const monthName = new Date(2023, i).toLocaleString('default', {month: 'long'});
	months.push(monthName);
}

for (let i = 1; i <= INTERVAL_YEARS; i++) {

	if (i <= 31) {
		const optionDay = document.createElement('option')
		optionDay.setAttribute('value', i.toString());
		optionDay.text = i.toString();
		selectDay.append(optionDay);
	}

	if (i < 12) {
		const optionMonth = document.createElement('option')
		const currentValue = months[i - 1]
		optionMonth.setAttribute('value', currentValue);
		optionMonth.text = currentValue;
		selectMonth.append(optionMonth);
	}

	const optionYear = document.createElement('option');
	const currentValue = (firstYear + i).toString();
	optionYear.setAttribute('value', currentValue);
	optionYear.text = currentValue;
	selectYear.append(optionYear);

}

const submitInput = document.querySelector('input[value="Complete Signup"]')
const form = document.querySelector('form');
submitInput.addEventListener('click', () => {
	if (submitInput.classList.contains('invalid')) {
		submitInput.classList.toggle('invalid');
	}
	if (!form.reportValidity()) {
		submitInput.classList.toggle('invalid')
	}
}, false);
