import React from "react";
import HeaderComp from "../Components/Header/HeaderComp";
import ContentComp from "../Components/Content/ContentComp";
export default function HomePage() {
  return (
    <div className="center-div">
      <div className="w-80">
        <div className="container">
          <HeaderComp />
          <ContentComp />
        </div>

      </div>
    </div>

  )
}