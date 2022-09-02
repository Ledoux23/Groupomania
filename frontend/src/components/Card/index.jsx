// import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import colors from '../../utils/style/colors'
// import DefaultPicture from '../../assets/profile.png'

// const CardMessage = styled.span`
//   color: #5843e4;
//   font-size: 22px;
//   font-weight: normal;
//   padding-left: 15px;
// `

// const CardLike = styled.span`
//   color: black;
//   font-size: 22px;
//   font-weight: normal;
//   align-self: center;
// `

// const CardImage = styled.img`
//   height: 150px;
//   width: 150px;
//   align-self: center;
//   border-radius: 50%;
// `

// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   padding: 15px;
//   background-color: ${colors.backgroundLight};
//   border-radius: 30px;
//   width: 300px;
//   height: 300px;
//   transition: 200ms;
//   &:hover {
//     cursor: pointer;
//     box-shadow: 2px 2px 10px #e2e3e9;
//   }
// `

// function Card({ message, picture, like }) {
//   return (
//     <CardWrapper>
//       <CardMessage>{message}</CardMessage>
//       <CardImage src={picture} alt="illustration" />
//       <CardLike>{like}</CardLike>
//     </CardWrapper>
//   )
// }

// Card.propTypes = {
//   message: PropTypes.string.isRequired,
//   like: PropTypes.number.isRequired,
//   picture: PropTypes.string.isRequired,
// }

// Card.defaultProps = {
//   message: '',
//   like: 0,
//   picture: DefaultPicture,
// }

// export default Card
import Logo from '../../assets/icon-left-font.png';
import image from '../../assets/icon-left-font.png';

function Card() {
    return (
        <div className="container">
            <div className="row">
                <div className="container">
                    <nav className="col navbar navbar-expand-lg navbar-dark bg-danger px-3">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} width="100"  height="80" alt="Groupomania logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">                          
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Se déconnecter</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">
                                    Bootstrap can be used directly on elements 
                                    and components in your React app by applying 
                                    the built-in classes as you would any other class.
                                </p>
                            </div>
                            <img className="card-img-top" src={image} width="auto" height="auto" alt="Illustration" />
                            <button type="button" className="btn btn-success col-12 col-md-3 col-lg-4">J'aime</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;