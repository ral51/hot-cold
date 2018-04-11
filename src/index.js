import React from 'react';
import ReactDOM from 'react-dom';
import { NumberInput } from './input';
import { Status } from './status';


class Game extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.resetHandler = this.reset.bind(this);
		this.state = {
			success: false,
    		userInput: "",
    		numberToBePredicted: ""
    	};
	}

	successHandler() {
		this.setState({
			success: true
		})
	}

	componentDidMount() {
		this.reset();
	}

	reset() {
		this.setState({
			numberToBePredicted: Math.floor(Math.random() * Math.floor(100)),
    		userInput: "",
    		success: false
    	});
	}

	handleClick(value) {
		this.setState({
			userInput: value 
    	});	
	}

	render() {
		return (
			<div>
				<NumberInput userInput={this.state.userInput} handleClick={this.handleClick} />
				<Status userInput={this.state.userInput} 
				numberToBePredicted={this.state.numberToBePredicted} 
				successHandler={this.successHandler}
				newGameHandler={this.resetHandler} />
			</div>
		);
	}

}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);