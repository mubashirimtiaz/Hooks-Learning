import React,{useState} from 'react';

const HooksTest = () => {
   let [count,setCount] = useState(1);
   const handleClick = () => setCount(count + 2);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>add</button>
        </div>
    )
}
 
export default HooksTest;