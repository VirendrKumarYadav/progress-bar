import React,{useState,useEffect} from 'react'
import Translate from '../Translate';
import Loading from './Loading';

const Componant = () => {
   const [massage, setMassage]=useState("Waiting.........")
   const [loading,setLoading]=useState(true)
   
   useEffect(() =>{

    const fetchData=async()=>{
        try{
            setTimeout(()=>{
            setMassage("Data Loaded Sucessfully");    
            setLoading(false)
           
            },4000)
           }catch(err){
            setMassage("Data error Occurred");    
            setLoading(false)
           }
    }
    fetchData();
   },[]);
    
  return (
    <div>
      {
        loading?<Loading></Loading>:<p>{<Translate/>}</p>
      }
    </div>
  )
}

export default Componant
