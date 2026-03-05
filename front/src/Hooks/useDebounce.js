import  { useState, useEffect } from 'react';


function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay)
    })
  return (
    <div>
      
    </div>
  )
}

export default useDebounce
