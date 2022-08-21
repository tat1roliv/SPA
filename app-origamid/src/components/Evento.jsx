
import React from 'react';

function Evento() {

    function handleClick(event) {
        alert('Comprou: ' + event.target.innerText);
      }
   
  return (
    <div>
      <p>component Evento: <a href="https://reactjs.org/docs/events.html">https://reactjs.org/docs/events.html</a></p>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>

    </div>
  );
}

export default Evento;
