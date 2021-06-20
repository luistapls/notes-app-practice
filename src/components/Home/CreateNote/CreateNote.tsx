import React from 'react';

export default class CreateNote extends React.Component {
	render() {
		return (
			<form>
				<label>
					Title
					<input type="text" name="titleCreateNote" />
				</label>

				<label>
					Description
					<textarea name="descriptionCreateNote"></textarea>
				</label>
				<input type="submit" value="Submit" />
				<input type="reset" value="Clear" />
			</form>
		);
	}
}
