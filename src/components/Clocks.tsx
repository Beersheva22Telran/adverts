import { useState, useEffect } from "react";
import { Clock } from "./Clock"

const Clocks:React.FC = () => {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString())
    useEffect(() => {
        const intervalId = setInterval(() => {
       setTime(new Date().toLocaleTimeString(undefined,{timeZone:"Australia/Brisbane"}));
      
   }, 1000 );
   return () => clearInterval(intervalId)
   }, [])
    return <div style={{display: 'flex',
     flexDirection: 'row', justifyContent: 'space-around'}}>
       <Clock time={time} />
       <Clock time={time}/>
    </div>
}
export default Clocks