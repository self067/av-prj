import { useState } from 'react';

const useCount = ( startCount ) => {
  const [count, setCount] = useState(startCount || 1);

  const onChange = e => setCount(e.target.value);

  return { count, setCount, onChange};
}

export default useCount;
