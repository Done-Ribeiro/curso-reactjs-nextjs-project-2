import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

// Precisa do React.memo para usar o Button (como um Cache)
const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  /*
    aqui usamos o useCallback
    para a partir da segunda chamada
    ele renderizar somente o component pai
  */
  const incrementCounter = useCallback((num) => {
    /*
      para isso, não passaremos mais aqui o counter...
      e sim o (prevCounter) como parâmetro da fn de callback
    */
    setCounter((c) => c + num);
  }, []);

  console.log('Pai, renderizou');

  return (
    <div className="App">
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
