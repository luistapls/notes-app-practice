import React from 'react';
import CreateNote from './CreateNote/CreateNote';
import Notes from './Notes/Notes';

class Home extends React.Component {
	render(): JSX.Element {
		return (
			<div>
				<div>
					<CreateNote />
				</div>
				<div>
					<Notes />
				</div>
			</div>
		);
	}
}

export default Home;
