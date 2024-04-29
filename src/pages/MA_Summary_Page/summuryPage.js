import { getDocs, collection} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
export default function MaSummaryPage(){
    // Assuming you have academic year and feedback values stored in variables
    const [courseFeedbackList, setCourseFeedbackList] = useState([]);
    const [toalResponce, setTotalRespoce] = useState([]);
    const databaseRef = collection(db, "courseFeedback");
    useEffect(() => {
        getData();
      },[]);
    const getData = async () => {
        try {
          const data = await getDocs(databaseRef);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          setCourseFeedbackList(
           filteredData
          );
          
        } catch (err) {
          console.error(err);
        }
      };
      //////////////////////////////////
    const academicYear = "2019/2020";
    const semestervalue = "V";
    const courseval="Computer programming"
    const data = [
        {question: "Question1"},
        {question: "Question02"},
        {question: "Question3"}
    ];
    const acyr = "2019/2020";
    const sem = "V";
    const cour="Computer programming"
    const data1 = [
        { question: "Que1", student1: "Ans1", student2: "Ans2", student3: "Ans3", totalResponse: 3, classAverage: 75 },
        { question: "Que2", student1: "Ans1", student2: "Ans2", student3: "Ans3", totalResponse: 3, classAverage: 80 },
        { question: "Que3", student1: "Ans1", student2: "Ans2", student3: "Ans3", totalResponse: 3, classAverage: 85 }
    ];
    
    

    return(
        <div>
            <h1>Summary page</h1>
            <h4>Course Feedback</h4>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <strong>Academic Year:</strong>
                    <div style={{ border: "1px solid black", width: "100px", height: "20px", textAlign: "center", lineHeight: "20px" }}>{academicYear}</div>
                </div>
                <div style={{ marginLeft: "20px" }}>
                    <strong>Semester:</strong>
                    <div style={{ border: "1px solid black", width: "20px", height: "20px", textAlign: "center", lineHeight: "20px" }}> {semestervalue}</div>
                </div>
                <div style={{ marginLeft: "20px" }}>
                    <strong>Course:</strong>
                    <div style={{ border: "1px solid black", width: "200px", height: "20px", textAlign: "center", lineHeight: "20px" }}> {courseval}</div>
                </div>
            </div>
            
            <table border="1">
                <thead>
                    <tr>
                        <th>Questions</th>
                        {courseFeedbackList.map((feedback)=><th>
                            <th>{feedback.studentRegNo}</th>
                        </th>)}
                        <th>Total Response</th>
                        <th>Class Average</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.question}</td>
                            {courseFeedbackList.map((feedback)=><td>
                            <td>{feedback.question==item.question?feedback.feedbacklevel:"Not Answered"}</td>
                        </td>)}
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    ))}
                </tbody>
            </table>

              
            <h4>Lecturer Feedback</h4>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                    <strong>Academic Year:</strong>
                    <div style={{ border: "1px solid black", width: "100px", height: "20px", textAlign: "center", lineHeight: "20px" }}>{acyr}</div>
                </div>
                <div style={{ marginLeft: "20px" }}>
                    <strong>Semester:</strong>
                    <div style={{ border: "1px solid black", width: "20px", height: "20px", textAlign: "center", lineHeight: "20px" }}> {sem}</div>
                </div>
                <div style={{ marginLeft: "20px" }}>
                    <strong>Course:</strong>
                    <div style={{ border: "1px solid black", width: "200px", height: "20px", textAlign: "center", lineHeight: "20px" }}> {cour}</div>
                </div>
            </div>
            
            <table border="1">
                <thead>
                    <tr>
                        <th>Questions</th>
                        <th>Student1</th>
                        <th>Student2</th>
                        <th>Student3</th>
                        <th>Total Response</th>
                        <th>Class Average</th>
                    </tr>
                </thead>
                <tbody>
                    {data1.map((item, index) => (
                        <tr key={index}>
                            <td>{item.question}</td>
                            <td>{item.student1}</td>
                            <td>{item.student2}</td>
                            <td>{item.student3}</td>
                            <td>{item.totalResponse}</td>
                            <td>{item.classAverage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}
