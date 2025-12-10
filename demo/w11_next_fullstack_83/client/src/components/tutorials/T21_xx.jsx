import { useState, useEffect } from 'react';

import Wrapper from '../../assets/wrappers/Tutorials_xx';

const T21_xx = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  // run each time when rendering
  useEffect(() => {
    console.log('value1 ' + value1);
  });

  // run only once
  useEffect(() => {
    console.log('value2 ' + value2);
  }, []);

  // run only value3 changes
  useEffect(() => {
    console.log('value3 ' + value3);
  }, [value3]);

  return (
    <Wrapper>
      <div>
        <h4>value1: {value1}</h4>
        <button className='btn' onClick={() => setValue1(value1 + 1)}>
          click btn1
        </button>
        <h4>value2: {value2}</h4>
        <button className='btn' onClick={() => setValue2(value2 + 1)}>
          click btn2
        </button>
        <h4>value3: {value3}</h4>
        <button className='btn' onClick={() => setValue3(value3 + 1)}>
          click btn3
        </button>
      </div>
    </Wrapper>
  );
};
export default T21_xx;
