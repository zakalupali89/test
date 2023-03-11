import css from './SelectGroup.module.scss'
export default function SelectGroup({label, children}) {
	return (
		<div className={css.container}>
			<label className="label">{label}</label>
			<div className={css.group}>
				{children}
			</div>
		</div>
	)
}
