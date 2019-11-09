import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import { FAQCollapseItem } from './FAQCollapseItem';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export class UnderkategoriCollapseItem extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, faqs:[], underkategoriId: this.props.underkategori.id };
    }

    async toggle() {
        // last inn data når man utvider underkategorien
        if (!this.state.collapse) {
            const response = await fetch('api/kundeservice/faqs?underkategoriId=' + this.state.underkategoriId);
            const faqs = await response.json();
            this.setState({ faqs: faqs });
        }
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        // tar inn props som ble sendt fra FAQ.js gjennom <UnderkategoriCollapseItem underkategori={underkategori} />
        const underkategori = this.props.underkategori;
        let arrow = this.state.collapse ? <IoIosArrowUp className="arrow" /> : <IoIosArrowDown className="arrow" />;

        return (
            <div>
                
                <h2 onClick={this.toggle}>
                    <strong>{underkategori.navn} {arrow} </strong>
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