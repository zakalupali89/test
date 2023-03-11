import css from './SignUp.module.scss'
import SignUpASide from "./SignUpASide";
import LogoSvg from "./LogoSvg";

export default function SignUp({children}) {
	return (
		<div className={css.container}>
			<SignUpASide text="Sign up"/>
			<div className={css.wrapper}>

				<div className={css.svgWrapper}>
					<LogoSvg animated={true}/>
				</div>

				{children}
			</div>
		</div>
	)
}


