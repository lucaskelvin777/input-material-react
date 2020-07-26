import React, { useState, useEffect, useRef, ReactDOM } from 'react';
import { Bar, Group, Input, Label } from './styled/Input';
const App = () => {
  const [inputs, setInputs] = useState([
    { id: 1, input: 'Nome', ativo: false, valor: null },
    { id: 2, input: 'Email', ativo: false }
  ]);

  return (
    <div style={{ padding: '2em' }}>
      {inputs.map(element => (
        <Group key={element.id}>
          <Input className={element.ativo ? 'used' : ''}
            value={element.valor || ''}
            onChange={e => {
              let oldInputs = inputs;
              let valor = e.target.value;
              let newInputs = oldInputs.map(oldInputsElement => {
                if (oldInputsElement.id === element.id) {
                  oldInputsElement.valor = valor;
                  if (oldInputsElement.valor !== null && oldInputsElement.valor !== '') {
                    oldInputsElement.ativo = true;
                  } else {
                    oldInputsElement.ativo = false;
                  }
                }
                return oldInputsElement;
              });

              setInputs(newInputs);

            }}
            pattern="[a-zA-Z\s]+$" required />
          <Label>{element.input}</Label>
          <Bar></Bar>
        </Group>
      ))}

    </div>
  );
}

export default App;
