import {useId} from "react";

export default function Input(props) {
	const {label, name, value, defaultValue, type, minLength, autocomplete} = props
	const id = useId();
	return (
		<div className="d-flex flex-column">
			<label htmlFor={id} className="label">{label}</label>
			<input
				className="input"
				minLength={minLength}
				autoComplete={autocomplete}
				id={id}
				name={name}
				type={type}
				value={value}
				defaultValue={defaultValue}
				required
			/>
			<div className="error-line"/>
		</div>
	)
}
