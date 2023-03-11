import css from './RadioGroup.module.scss'

export default function RadioGroup({label, children}) {
	return (
		<div className="d-flex flex-column">
			<label className="label">{label}</label>
			<div className={css.container}>
				{children}
			</div>
		</div>
	)
}
