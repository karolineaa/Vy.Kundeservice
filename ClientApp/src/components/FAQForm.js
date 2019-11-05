import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export const FAQForm = (props) => {
    return (
        <Form>
            <FormGroup tag="fieldset">
                <legend><h3>Hva gjelder det?</h3></legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        <p>Tog</p>
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        <p>Buss</p>
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        <p>Bybil</p>
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        <p>Annet</p>
                    </Label>
                </FormGroup>
                <FormGroup>
                    <h3>Email</h3>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText"><h3>Skriv inn spørsmål</h3></Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    </FormText>
                </FormGroup>

            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}

