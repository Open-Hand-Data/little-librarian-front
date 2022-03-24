import { Component } from "react";

import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../css/bookPage.css';

export default class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      libraries: NaN,
      error: false,
      errorMessage: '',
    };
  }

  handleChange = (e) => {
    let titleSearch = e.target.value.replace(/\s+/g, '+');

    this.setState({ searchQuery: titleSearch })
  }

  handleClick = async () => {
    console.log('you are trying to submit a book search');
    await this.getLibraries();
  }

  getLibraries = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/libraries?title=${this.state.searchQuery}`;
    let config = await this.props.getConfig();
    try {
      const searchResponse = await axios.get(url,config);
      console.log(searchResponse);
      const libraries = searchResponse.data;

      this.setState({
        libraries,
        error: false,
      });
    } catch (error) {
      console.error('Unable to find book in libraries', this.state.searchQuery);

      this.setState({ error: true, errorMessage: error.message});
    }
  }

  render() {
    return (
      <Container id="bookPage">
        <SearchBar handleClick={this.handleClick} handleChange={this.handleChange}/>

        {this.state.libraries ?
        <>
          <h2>We found your book in these libraries!</h2>
          <Row>
            {this.state.libraries.map((data, idx) => <SearchResults data={data} idx={idx}/> )}
          </Row>
        </>

          : <><h3>Book Not found</h3> <img src="/imgs/logopic.jpg" alt="free little library" /> </>}
      </Container>
    )
  }
}

