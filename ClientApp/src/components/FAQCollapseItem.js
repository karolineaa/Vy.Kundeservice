import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

export class FAQCollapseItem extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const faq = this.props.faq;

        return (
            <div>
                <h2 onClick={this.toggle}>
                    <strong>{faq.spørsmål}</strong>
                </h2>
                <Collapse isOpen={this.state.collapse}><div dangerouslySetInnerHTML={{ __html: faq.svar }} /></Collapse>
            </div>
        );
    }
}