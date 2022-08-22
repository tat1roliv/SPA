import React from 'react'

const TituloProps = () => {

  const Titulo = (props) => {
    return <h1>{props.texto}</h1>
  }

  return (
    <div>
      <Titulo texto="Titulo 1"/>
      <Titulo texto="Titulo 2"/>
    </div>
  )
}

export default TituloProps
