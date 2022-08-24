import Log from '../../components/Log';

// les props passés à Log sont importés dans le fichiers principal de Log
function Profil() {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log signin={false} signup={true} />
        <div className="img-container">
          {/* <img src='./' alt='' /> */}
        </div>
      </div>
    </div>
  )
}
  
export default Profil;