import AboutBox from '../components/AboutBox';
import dummydata from '../dummydata.json';
import Article from '../components/Article';
import { Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import exportFromJSON from 'export-from-json';

function HomeScreen() {
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/pinkbikearticles')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticles(result);
      });
  });

  function ExportXML() {
    const fileName = 'PinkBike_Articles';
    const exportType = exportFromJSON.types.xml;

    exportFromJSON({ data: Articles, fileName, exportType });
  }

  return (
    <div>
      <AboutBox />
      <h1>Articles</h1>
      <div className="articles">
        <Row>
          {Articles.map((article, index) => (
            <Article key={index} article={article}></Article>
          ))}
        </Row>
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
