import React, { useState, useEffect } from "react";
import { ClipLoader } from 'react-spinners';
import { db } from "../config/firebase"; // Import your Firebase instance
import { collection, addDoc, deleteDoc, getDocs, doc, updateDoc } from "firebase/firestore";

export default function Database() {
  const dataRef = collection(db, "your_collection_name"); // Update with your collection name
  const [dataList, setDataList] = useState([]);
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    getData();
  }, [isUpdated]);

  async function deleteData(documentId) {
    try {
      const documentRef = doc(db, "your_collection_name", documentId); // Update with your collection name
      await deleteDoc(documentRef);
      console.log(`Document with ID ${documentId} deleted successfully.`);
      setIsUpdated(!isUpdated); // Trigger re-render after deletion
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  }

  const getData = async () => {
    try {
      const data = await getDocs(dataRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDataList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const uploadData = async () => {
    try {
      await addDoc(dataRef, {
        title: dataTitle,
        description: dataDescription,
      });
      setIsUpdated(!isUpdated); // Trigger re-render after upload
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  async function updateData(documentId, newData) {
    try {
      const documentRef = doc(db, "your_collection_name", documentId); // Update with your collection name
      await updateDoc(documentRef, newData);
      console.log(`Document with ID ${documentId} updated successfully.`);
      setIsUpdated(!isUpdated); // Trigger re-render after update
    } catch (error) {
      console.error("Error updating document:", error);
    }
  }

  return (
    <center>
      <div>
        {dataList.length > 0 ? (
          dataList.map((dataItem) => (
            <div key={dataItem.id}>
              <h1>{dataItem.title}</h1>
              <p>{dataItem.description}</p>
              <button onClick={() => deleteData(dataItem.id)}>Delete</button>
            </div>
          ))
        ) : (
          <ClipLoader color="#36D7B7" loading={true} size="50px" />
        )}

        <div style={{ paddingBottom: "50px" }}>
          <input placeholder="Data title" value={dataTitle} onChange={(e) => setDataTitle(e.target.value)} />
          <input placeholder="Data description" value={dataDescription} onChange={(e) => setDataDescription(e.target.value)} />
          <button onClick={uploadData}>Upload Data</button>
        </div>
      </div>
    </center>
  );
}
