import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useStateManager} from './StaesManage';
function Home() {
    const{colleges,setColleges,collegesState,setCollegesState} = useStateManager();
    const apiKey = '579b464db66ec23bdd000001c549af7d64ee406f5265b4a855956e84';
        const url = `https://api.data.gov.in/resource/44bea382-c525-4740-8a07-04bd20a99b52?api-key=${apiKey}&format=json&limit=1000`;
    useEffect(()=>{
        const fetDetails = async()=>{
            try{
                const response =await axios.get(url);
                // console.log(response.data.records);
                setColleges(response.data.records);
                // const temp = [...new Set(colleges.map(college=>college.state_name))];
                // setCollegesState(temp);
               console.log(collegesState);
                // console.log(colleges[177]);
            }catch(err){
                console.log("error while fetching",err);
            }
        }
        fetDetails();
        
},[]);
const stateName = [...new Set(colleges.map(college=>college.state_name))];
const filteredData = colleges.filter(college=>collegesState ===''||college.state_name ===collegesState);
  return (
    <div>
        <h2>Approved colleges in india</h2>
        <h1>this is the filterd data</h1>
        <select onChange={(e)=>setCollegesState(e.target.value)}>
            <option value="">All cities</option>
            {stateName.map((college,index)=>(
                <option value={college} key={index}>{college}</option>
            ))}
        </select>
        {filteredData.map((college,index)=>(
            <li>{college.college_name}</li>
        ))}
    </div>
  )
}

export default Home