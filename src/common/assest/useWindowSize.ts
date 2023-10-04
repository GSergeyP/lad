import { useEffect, useState } from "react";

const screenResolution: Array<{}> = [ 480, 1024 ]; 

const useWindowSize: Function = () => {

  const [size, setSize] = useState<number>(0);
  const updateSize = () => { 
    setSize(window.innerWidth); 
  }
  
  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export { screenResolution, useWindowSize };