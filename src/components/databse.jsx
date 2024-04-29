import React, { useEffect, useState } from "react";

import { ClipLoader } from 'react-spinners';
import {doc, getDocs, collection,addDoc, deleteDoc, updateDoc} from "firebase/firestore";
import { db } from "../config/firebase";

export default function Database() {
  const databaseRef = collection(db, "movies");
  const [movieList, setMovieList] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState(0);
  const [isNew, setIsNew] = useState(false);
 
  useEffect(() => {
    getData();
  },[]);
  // Delete Collection
  async function deleteEntireCollection(collectionPath) {
    try {
      const querySnapshot = await getDocs(collection(db, collectionPath));
  
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
  
      console.log(`Collection ${collectionPath} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting collection:", error);
    }
  }
  //Delete the Document data
  async function deleteDocument(documentId) {
    try {
      const documentRef = doc(db, "movies", documentId); // "movies" is the collection name, replace it with your collection name
      await deleteDoc(documentRef);
      console.log(`Document with ID ${documentId} deleted successfully.`);
      await getData();
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  }
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
      console.log(movieList);
    } catch (err) {
      console.error(err);
    }
  };
  //Upload a data to database
  const uploadMovie=async()=>{
    try {
        await addDoc(databaseRef,{
            name:movieTitle,
            year:movieYear,
            isNew:isNew

        });
       await getData();
    } catch (error) {
        
    }
  }
  //Update data to document
  async function updateDocument(documentId, newData) {
    try {
      const documentRef = doc(db, "movies", documentId);
      await updateDoc(documentRef, newData);
      console.log(`Document with ID ${documentId} updated successfully.`);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  }

  
  return <center>
    <div>
   
    {movieList.length>0? movieList.map((movie)=><div key={movie.id}>
        <h1 style={{color:movie.isNew? "green":"red"}}>
            {movie.name}
        </h1>
        <h3>
            {movie.year}
        </h3>
        <h3>
            {movie.id}
        </h3>
        <button onClick={()=>deleteDocument(movie.id)} > Delete Movie</button>
       
     
    </div>): <ClipLoader color="#36D7B7" loading={true}  size="50px" />}
    
    <div style={{paddingBottom:"50px"}}>
        <input placeholder="movie title" onChange={(e)=>setMovieTitle(e.target.value)}></input>
        <input placeholder="movie year" onChange={(e)=>setMovieYear(Number(e.target.value))}></input>
        <input type="checkbox" checked={isNew} onChange={(e)=>setIsNew(e.target.checked)}></input>
        <label >Is New</label>
        <button onClick={uploadMovie} > Upload Movie</button>
    </div>
  </div>
  </center>;
}
