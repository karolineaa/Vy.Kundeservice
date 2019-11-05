import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import { FAQCollapseItem } from './FAQCollapseItem';

export class UnderkategoriCollapseItem extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, faqs:[] };
    }

    async toggle() {
        // last inn data når man utvider underkategorien
        if (!this.state.collapse) {
            console.log("laster data..");
            const response = await fetch('api/faq/getfaqs?id=' + 1);
            const faqs = await response.json();
            this.setState({ faqs: faqs });
        }
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const underkategori = this.props.underkategori;

        return (
            <div>
                
                <h2 onClick={this.toggle}>
                    <strong>{underkategori.navn}</strong>
                    <hr></hr>
                </h2>
                <Collapse isOpen={this.state.collapse}>
                    {this.state.faqs.map(faq =>
                        <FAQCollapseItem key={faq.id} faq={faq} />
                    )}
                </Collapse>
            </div>
        );
    }
}