"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface props {}

const Page: FC<props> = (props) => {
  return (
    <div>
      <Heading
        title="CoursePool"
        description="CCoursePool is a dynamic online e-learning platform that offers a wide range of courses to students of all ages and backgrounds"
        keywords="Programming,App Development,Web Development,DevOps,Engineering,Machine Learning,UPSC,Cyber Security,Maths,Gate,Jee,Neet"
      />
    </div>
  );
};

export default Page;
