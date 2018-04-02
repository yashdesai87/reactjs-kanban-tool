import React, { Component } from 'react';
import List from './boards/List';
import Form from './boards/Form';

class App extends Component {
	render() {
		return (
			<div className="row mt-5">
				<div className="col-md-4 offset-md-1">
					<h2>Boards</h2>
					<List />
				</div>
				<div className="col-md-4 offset-md-1">
					<h2>Add a new board</h2>
					<Form />
				</div>
			</div>
		);
	}
}

export default App;