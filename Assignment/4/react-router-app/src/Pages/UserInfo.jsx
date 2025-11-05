import React from "react";
import "./Page.css";
import profilePic from "../assets/ProfileImage.jpg";

const UserInfo = () => {
  const user = {
    name: "Sxxxxxxxxx Sxxx",
    age: "xx",
    dob: "xx xxx xxxx",
    email: "Xxxxxxxxxx@gmail.com",
    address: "Mxxxxx, Xxxxx",
  };

  return (
    <div className="page userinfo-page">
      <h1>User Information</h1>
      <div className="user-card">
        <img src={profilePic} alt="user" className="user-img" />
        <div className="user-details">
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Age:</b> {user.age}
          </p>
          <p>
            <b>Date of Birth:</b> {user.dob}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Address:</b> {user.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
