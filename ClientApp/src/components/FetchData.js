import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { faqs: [], loading: true };
  }

  componentDidMount() {
    this.populateFAQData();
  }

  static renderFAQTable(faqs) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Spørsmål</th>
            <th>Svar</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map(faq =>
            <tr key={faq.id}>
              <td>{faq.spørsmål}</td>
              <td>{faq.svar}</td>
              <td>{faq.rating}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderFAQTable(this.state.faqs);

    return (
      <div>
        <h1 id="tabelLabel" >Spørsmål og svar</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateFAQData() {
    const response = await fetch('faq');
      const data = await response.json();
      console.dir(data);
    this.setState({ faqs: data, loading: false });
  }
}