import React, { useEffect, useState } from "react";

import { ClipLoader } from 'react-spinners';
import {doc, getDocs, collection,addDoc, deleteDoc, updateDoc} from "firebase/firestore";
import { db } from "../config/firebase";

export default function Database() {
  const databaseRef = collection(db, "students");
  const [StudentList, setMovieList] = useState([]);
  const [StudentName, setMovieTitle] = useState("Priyatharsini Sivalingam");
  const [RegNum, setRegNum] = useState("2020e122");
  const [Email, setEmail] = useState("2020e122@eng.jfn.ac.lk");
  const [BatchNo, setBatchNo] = useState(20 );
  
  useEffect(() => {
    getData();
  },[]);
  
  //Get Data From a Documents
  const getData = async () => {
    try {
      const data = await getDocs(databaseRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(
       filteredData
      );
      console.log(StudentList);
    } catch (err) {
      console.error(err);
    }
  };
  //Upload a data to database
  const uploadMovie=async()=>{
    try {
        await addDoc(databaseRef,{
            name:StudentName,
            RegNum:RegNum,
            Email:Email,
            BatchNo:BatchNo
        });
       await getData();
    } catch (error) {
        
    }
  }
 
  
  return <center>
    <div>
   
    {StudentList.length>0? StudentList.map((student)=><div key={student.id}>
    <h1>
        {student.name}
    </h1>
            
       
        <h3>
            {student.RegNum}
        </h3>
        <h3>
            {student.Email}
        </h3>
       
     
    </div>): <ClipLoader color="#36D7B7" loading={true}  size="50px" />}
    
    <div style={{paddingBottom:"50px"}}>
        <input placeholder="Student name" onChange={(e)=>setMovieTitle(e.target.value)}></input>
        <input placeholder="Reg num" onChange={(e)=>setRegNum(e.target.value)}></input>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
        <input  onChange={(e)=>setEmail(e.target.value)}></input>
        
        <button onClick={uploadMovie} > Upload Movie</button>
    </div>
  </div>
  </center>;
}
