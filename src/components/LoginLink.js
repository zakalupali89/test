import css from "./LoginLink.module.scss";

export default function LoginLink () {
	return (
		<div className={css.link}>
			Have an account?
			{' '}
			<a href="/login">Login</a>
		</div>
	)
}
