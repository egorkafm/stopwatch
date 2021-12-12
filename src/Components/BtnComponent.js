import React from 'react';

function BtnComponent(props) {
  return (
    <div className='d-flex'>
      <button
        className="stopwatch-btn"
        onClick={props.start}
      >
        Start
      </button>
      <button
        className="stopwatch-btn"
        onClick={props.stop}
        >
          Stop
      </button>
      <button 
        className="stopwatch-btn"
        onClick={props.wait}
        >
          Wait
      </button>
      <button
      className="stopwatch-btn"
        onClick={props.reset}
        >
          Reset
      </button>
    </div>
  );
}

export default BtnComponent;