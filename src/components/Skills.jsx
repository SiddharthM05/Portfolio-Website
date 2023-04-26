import React from "react";
import { skills } from "../data/skills";

import Title from "./Title";
import { forwardRef } from "react";
import SkillsItem from "./SkillsItem";
const Skills = forwardRef((props) => {
  return (
    <div className="flex justify-center p-7 ">
      <div>
        <Title className="">Skills</Title>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 gap-4">
            <SkillsItem title="Front End" skills={skills}></SkillsItem>
            <SkillsItem title="Back End" skills={skills}></SkillsItem>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Skills;
