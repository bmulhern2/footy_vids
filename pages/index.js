import Head from 'next/head';
import { gql, request } from 'graphql-request';
import { useEffect, useState } from 'react';
import axios from 'axios';

const url = "http://localhost:8080/graphql";

const query = gql`
  query {

  }

`;

const Index = () => {
  let [videos, setVideos] = useState();
  useEffect(() => {
    let RESTurl = "https://footy-vids.herokuapp.com/api";
    axios.get(RESTurl).then(videos => {
      setVideos(videos['data']);
      console.log(videos['data']);
    });
    // request(url, query).then(res => {
      // setMessage(res['hello']);
    // })
  }, [])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      { videos ? console.log(videos) && videos.map((video, i) => (
        <div key={i}>
          { console.log(video) && video['videos'].map((vid, i) => (
              <div key={i} className="w-screen h-screen" dangerouslySetInnerHtml={{ __html: vid.embed }}></div>
          ))}
        </div>
      )) : <div className="text-center">Video Loading Now..</div> }
      </div>
    </div>
    )
}

export default Index;
