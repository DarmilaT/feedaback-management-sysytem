import React,{ useState } from "react";

import data from "./data";


export default  function Home() {
    
   
  const [selected, setSelected] = useState(Array(data.length).fill(false));
  const setArray = (id) => {
    setSelected((prevArray) => {
      const newArray = [...prevArray]; // Creating a copy of the array
      newArray[id] ? (newArray[id] = false) : (newArray[id] = true); // Setting the value true
      return newArray; // Returning the new array
    });
  };

  return (
    <center>
      <div  className="parant" style={{ color: "blue", width: "20vw" }}>
        <div>
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div className=" title" onClick={() => setArray(dataItem.id)}>
                  <h3
                    style={{
                      color: "white",
                      backgroundColor: "gray",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                    className="question"
                  >
                    {dataItem.question}
                  </h3>

                  <h4 className="asnwer" >
                    {selected[dataItem.id] ? (
                      <div>{dataItem.answer}</div>
                    ) : (
                      <span>+</span>
                    )}
                  </h4>
                </div>
              </div>
            ))
          ) : (
            <div> No data found</div>
          )}
        </div>
      </div>
    </center>
  );
}
