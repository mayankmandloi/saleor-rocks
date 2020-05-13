import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const getData = async () => {
    const data = await fetch('https://pwa.demo.saleor.rocks/graphql/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `mutation {
            tokenCreate(email: "admin@example.com", password: "admin") {
              token
            }
          }`,
        }),
      });
      const jsonData = await data.json();
      const token: String = jsonData.data.tokenCreate.token;

      const juiseData = await fetch('https://pwa.demo.saleor.rocks/graphql/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify({
          query: `query {
            products(first: 5) {
              edges {
                node {
                  id
                  name
                  description
                  images {
                    id
                    url
                    alt
                  }
                }
              }
            }
          }`,
        }),
      })
      const nodesList = await juiseData.json();
      setNodes(nodesList);
  };

  const [nodes, setNodes] = useState({});

  useEffect(() => {
    getData();
  }, [])
return (<h1> {JSON.stringify(nodes)}</h1>);
}

export default App;
