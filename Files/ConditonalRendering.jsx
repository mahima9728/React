import React from 'react'
import PropTypes from 'prop-types'


      // <UerGreeting isLoggedIn={true} username ="Harry" />

function UerGreeting(props) {

  const welcomeMsg = <h1 className='welcom-msg'>Welcom {props.username}</h1>
  
  const loginPrompt = <h2 className='login-prompt'>Please log in to continue</h2>

  return (props.isLoggedIn ? welcomeMsg:loginPrompt);

  // if (props.isLoggedIn) {
  
  //   return <h1>Welcom {props.username}</h1>
  // }
  // else {
  //   return <h2>
  //     Please log in to continue
  //   </h2>
  // }

}
UerGreeting.proptypes ={
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

UerGreeting.defaultProps = {
  isLoggedIn: false,
  username:"Guest"
}
export default UerGreeting