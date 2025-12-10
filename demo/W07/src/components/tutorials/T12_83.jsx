import { useState } from 'react';
import Wrapper from '../../assets/wrappers/Tutorials_83';

const T12_83 = () => {
  // let count = 0
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // count++
    setCount(count + 1); 
    console.log('count', count);
  };

  return (
    <Wrapper>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        increment
      </button>
    </Wrapper>
  );
};

export default T12_83;
