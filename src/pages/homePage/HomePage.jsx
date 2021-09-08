import React, { useState } from "react";
import "./homePage.css";
import { UserStatus } from "./userStatus/UserStatus";
import { Member } from "./member/Member";
import { Button } from "../../components/button/Button";
import circle from "../../assets/circle.svg";
import magnifier from "../../assets/Magnifier.svg";
import visitArrow from "../../assets/Visit Arrow.svg";
import { status } from "../../common/constants";

const HomePage = () => {
  const [members, setMembers] = useState([]);

  const addMember = (value) => {
    const newMemberIndex = members.length + 1;
    let newMembers = [];
    if (newMemberIndex > 1) {
      newMembers = members.map((member) => {
        return {
          ...member,
          start: (360 / newMemberIndex) * member.id,
          end: (360 / newMemberIndex) * (member.id + 1),
        };
      });
    }
    setMembers([
      ...newMembers,
      {
        id: newMemberIndex - 1,
        start: (360 / newMemberIndex) * (newMemberIndex - 1),
        end: (360 / newMemberIndex) * newMemberIndex,
        status: value,
      },
    ]);
  };

  const search = () => {
    alert("search");
  };

  const visit = () => {
    alert("visit");
  };

  return (
    <div className="wrapper">
      <Member dataInput={addMember} status={status}></Member>
      <div className="main-circle">
        <img src={circle} alt="circle"></img>
        <UserStatus member={members}></UserStatus>
        <Button clickButton={search} className="magnifier">
          <img src={magnifier} alt="magnifier" />
        </Button>
        <Button clickButton={visit} className="visit">
          <img src={visitArrow} alt="visit" />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
