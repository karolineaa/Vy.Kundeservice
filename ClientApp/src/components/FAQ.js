import React, { Component } from 'react';
import { UnderkategoriCollapseItem } from './UnderkategoriCollapseItem';

export class FAQ extends Component {
    static displayName = FAQ.name;

    constructor(props) {
        super(props);
        this.state = { underkategorier: [], loading: true };
    }

    componentDidMount() {
        this.populateUnderkategoriData();
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

    render() {
        let contents = this.state.loading
            ? <p><em>Laster...</em></p>
            : FAQ.renderUnderkategoriTable(this.state.underkategorier);

        return (
            <div>
                <h1>Spørsmål og svar</h1>
                <br></br><br></br><hr></hr>
                {contents}
            </div>
        );
    }

    async populateUnderkategoriData() {
        const response = await fetch('api/faq/underkategorier?id='+1);
        const data = await response.json();
        this.setState({ underkategorier: data, loading: false });
    }
}