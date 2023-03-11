import css from './FormInputs.module.scss'
import Input from "../inputs/Input";
import Select from "../inputs/Select";
import RadioButton from "../inputs/RadioButton";
import RadioGroup from "../inputs/RadioGroup";
import SelectGroup from "../inputs/SelectGroup";
import {getOptionsMonths, getOptionsNumbers, optionsNationality} from "../../helpers/optionsForSelect";

export default function FormInputs() {
	return (
		<div className={css.inputs}>
			<Input name="first-name" label="First Name" type="text"/>
			<Input name="last-name" label="Last Name" type="text"/>
			<Select width="102%" label="Nationality" name="nationality" options={optionsNationality}/>
			<Input name="email" label="E-mail" type="email"/>

			<SelectGroup label="Date of Birth">
				<Select width="26%" ariaLabel="day of birth" name="day" options={getOptionsNumbers(31)}/>
				<Select width="42%" ariaLabel="month of birth" name="month" options={getOptionsMonths()}/>
				<Select
					width="30%"
					ariaLabel="year of birth"
					name="year"
					options={getOptionsNumbers(120, new Date().getFullYear() - 120)}/>
			</SelectGroup>

			<RadioGroup label="Gender">
				<RadioButton name="gender" label="Male"/>
				<RadioButton name="gender" label="Female"/>
			</RadioGroup>

			<Input minLength={8} name="password" label="Password" type="password" autocomplete="new-password"/>
			<Input minLength={8} name="confirm-password" label="Confirm Password" type="password"/>
		</div>
	)
}
