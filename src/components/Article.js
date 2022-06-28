//Article Component being called from HomeScreen.js

import React from 'react';
import './Article.css';
import Card from 'react-bootstrap/Card';

function Article({ article }) {

  // Function to clean data recieved from backend
  function cleanDetails (encoded) {
    return encoded.replace(/&amp;/g, '&');
  }

  return (
      <Card className='Card'>
        <Card.Header className="article-Header">
          <Card.Title style={{  margin: '0' }}>{cleanDetails(article.title)}</Card.Title>

          {/* Create Video Pill if Article contains a Video Link */}
          {article.hasVideo && 
            <a className = "videoPill" href={article.videoUrl}>
              Video
            </a>
          }
          
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Description:</Card.Subtitle>
          <Card.Text>{cleanDetails(article.description)}</Card.Text>

          <Card.Subtitle className="mb-2 text-muted">Published Date:</Card.Subtitle>
          <Card.Text>{article.pubDate}</Card.Text>

          <Card.Subtitle className="mb-2 text-muted">Article URL</Card.Subtitle>
          <Card.Text><a href={article.articleUrl}>{article.articleUrl}</a></Card.Text>
        </Card.Body>
      </Card>
  );
}

export default Article;
