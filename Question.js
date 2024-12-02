import React, {useEffect, useState} from 'react'

const Question = () => {
  const useDebounce = (text, delay) => {
    const [debounce, setDebounce] = useState(text);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebounce(text);
      }, delay)
      return () => {
        clearTimeout(timer);
      };
    }, [text, delay]);

    return debounce;
  };

  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 1000);
  return (
    <div>
      <h2>Debounce Hook Tester</h2>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Type something...'/>
      <p>Debounced value :{debouncedText}</p>
      
    </div>
  )
}

export default Question
