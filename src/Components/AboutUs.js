import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import bios from './aboutUs.json';
import BioCard from './BioCard'

export default class AboutUs extends Component {
  render() {
    const data = bios.data;
    return (
      <>
        <h1>The Gods of this plane!</h1>
        <Container fluid
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Row xs={1} sm={2} md={3} lg={4}>
            {data.map((person, index) => (
              <BioCard key={index}
                img={person.img}
                name={person.name}
                bio={person.bio}
                linkedin={person.linkedin}
                github={person.github}
              />
            ))}
          </Row>
        </Container>
      </>
    )
  }
}