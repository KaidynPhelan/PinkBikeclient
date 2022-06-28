//HomeScreen Page.

import AboutBox from '../components/AboutBox';
import dummydata from '../dummydata.json';
import Article from '../components/Article';
import { useEffect, useState } from 'react';
import exportFromJSON from 'export-from-json';
import React from 'react';

function HomeScreen() {

  const [Articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

    //Calling The Inforamtion from backend API or dummydata.js
    useEffect(() => {
      setLoading(true);

    //DummyData, Uncomment to call data from dummydata.json
    // setArticles(dummydata);

    //Calling data from API
    fetch('https://pinbikeapi.azurewebsites.net/pinkbikearticles') 
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticles(result);
        setLoading(false);
      })
      .catch(error => (console.log(error)));
  }, []);

  //Function to Export Articles to XML
  function ExportXML() {
    const fileName = 'PinkBike_Articles';
    const exportType = exportFromJSON.types.xml;

    exportFromJSON({ data: Articles, fileName, exportType });
  }

  return (
    <div>
      <AboutBox exportXML = {ExportXML} />
        <h1 className='header'>Articles</h1>
        {
          loading ?
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          :
            <div className="articles">
            {
              Articles.map((article, index) => (
                <Article key={index} article={article}></Article>
              ))
            }
            </div>
        }
    </div>
  );
}

export default HomeScreen;
