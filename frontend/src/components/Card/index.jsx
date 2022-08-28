import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/profile.png'

const CardMessage = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardLike = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ message, picture, like }) {
  return (
    <CardWrapper>
      <CardMessage>{message}</CardMessage>
      <CardImage src={picture} alt="illustration" />
      <CardLike>{like}</CardLike>
    </CardWrapper>
  )
}

Card.propTypes = {
  message: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  message: '',
  like: 0,
  picture: DefaultPicture,
}

export default Card