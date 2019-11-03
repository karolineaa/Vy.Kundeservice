import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { hovedkategorier: [], loading: true };
    }

    componentDidMount() {
        this.populateHovedkategorier();
    }

    static renderHovedkategorier(hovedkategorier) {
        return (
            <div>
                {hovedkategorier.map(kategori =>
                    <Jumbotron key={kategori.id}>
                        <Link tag={Link} className="text-dark" to={`/faqs/${kategori.id}`}>{kategori.navn}</Link>
                    </Jumbotron>
                )}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderHovedkategorier(this.state.hovedkategorier);

        return (
            <div>
                <h1>Velg en kategori</h1>
                {contents}
            </div>
        );
    }

    async populateHovedkategorier() {
        const response = await fetch('api/faq/hovedkategorier');
        const data = await response.json();
        this.setState({ hovedkategorier: data, loading: false });
    }
}