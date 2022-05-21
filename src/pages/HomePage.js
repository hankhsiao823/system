import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div style={{ background: "#F4F4EB", height: "100vh", position: "relative " }}>
      <header>
        <h1
          style={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            letterSpacing: "4px",
            color: "#5e574e",
          }}
        >
          後新冠特別門診管理系統
        </h1>
        <div
          style={{
            position: "absolute",
            top: "6rem",
            left: "2rem",
            display: "flex",
            width: "90%",
            height: "2px",
            background: "#818181",
          }}
        ></div>
      </header>
      <table
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "50%",
          margin: '0 auto'
        }}
      >
        <tbody
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <tr>
            <td>
              <Link to="./information">
                <img src="assets/images/record.png" alt="收案" height="150px" />
              </Link>
            </td>
            <td>
              <Link to="./tracking">
                <img
                  src="assets/images/mobileTrack.png"
                  alt="電話追蹤"
                  height="150px"
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="./social">
                <img
                  src="assets/images/socialPsychology.png"
                  alt="社會心理"
                  height="150px"
                />
              </Link>
            </td>
            <td>
              <Link to="./pressure">
                <img
                  src="assets/images/physicalAndMental_Stress.png"
                  alt="身心壓力"
                  height="150px"
                />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
