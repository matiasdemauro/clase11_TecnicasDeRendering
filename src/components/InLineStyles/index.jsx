import React from 'react'

const InLineStyles = ({condicion}) => {
  return (
    <div style={
            {
                width : 300,
                height: 400,
                backgroundColor: condicion ? "green" : "red"
            }
    }>


    </div>
  )
}

export default InLineStyles