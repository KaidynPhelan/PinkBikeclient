import AboutBox from '../components/AboutBox';
import dummydata from '../dummydata.json';
import Article from '../components/Article';
import { Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import exportFromJSON from 'export-from-json';
import React from 'react';

function HomeScreen() {

  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(dummydata);
    // fetch('/pinkbikearticles')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((result) => {
    //     setArticles(result);
    //   });
  });

  function ExportXML() {
    const fileName = 'PinkBike_Articles';
    const exportType = exportFromJSON.types.xml;

    exportFromJSON({ data: Articles, fileName, exportType });
  }

  return (
    <div>
      <AboutBox />
      <h1 className='ArticleHeader'>Articles</h1>
      <div className="articles">
        <div>
          {Articles.map((article, index) => (
              <Article key={index} article={article}></Article>
            ))}
        </div>
        <div>
          <Button onClick={ExportXML}>Export to XML</Button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

{
  /* {dummydata.map((article) => {
        return <div>{article.title}</div>;
      })} */
}
