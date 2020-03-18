import React from 'react';

const usePrevious = (value) => {
    const ref = React.useRef()

    React.useEffect(() => {
      ref.current = value;
      console.log(`2 - previous value ${ref.current.weight}`);
    }, [value])

    return ref.current;
}

export default usePrevious;