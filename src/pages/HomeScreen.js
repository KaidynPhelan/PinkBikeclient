import AboutBox from '../components/AboutBox';
import dummydata from '../dummydata.json';

function HomeScreen() {
  return (
    <div>
      <AboutBox />
      {/* {dummydata.map((article) => {
        return <div>{article.title}</div>;
      })} */}
    </div>
  );
}

export default HomeScreen;