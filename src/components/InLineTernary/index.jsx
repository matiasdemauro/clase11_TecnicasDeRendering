import React from 'react'

const InLineTernary = ({condicion}) => {

  
    return ( 
    condicion ? <h4>MUESTRA COMPONENTE 1</h4> : <h4>MUESTRA COMPONENTE 2</h4> 
   
  )
}

export default InLineTernary