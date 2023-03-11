import css from './App.module.scss';
import SignUp from "./components/form/SignUp";
import FormSignUp from "./components/form/FormSignUp";

function App() {
	return (
		<div className={css.app}>
				<SignUp>
					<FormSignUp/>
				</SignUp>
		</div>
	);
}

export default App;
