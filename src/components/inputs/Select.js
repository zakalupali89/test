import {useId} from "react";

export default function Select({width, label, name, ariaLabel, options}) {
	const id = useId();
	return (
		<div className="d-flex flex-column" style={{width}}>
			<label htmlFor={id} className="label">{label}</label>
			<select id={id} defaultValue='' className="input" name={name} aria-label={ariaLabel}>
				{options.map((item, i) =>
					item?.value
						? <option key={item.label} value={item.value}>{item.label}</option>
						: <option key={i} value='' disabled hidden></option>
				)}
			</select>
		</div>
	)
}
