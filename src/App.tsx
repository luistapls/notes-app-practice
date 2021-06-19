import React from 'react';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

interface Props {}

interface State {
	signIn: boolean;
	signUp: boolean;
}

class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.clickSignIn = this.clickSignIn.bind(this);
		this.clickSignUp = this.clickSignUp.bind(this);
		this.state = { signIn: false, signUp: false };
	}

	clickSignIn(): void {
		this.setState({ signIn: !this.state.signIn });
	}

	clickSignUp(): void {
		this.setState({ signUp: !this.state.signUp });
	}

	render(): JSX.Element {
		if (this.state.signIn) {
			return <SignIn />;
		}
		if (this.state.signUp) {
			return <SignUp />;
		}
		return (
			<div>
				<button onClick={this.clickSignIn}>Sign in</button>
				<button onClick={this.clickSignUp}>Sign up</button>
			</div>
		);
	}
}
export default App;
