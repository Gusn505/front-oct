import { useEffect } from "react";
import React from "react";
import { Navbar } from '../components/Navbar';


export function Party()  {


  useEffect(() => {
    const studentsGrid = document.querySelector("#students-grid");

    const absoluteChairs = [
        "bottom-0 left-0",
        "bottom-2/6 -left-0",
        "top-0 left-0",
        "-top-1 left-1/5",
        "bottom-0 right-0",
        "bottom-2/6 -right-0",
        "top-0 right-0",
        "-bottom-0 right-2/6",
    ];

    for (let i = 0; i < 10; i++) {
      const table = document.createElement("div");
      table.className = " z-40 w-28 h-28 bg-[#7900ff] rounded-full";

      const tableContainer = document.createElement("div");
      tableContainer.className =
        "relative p-8 flex justify-center items-center my-8";

      for (let j = 0; j < 8; j++) {
        const chairContainer = document.createElement("div");
        chairContainer.className = `z-50 absolute ${absoluteChairs[j]} w-6 h-6 `;

        const chairImg = document.createElement("img");
        chairImg.src = "/armchair.png";
        chairImg.alt = "";

        chairContainer.appendChild(chairImg);
        tableContainer.appendChild(chairContainer);
      }

      tableContainer.appendChild(table);
      studentsGrid.appendChild(tableContainer);
    }
  }, []);
  return (
    <>
       
       <Navbar/>

      <div className="flex justify-center bg-[#1b004b]"> 
      
        <div className="w-5/6 bg-[#e7d2ff] flex p-2"> 
            <div 
              className="w-full h-18 grid grid-cols-5 place-items-center px-5 " id="students-grid">
            </div>   
        </div>

      </div>
    </>
  );
}