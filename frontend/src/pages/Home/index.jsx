// import { useState, useEffect } from "react";
import Card from '../../components/Card'

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

  return (
    <div>
      <h1>Voir tous les posts par ordre antéchronologique !</h1>
      <Card />
      {/* {isDataLoading ? (console.log("Data ok !")) : (console.log("No data !"))}
      {postData ? (console.log("Test Ok !")) : (console.log("Echec test !"))} */}
    </div>
  )
}

export default Home;
