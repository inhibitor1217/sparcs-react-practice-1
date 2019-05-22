import React, { Component } from 'react';
import Input from './Input';
import Card from './Card';

export default class Container extends Component {

    constructor(props) {
        super(props);
        this.createCard = this.createCard.bind(this);

        this.state = {
            list: []
        };
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <Input onSubmit={this.createCard} />
                {
                    list.map((text, i) => <Card text={text} key={`card-${i}`}/>)
                }
            </div>
        );
    }

    createCard(content) {
        const { list } = this.state;
        this.setState({ list: list.concat(content) });
    }

}