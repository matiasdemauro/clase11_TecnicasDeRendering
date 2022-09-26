import React from 'react';
import './style.scss';
const ClassBasedCondition = ({condicion , otherClass}) => {
  return (
    <div className={`${condicion ? 'class-true' : 'class-false'} ${otherClass || ""}`}>
        <p>Hola dentro del div</p>
    </div>
  )
}

export default ClassBasedCondition