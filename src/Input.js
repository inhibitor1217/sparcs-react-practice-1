import React, { Component } from 'react';

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);

        this.state = {
            text: ''
        };
    }

    render() {
        return (     
            <input 
                className="input" 
                placeholder="Type some text..." 
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}>
            </input>
        );
    }

    onChange(e) {
        this.setState({ text: e.target.value });
    }

    onKeyPress(e) {
        const { onSubmit } = this.props;
        const { text } = this.state;
        if (e.key === 'Enter') {
            onSubmit(text);
            e.target.value = '';
        }
    }

}