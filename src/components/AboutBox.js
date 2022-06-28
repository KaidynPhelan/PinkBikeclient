//About box component being called from HomeScreen.js page.

import './AboutBox.css';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Button } from 'react-bootstrap';

function AboutBox({exportXML}) {

  return (
    <Card className="Card">
      <Card.Header>
        <Card.Title style={{  margin: '0' }}>About</Card.Title>
      </Card.Header>

      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">PinkBike.com coding challenge from Automaton</Card.Subtitle>
        <Card.Text>
          This project involved creating an API to scrape the required information from current Pinkbike.com articles
          and display them in a GUI. It also includes the ability to Export Articles to XML. The front end was made with 
          React, the API was made with .NET.
        </Card.Text>
        
        <Card.Subtitle className="mb-2 text-muted">Link to Original Site:</Card.Subtitle>
        <div className='article-link'>
          <Card.Link href='https://www.pinkbike.com/'>Pinkbike.com</Card.Link>
        </div>

        <Card.Subtitle className="mb-2 text-muted">Links to Repositories:</Card.Subtitle>
        <div className='article-link'>
          <div>
            <Card.Link href='https://github.com/KaidynPhelan/PinkBikeclient'>Frontend Repository</Card.Link>
            <Card.Link href='https://github.com/KaidynPhelan/PinkbikeAPI'>Backend Repository</Card.Link>
          </div>
          <Button onClick={exportXML} style = {{backgroundColor: '#e36414', borderColor: '#e36414'}}>Export to XML</Button>
        </div>
      </Card.Body>

    </Card>
  );
}

export default AboutBox;
