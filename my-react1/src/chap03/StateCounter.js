import './StateCounter.css'

const StateCounter = ({step, onUpdate}) => {
  const handleClick = () => onUpdate(step);

  return (
    <button className='cnt' onClick={handleClick}>
      <span>{ step }</span>
    </button>
  );
};

export default StateCounter;