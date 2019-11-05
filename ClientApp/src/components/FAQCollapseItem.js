import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

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
        await fetch(`api/faq/faqrating?faqId=${this.state.faq.id}&rating=${nextValue}`);
        this.setState({ rating: nextValue });
    }

    render() {
        return (
            <div>
                <h4 onClick={this.toggle}>
                    <strong>{this.state.faq.spørsmål}</strong></h4>
                <hr></hr>

                <Collapse isOpen={this.state.collapse}>
                    <div dangerouslySetInnerHTML={{ __html: this.state.faq.svar }} />
                    <StarRatingComponent
                        name="rating"
                        starCount={5}
                        value={this.state.rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                </Collapse>
            </div>
        );
    }
}