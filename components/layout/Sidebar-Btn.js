import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Sidebar_Btn() {
  const [collapsed, setCollapse] = useState(false);
  return (
    <div>
      <p className="m-3">
        <button
          className="btn btn-sih"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="true"
          aria-controls="collapseExample"
          onClick={() => {}}
        >
          <AiOutlineArrowLeft />
        </button>
        {/* <button className="btn btn-sih" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
        <AiOutlineArrowLeft/>
        </button> */}
      </p>
    </div>
  );
}
