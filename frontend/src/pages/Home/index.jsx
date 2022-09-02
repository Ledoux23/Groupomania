// import { useState, useEffect } from "react";
// import { useEffect } from 'react';
import Header from '../../components/Header';
// import Card from '../../components/Card'

// import styled from 'styled-components'
// import colors from '../../utils/style/colors'

// call API
function Home() {
  // const [postData, setPostData] = useState({})
  // const [isDataLoading, setDataLoading] = useState(false)

  // useEffect(() => {
  //   // fetchData()
  //   setDataLoading(true)
  //   fetch(`http://localhost:5000/api/post`)
  //     .then((response) =>
  //       response.json().then(({ postData }) => {
  //         setPostData(postData)
  //         setDataLoading(false)
  //       })
  //     )
  // }, [])

  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/post`)
  //   .then(function(res) {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //   })
  //   .then(function(value) {
  //     console.log(value);
  //   })
  //   .catch(function(err) {
  //     // Une erreur est survenue
  //   });
  // });

  return (
    <div>
      {/* {isDataLoading ? (console.log("Data ok !")) : (console.log("No data !"))}
      {postData ? (console.log("Test Ok !")) : (console.log("Echec test !"))} */}
      <Header/>  
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="jumbotron text-center py-5">
                <h1>Bienvenue sur Groupomania !</h1>
              </div>
            </div>
          </div>
        </div>
      {/* <Card /> */}
    </div>
  )
}

export default Home;
