// import { useEffect, useState } from "react";

// function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => setTime(new Date()), 1000);
    
//     return () => clearInterval(intervalId); // cleanup
// }, []);


//   return <h1>{time.toLocaleTimeString()}</h1>;
// }

// export default Clock;