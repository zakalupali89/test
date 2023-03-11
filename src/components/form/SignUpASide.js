import css from './SignUpASide.module.scss'

export default function SignUpASide({text}) {
	return (
		<aside className={css.container}>
			<div className={css.title}>{text}</div>
		</aside>
	)
}
