import React, { Component } from 'react';
import { UnderkategoriCollapseItem } from './UnderkategoriCollapseItem';
import { Spinner, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

export class FAQs extends Component {
    static displayName = FAQs.name;

    constructor(props) {
        super(props);
        this.state = { underkategorier: [], loadingUnderkategorier: true, loadingHovedkategori: true };
    }

    componentDidMount() {   
        const { match: { params } } = this.props;
        this.getUnderkategoriData(params.hovedkategoriId);
        this.getHovedkategoriData(params.hovedkategoriId);

    }

    render() {
        
        let underkategorier = this.state.loadingUnderkategorier
            ? <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
            : FAQs.renderUnderkategoriTable(this.state.underkategorier);
        let hovedkategori = this.state.loadingHovedkategori
            ? <p></p>
            : this.state.hovedkategoriNavn;

        return (
            <div>
                <Breadcrumb tag="nav" listTag="div">
                    <Link className="breadcrumb-item" to={'/'}>Hjem</Link>
                    <div className="active breadcrumb-item">{hovedkategori}</div>
                </Breadcrumb>
                <h1>Spørsmål og svar</h1>
                <br></br><br></br><hr></hr>
                {underkategorier}
            </div>
        );
    }

    static renderUnderkategoriTable(underkategorier) {
        return (
            <div>
                {underkategorier.map(underkategori =>
                    <UnderkategoriCollapseItem key={underkategori.id} underkategori={underkategori} />
                )}
            </div>
        );
    }

    async getUnderkategoriData(hovedkategoriId) {
        const response = await fetch('api/kundeservice/underkategorier?hovedkategoriId=' + hovedkategoriId);
        const data = await response.json();
        this.setState({ underkategorier: data, loadingUnderkategorier: false });
    }

    async getHovedkategoriData(hovedkategoriId) {
        const response = await fetch('api/kundeservice/hovedkategori?hovedkategoriId=' + hovedkategoriId);
        const data = await response.json();
        console.dir(data);
        this.setState({ hovedkategoriNavn: data, loadingHovedkategori: false });
    }
}