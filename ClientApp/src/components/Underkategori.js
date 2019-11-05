import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom';

export class Underkategori extends Component {
    static displayName = Underkategori.name;

    constructor(props) {
        super(props);
        this.state = { underkategorier: [], loading: true };
    }

    componentDidMount() {
        this.populateUnderkategorier();
    }

    static renderUnderkategorier(underkategorier) {
        return (
            <div>
                {underkategorier.map(kategori =>
                    <Jumbotron key={kategori.id}>
                       <h2> <Link tag={Link} className="text-dark" to={`/faqs/${kategori.id}`}>{kategori.navn}</Link> </h2>
                    </Jumbotron>
                )}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Underkategori.renderUnderkategorier(this.state.underkategorier);

        return (
            <div>
                <h1>Sp�rsm�l og svar</h1><br></br>
                <h4>Hva lurer du p�? Velg tema og finn svar p� alt fra hvem som <br></br>
                    kan f� rabatt og hvordan du s�ker om refusjon til hvordan <br></br>
                    appen fungerer og hva slags bagasje du kan ha med om bord.</h4><br></br><hr></hr>
                {contents}
            </div>
        );
    }

    async populateUnderkategorier() {
        const response = await fetch('api/faq/underkategorier');
        const data = await response.json();
        this.setState({ hovedkategorier: data, loading: false });
    }
}