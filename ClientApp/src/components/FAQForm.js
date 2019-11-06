import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';

export class FAQForm extends React.Component {

    static displayName = FAQForm.name;

    constructor() {
        super();
        this.state = {
            hovedkategorier: [],
            underkategorier: [],
            loadingHovedkategorier: true,
            loadingUnderkategorier: true,
            hovedkategoriId: 0,
            underkategoriId: 1
        };
    }

    componentDidMount() {
        this.populateHovedkategorier();
    }

    async changeHovedkategori(event) {
        event.persist();
        await this.populateUnderkategorier(event.target.value);
    }

    async changeUnderkategori(event) {
        this.setState({ underkategoriId: event.target.value });
    }

    async populateHovedkategorier() {
        const response = await fetch('api/faq/hovedkategorier');
        const data = await response.json();
        this.setState({ hovedkategorier: data, loadingHovedkategorier: false });
        await this.populateUnderkategorier(1);
    }

    async populateUnderkategorier(underkategoriId) {
        const response = await fetch('api/faq/underkategorier?id=' + underkategoriId);
        const data = await response.json();
        this.setState({ underkategoriId: underkategoriId, underkategorier: data, loadingUnderkategorier: false });
    }



    render() {

        return (
            <AvForm>
                <h1>Gi oss tilbakemelding</h1>
                <h4>Vil du gi oss ros eller ris, eller har du noe å fortelle?</h4>
                <br></br><hr></hr>
                <AvField name="name" label="Fornavn" type="text" validate={{
                    required: { value: true, errorMessage: 'Skriv inn fornavnet ditt' },
                    pattern: { value: '^[a-zA-Z0-9ÆØÅæøå]+$', errorMessage: 'Ugyldig fornavn' },
                    minLength: { value: 2, errorMessage: 'Fornavnet må være mellom 2 og 20 bokstaver' },
                    maxLength: { value: 20, errorMessage: 'Fornavnet må være mellom 2 og 20 bokstaver' }
                }} />
                <AvField name="nameCustomMessage" label="Etternavn" type="text" validate={{
                    required: { value: true, errorMessage: 'Skriv inn etternavnet ditt' },
                    pattern: { value: '^[a-zA-Z0-9ÆØÅæøå]+$', errorMessage: 'Ugyldig etternavn' },
                    minLength: { value: 2, errorMessage: 'Etternavnet må være mellom 2 og 20 bokstaver' },
                    maxLength: { value: 20, errorMessage: 'Etternavnet må være mellom 2 og 20 bokstaver' }
                }} />

                {this.state.loadingHovedkategorier
                    ? <p><em>Laster...</em></p>
                    : <AvField type="select" name="select" label="Velg en kategori" onChange={this.changeHovedkategori.bind(this)} value={this.state.hovedkategoriId}>
                        {this.state.hovedkategorier.map(kategori =>
                            <option value={kategori.id} key={kategori.id}>{kategori.navn}</option>
                        )}
                    </AvField>
                }

                {this.state.loadingUnderkategorier
                    ? <p></p>
                    : <AvField type="select" name="select" label="Velg en underkategori" onChange={this.changeUnderkategori.bind(this)} value={this.state.underkategoriId}>
                        {this.state.underkategorier.map(underkategori =>
                            <option value={underkategori.id} key={underkategori.id}>{underkategori.navn}</option>
                        )}
                    </AvField>
                }
               
                <AvField name="emailProp" label="Epost" type="text" validate={{ email: true }} />
                <AvField name="spm" label="Hva lurer du på?" type="textarea" required />
                <FormGroup>
                    <Button>Send skjema</Button>
                </FormGroup>
            </AvForm>

        );
    }

}

