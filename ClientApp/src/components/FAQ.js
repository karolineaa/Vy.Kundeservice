import React, { Component } from 'react';
import { FAQCollapseItem } from './FAQCollapseItem';
import { Rating } from './Rating';
import { FAQForm } from './FAQForm';

export class FAQ extends Component {
    static displayName = FAQ.name;

    constructor(props) {
        super(props);
        this.state = { faqs: [], loading: true };
    }

    componentDidMount() {
        this.populateFAQData();
    }

    static renderFAQTable(faqs) {
        return (
            <div>
                {faqs.map(faq =>
                    <FAQCollapseItem key={faq.id} faq={faq} />
                )}
            </div>
        );
    }

    static renderRating(rating) {
        return (
            <div>
                {rating.map(rating =>
                    <Rating key={faq.id} faq={faq} />
                )}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FAQ.renderFAQTable(this.state.faqs);

        return (
            <div>
                <h1>Spørsmål og svar</h1>
                <br></br><br></br><hr></hr>
                {contents}
            </div>
        );
    }

    async populateFAQData() {
        const response = await fetch('api/faq/get');
        /*
        const response = fetch('api/faq/hentunderkategorier', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ hovedkategoriId: 1 })
        });
        */
        const data = await response.json();
        console.dir(data);
        this.setState({ faqs: data, loading: false });
    }
}