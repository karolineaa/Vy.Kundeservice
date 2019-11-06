import React from 'react';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';
import { Button, Label, FormGroup, CustomInput } from 'reactstrap';

export class FAQForm extends React.Component {

    static displayName = FAQForm.name;

    constructor() {
        super();
        this.state = { hovedkategorier: [], loading: true, hovedkategoriId: 1 };
    }

    componentDidMount() {
        this.populateHovedkategorier();
    }

    async change() {
        console.log("valgte option");
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

                {this.state.loading
                    ? <p><em>Laster...</em></p>
                    : <AvField type="select" name="select" label="Hva gjelder det?" onChange={this.change} value={this.state.hovedkategoriId}>
                        {this.state.hovedkategorier.map(kategori =>
                            <option on key={kategori.id}>{kategori.navn}</option>
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

    async populateHovedkategorier() {
        const response = await fetch('api/faq/hovedkategorier');
        const data = await response.json();
        this.setState({ hovedkategorier: data, loading: false });
    }

}

