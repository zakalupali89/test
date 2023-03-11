import css from "./FormFooter.module.scss";
import clsx from "clsx";
import LoginLink from "../LoginLink";

export default function FormFooter({onClick, shake}) {

	return (
		<div className={css.container}>
			<LoginLink/>
			<button onClick={onClick} className={clsx(css.submit, shake)} type='submit'>Complete Signup</button>
		</div>
	)
}
