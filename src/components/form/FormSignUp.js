import css from './FormSignUp.module.scss'
import FormInputs from "./FormInputs";
import FormFooter from "./FormFooter";
import {useRef, useState} from "react";
import clsx from "clsx";
import {signUp} from "../../api/signUp";
import FormTitle from "./FormTitle";
import ModalSignUpRegistered from "./ModalSignUpRegistered";

export default function FormSignUp() {
	const formRef = useRef();
	const [showError, setShowError] = useState('');
	const [shake, setShake] = useState(undefined);
	const [isShowModal, setIsShowModal] = useState(false);
	const handleClick = () => {
		if (shake) {
			setShake(undefined);
		}
		if (!formRef.current.reportValidity()) {
			setTimeout(() => setShake('shake'));
		}
	};

	const handleSubmit = async (eventSubmit) => {
		eventSubmit.preventDefault();
		const result = await signUp(eventSubmit.target);

		if (result.response === 'ok') {
			setIsShowModal(true);
			formRef.current.reset();
			showError && (setShowError(undefined));
		} else if (result.response === 'error') {
			if (showError) {
				setShowError(undefined);
			}

			setTimeout(() => {
				setShowError('show');
				setShake('shake')
			});
			console.log('error');
		}
	};
	console.log(showError)
	return (
		<form ref={formRef} onSubmit={handleSubmit} className={css.container}>

			<FormTitle subtitle="Use the form below to create your account.">
				New user?
			</FormTitle>

			<FormInputs/>

			<div className={css.flexGrow}/>

			<div className={clsx(css.error, showError)}/>

			<FormFooter onClick={handleClick} shake={shake} formRef={formRef}/>
			<ModalSignUpRegistered show={isShowModal} onHide={() => setIsShowModal(false)}/>
		</form>
	)
}
