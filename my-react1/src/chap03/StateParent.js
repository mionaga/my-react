import { useState } from 'react';
import StateCounter from './StateCounter'

const StateParent = () => {
  const [count, setCount] = useState(0);

  const update = step => setCount(count => count + step);

  return (
    <>
    <p>総カウント: {count}</p>
    <StateCounter step={1} onUpdate={update} />
    <StateCounter step={5} onUpdate={update} />
    <StateCounter step={-1} onUpdate={update} />
    </>
  );
};

export default StateParent;