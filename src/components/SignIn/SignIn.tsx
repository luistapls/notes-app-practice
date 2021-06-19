import React from 'react';
import Home from '../Home/Home';

interface Props {}
interface State {
	userName: string;
	userPassword: string;
	isSubmitted: boolean;
}
class SignIn extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			userName: '',
			userPassword: '',
			isSubmitted: false,
		};
	}

	handleSubmit(event: any) {
		event.preventDefault();
		this.setState({
			isSubmitted: true,
		});
	}

	handleInputChange(event: any) {
		const newState = { [event.target.name]: event.target.value } as Pick<
			State,
			keyof State
		>;
		this.setState(newState);
	}

	render(): JSX.Element {
		if (this.state.isSubmitted) {
			return <Home />;
		}
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Username
					<input
						type="text"
						name="userName"
						onChange={this.handleInputChange}
						value={this.state.userName}
					/>
				</label>

				<label>
					Password
					<input
						type="password"
						name="userPassword"
						onChange={this.handleInputChange}
						value={this.state.userPassword}
					/>
				</label>
				<input type="submit" value="Sign up" />
			</form>
		);
	}
}
export default SignIn;
