import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export class FAQCollapseItem extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, rating: this.props.faq.rating, faq: this.props.faq };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    async onStarClick(nextValue, prevValue, name) {
        await fetch(`api/kundeservice/faqrating?faqId=${this.state.faq.id}&rating=${nextValue}`);
        this.setState({ rating: nextValue });
    }

    render() {
        let arrow = this.state.collapse ? <IoIosArrowUp className="arrow" /> : <IoIosArrowDown className="arrow" />;
        return (
            <div className="spmIndent">
                <h4 className="spm" onClick={this.toggle}>
                    {this.state.faq.spørsmål}{arrow}</h4>
                <hr></hr>

                <Collapse isOpen={this.state.collapse}>
                    {/* Her settes svaret inn fra ren HTML */}
                    <div dangerouslySetInnerHTML={{ __html: this.state.faq.svar }} />
                    <h2><StarRatingComponent
                        name="rating"
                        starCount={5}
                        value={this.state.rating}
                        onStarClick={this.onStarClick.bind(this)}
                    /></h2>
                </Collapse>
            </div>
        );
    }
}