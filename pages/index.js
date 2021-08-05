import Head from 'next/head';
import { gql, request } from 'graphql-request';
import { useEffect, useState } from 'react';
import Message from '../components/Message';
import AddMessage from '../components/AddMessage';
import axios from 'axios';

const url = "http://localhost:8080/graphql";

const query = gql`
  query {

  }

`;

const Index = () => {
  let [message, setMessage] = useState();
  useEffect(() => {
    let RESTurl = "https://footy-vids.herokuapp.com/api";
    axios.get(RESTurl).then(videos => {
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

      <div className="text-center">Welcome to the GraphStack</div>
      <AddMessage />
      { message ? message.map((item, i) => ( 
        <Message className="text-center" key={i} arr={item} />
      )) : <></> }
    </div>
  )
}

export default Index;
