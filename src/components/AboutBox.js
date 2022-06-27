//About box component being called from HomeScreen.js page.

import './AboutBox.css';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Button } from 'react-bootstrap';

function AboutBox({exportXML}) {

  return (
    <Card className = "Card">
      <Card.Title>About:</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">PinkBike.com coding challenge from Automaton</Card.Subtitle>
          <Card.Text>
            This Project involved creating a Web Scrape .NET API to scrape the required Information from www.Pinkbike.com Articles
            and display them in a GUI with the ability to Export Articles to XML, This was made in React.
          </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Link to Original Site:</Card.Subtitle>
          <div className='linkDiv'>
            <Card.Link href='https://www.pinkbike.com/'>Pinkbike.com</Card.Link>
          </div>
        <Card.Subtitle className="mb-2 text-muted">Links to Repositries:</Card.Subtitle>
          <div className='linkDiv'>
            <div>
              <Card.Link href='https://github.com/KaidynPhelan/PinkBikeclient'>Frontend Repository</Card.Link>
              <Card.Link href='https://github.com/KaidynPhelan/PinkbikeAPI'>Backend Repository</Card.Link>
            </div>
            <Button onClick={exportXML} style = {{backgroundColor: '#e36414'}}>Export to XML</Button>
          </div>
      </Card>
  );
}

export default AboutBox;
