import React,{createContext,useContext,useState} from 'react';
const StateManager = createContext();
export const StaesManage=({children})=> {
    const[colleges,setColleges] = useState([]);
    const[collegesState,setCollegesState] = useState([]);
  return (
        <StateManager.Provider 
          value={{colleges,setColleges,collegesState,setCollegesState}}>
            {children}
          </StateManager.Provider>
    )
}

export const useStateManager =()=>useContext(StateManager);