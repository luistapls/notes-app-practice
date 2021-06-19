import React from 'react';

interface Props {}
interface State {
	userName: string;
	userEmail: string;
	userPassword: string;
}
class SignUp extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			userName: '',
			userEmail: '',
			userPassword: '',
		};
	}

	handleSubmit(event: any) {
		event.preventDefault();
		console.log(this.state);
	}

	handleInputChange(event: any) {
		const newState = { [event.target.name]: event.target.value } as Pick<
			State,
			keyof State
		>;
		this.setState(newState);
	}

	render(): JSX.Element {
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
					Email
					<input
						type="email"
						name="userEmail"
						placeholder="e.g. llopezampiez7@gmail.com"
						onChange={this.handleInputChange}
						value={this.state.userEmail}
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
export default SignUp;
