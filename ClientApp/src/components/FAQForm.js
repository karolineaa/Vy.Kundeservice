import React from 'react';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';
import { Button, Label, FormGroup, CustomInput } from 'reactstrap';

export class FAQForm extends React.Component {
    render() {
        return (
            <AvForm>
                <h1>Gi oss tilbakemelding</h1>
                <h4>Vil du gi oss ros eller ris, eller har du noe å fortelle?</h4>
                <br></br><hr></hr>
                <AvForm>
                    <AvField name="name" label="Fornavn" type="text" validate={{
                        required: { value: true, errorMessage: 'Skriv inn fornavnet ditt'  },
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

                <AvField name="emailProp" label="Epost" type="text" validate={{ email: true }} />

                <AvRadioGroup inline name="radio" label="Hva gjelder det?" required>
                    <AvRadio label="Tog" value="Tog" />
                    <AvRadio label="Buss" value="Buss" />
                    <AvRadio label="Bybil" value="Bybil" />
                    <AvRadio label="Annet" value="Annet"  />
                </AvRadioGroup>

                <AvField name="emne" label="Emne" type="text" required />

                <AvField name="spm" label="Hva lurer du på?" type="text" required />


                <FormGroup>
                    <Button>Send skjema</Button>
                    </FormGroup>
                    </AvForm>
            </AvForm>
        );
    }
}

