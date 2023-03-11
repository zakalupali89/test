import {useId} from "react";
import css from './RadioButton.module.scss'

export default function RadioButton(props) {
	const {label, name, value} = props
	const id = useId();
	return (
		<div className="d-flex align-items-center">
			<input
				className={css.radio}
				id={id}
				name={name}
				type="radio"
				value={value}/>
			<label className={css.label} htmlFor={id}>{label}</label>
		</div>
	)
}
