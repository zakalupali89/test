import css from "./FormTitle.module.scss";

export default function FormTitle({children, subtitle, gap}) {
	return (
		<div>
			<h5 className={css.title}>{children}</h5>
			<div className={css.subtitle} style={{marginTop: gap}}>{subtitle}</div>
		</div>
	)
}
