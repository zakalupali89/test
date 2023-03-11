import {Modal} from "react-bootstrap";
import SignUp from "./SignUp";
import FormTitle from "./FormTitle";
import LoginLink from "../LoginLink";
import css from './ModalSignUpRegistered.module.scss'

export default function ModalSignUpRegistered({show, onHide}) {
	return (
		<Modal show={show} onHide={onHide} dialogClassName={css.modalWidth} centered>
			<Modal.Header closeButton/>
			<SignUp>
				<div className={css.container}>
					<div className={css.title}>
						<FormTitle gap="11px" subtitle="Use the form below to create your account.">
							New user?
						</FormTitle>
					</div>
					<LoginLink/>
				</div>
			</SignUp>
		</Modal>
	)
}
