import Proptypes from 'prop-types'
import React from 'react'

function Students(props) {
  return (
    <div className='students'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Students.protoType = {
  name: Proptypes.string,
  age: Proptypes.number,
  isStudent: Proptypes.bool
}
Students.defaultProps = {
  name: 'Guest',
  age: 0,
  isStudent:false
}

export default Students;

 //Students Props
      // <Students name="Spongebob" age={27} isStudent={true} />
      // <Students name="Patrick" age={32} isStudent={false} />
      // <Students name="Doreamon" age={31} isStudent={false} />
      // <Students name="Sandy" age={30} isStudent={true} />
      // <Students name="Larry"/>
     