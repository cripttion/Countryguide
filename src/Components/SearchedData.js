import React from 'react'
import { useStateManager } from './StaesManage';
function SearchedData() {
    const{colleges,setColleges,collegesState,setCollegesState} = useStateManager();
     console.log(colleges);
  return (
    <div>
        <select onChange={(e)=>setCollegesState(e.target.value)}>
            <option value="">All cities</option>
            {colleges.map((college,index)=>(
                <option value={college.college_name}>{college.college_name}</option>
            ))}
        </select>
    </div>
  )
}

export default SearchedData