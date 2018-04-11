import React from 'react';


export class NumberInput extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.inputElement = React.createRef();;
	}

	handleClick() {
		var n = parseInt(this.inputElement.value, 10);
		if (!Number.isNaN(n)) {
			this.props.handleClick(n);
		}
	}

	render() {
		return (
			<fieldset>
				<legend>Enter number</legend>
				<input ref={el=>this.inputElement=el} />
				<button onClick={ this.handleClick } > Submit </button>
			</fieldset>
		);
	}

}