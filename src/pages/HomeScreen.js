//HomeScreen Page.

import AboutBox from '../components/AboutBox';
import dummydata from '../dummydata.json';
import Article from '../components/Article';
import { useEffect, useState } from 'react';
import exportFromJSON from 'export-from-json';
import React from 'react';

function HomeScreen() {

  const [Articles, setArticles] = useState([]);

    //Calling The Inforamtion from backend API or dummydata.js
    useEffect(() => {

    //DummyData, Uncomment to call data from dummydata.json
    setArticles(dummydata);

    //Calling data from API
    // fetch('/pinkbikearticles')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((result) => {
    //     setArticles(result);
    //   });
  });

  //Function to Export Articles to XML
  function ExportXML() {
    const fileName = 'PinkBike_Articles';
    const exportType = exportFromJSON.types.xml;

    exportFromJSON({ data: Articles, fileName, exportType });
  }

  return (
    <div>
      <AboutBox exportXML = {ExportXML} />
        <h1 className='ArticleHeader'>Articles</h1>
          <div className="articles">
            <div>
              {Articles.map((article, index) => (
                  <Article key={index} article={article}></Article>
                ))}
            </div>
          </div>
    </div>
  );
}

export default HomeScreen;
