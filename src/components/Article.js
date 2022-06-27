//Article Component being called from HomeScreen.js

import React from 'react';
import './Article.css';
import Card from 'react-bootstrap/Card';

function Article({ article }) {

  function cleanDetails (encoded) {
    return encoded.replace(/&amp;/g, '&');
  }

  return (
    <Card className='BackCard'>
        <Card className='Card'>
          <Card.Title >{cleanDetails(article.title)}</Card.Title>

            <Card.Subtitle>Description:</Card.Subtitle>
              <Card.Text>{cleanDetails(article.description)}</Card.Text>

            <Card.Subtitle>Published Date:</Card.Subtitle>
              <Card.Text>{article.pubDate}</Card.Text>

            <Card.Subtitle>Article URL</Card.Subtitle>
              <Card.Text><a href={article.articleUrl}>{article.articleUrl}</a></Card.Text>
                {article.hasVideo && 
                    <a className = "VideoPill" href={article.videoUrl}>
                      Video
                    </a>
                }
        </Card>
    </Card>
  );
}

export default Article;
