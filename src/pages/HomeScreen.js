import AboutBox from '../components/AboutBox';
import dummydata from '../dummydata.json';
import Article from '../components/Article';
import { Row, Col } from 'react-bootstrap';

function HomeScreen() {
  return (
    <div>
      <AboutBox />
      <h1>Articles</h1>
      <div className = 'articles'>
        <Row>
            {dummydata.map((article) => (
                <Article article={article}></Article>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default HomeScreen;




      {/* {dummydata.map((article) => {
        return <div>{article.title}</div>;
      })} */}
