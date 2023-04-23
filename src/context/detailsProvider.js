import React, { createContext,useState } from "react";

export const MyContext = createContext();

const DetailsProvider=(props)=>{

// const [timer, setTimer] = useState({ hr: 0, min: 0, sec: 0, ms: 0 });
const [score,setScore] = useState(0)

return <MyContext.Provider value={[score,setScore]}>{props.children}</MyContext.Provider>;
};
export default DetailsProvider;
