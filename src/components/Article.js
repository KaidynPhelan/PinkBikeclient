import React from 'react';
import './Article.css';
import Card from 'react-bootstrap/Card';

function Article({ article }) {
  return (
    <Card className='BackCard'>
          <Card className='Card'>
      <Card.Title>{article.title}</Card.Title>
      <Card.Subtitle>Description:</Card.Subtitle>
        <Card.Text>{article.description}</Card.Text>
      <Card.Subtitle>Article Has Video:</Card.Subtitle>
      {/* add pill to show video true or false */}
        <Card.Text>{article.hasVideo}</Card.Text>
      <Card.Subtitle>Published Date:</Card.Subtitle>
        <Card.Text>{article.pubDate}</Card.Text>

      <Card.Subtitle>Article URL</Card.Subtitle>
      {/* Make these a links go to articles */}
        <Card.Text><a href=''>{article.articleUrl}</a></Card.Text>
    </Card>
    </Card>


  );
}

export default Article;
