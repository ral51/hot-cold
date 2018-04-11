import React from 'react';

const proximity = {
	"success": {
		className: "success",
		text: "successText"
	},
	"veryHot": {
		className: "veryHot",
		text: "veryHotText"
	},
	"hot": {
		className: "hot",
		text: "hotText"
	},
	"cold": {
		className: "cold",
		text: "coldText"
	},
	"veryCold": {
		className: "veryCold",
		text: "veryColdText"
	}
};

export class Status extends React.Component {

	constructor(props) {
		super(props);
	}

	successHandler() {
		this.props.successHandler();
	}

	getProximity(number, numberToBePredicted) {
		if (!number || !numberToBePredicted) {
			return {
				className: "",
				text: ""
			}
		}
		var diff = number - numberToBePredicted;

		if (diff < 0) {
			diff *= -1; 
		}

		if (diff === 0) {
			alert("Hooray");
			diff = "success";
		} else if (diff <= 5) {
			diff = "veryHot";
		} else if (diff <= 10) {
			diff = "hot"
		} else if (diff <= 25) {
			diff = "cold";
		} else {
			diff = "veryCold";
		}

		return {
			className: proximity[diff].className,
			text: proximity[diff].text
		};
	}

	render() {

		var {className, text} = this.getProximity(this.props.userInput, this.props.numberToBePredicted);

		var successNode = className === "success" ? <button onClick={this.props.newGameHandler}>New Game</button> : "";

		return (
			<div className={className}>
			{text}
			<div>
				{successNode}
			</div>
			</div>
		);
	}

}