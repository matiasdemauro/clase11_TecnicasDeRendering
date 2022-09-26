import React from 'react'

const ReturnTemprano = ({condicion}) => {
    if (condicion){
        return <h3>Se cumple la condicion</h3>
    }
  
    return (
    <h3>No se cumple la condicion</h3>
  )
};

export default ReturnTemprano