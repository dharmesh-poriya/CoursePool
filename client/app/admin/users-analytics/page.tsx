"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../utils/Heading";
import DashboardHeader from "../../components/Admin/DashboardHeader";
import UserAnalytics from "../../../app/components/Admin/Analytics/UserAnalytics";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="CoursePool | Admin"
        description="CoursePool is a dynamic online e-learning platform that offers a wide range of courses to students of all ages and backgrounds"
        keywords="Programming, App Development, Web Development, DevOps, Engineering, Machine Learning, UPSC, Cyber Security, Maths, Gate, Jee, Neet"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <UserAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
