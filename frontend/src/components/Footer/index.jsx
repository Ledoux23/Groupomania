// import styled from 'styled-components'
// import colors from '../../utils/style/colors'
 
// const FooterContainer = styled.footer`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding-top: 60px;
// `
 
function Footer() {
    return (
        <div className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item"><a href="/">À propos</a></li>
                            <li className="list-inline-item">&middot;</li>
                            <li className="list-inline-item"><a href="/">Vie privée</a></li>
                            <li className="list-inline-item">&middot;</li>
                            <li className="list-inline-item"><a href="/">Conditions d'utilisations</a></li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>   
    )
}
 
export default Footer