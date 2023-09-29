"use client";
import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher";

import React, { FC, useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

type Props = {
  open?: boolean;
  setOpen?: any;
};

const DashboardHeader: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-end p-6 fixed top-5 right-0 z-[9999999]">
      <ThemeSwitcher />
      <div
        className="relative cursor-pointer m-2"
        onClick={() => setOpen(!open)}
      >
        <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black" />
        <span className="absolute -top-2 -right-2 bg-[#3ccba0] rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
          3
        </span>
      </div>
      {open && (
        <>
          <div className="w-[350px] h-[60vh] overflow-y-scroll py-3 px-2 border border-[#ffffff0c] dark:bg-[#111C43] bg-white shadow-xl absolute top-16 z-[1000000000] rounded">
            <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white p-3">
              Notifications
            </h5>
            <div
              className="dark:bg-[#2d3a4e] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]"
              key={0}
            >
              <div className="w-full flex items-center justify-between p-2">
                <p className="text-black dark:text-white">{"Notification-1"}</p>
                <p
                  className="text-black dark:text-white cursor-pointer"
                  // onClick={() => handleNotificationStatusChange("1")}
                >
                  Mark as read
                </p>
              </div>
              <p className="px-2 text-black dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="p-2 text-black dark:text-white text-[14px]">
                {"Two minutes ago"}
              </p>
            </div>
          </div>
          <div className="w-[350px] h-[60vh] overflow-y-scroll py-3 px-2 border border-[#ffffff0c] dark:bg-[#111C43] bg-white shadow-xl absolute top-16 z-[1000000000] rounded">
            <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white p-3">
              Notifications
            </h5>
            <div
              className="dark:bg-[#2d3a4e] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]"
              key={0}
            >
              <div className="w-full flex items-center justify-between p-2">
                <p className="text-black dark:text-white">{"Notification-1"}</p>
                <p
                  className="text-black dark:text-white cursor-pointer"
                  // onClick={() => handleNotificationStatusChange("1")}
                >
                  Mark as read
                </p>
              </div>
              <p className="px-2 text-black dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="p-2 text-black dark:text-white text-[14px]">
                {"Two minutes ago"}
              </p>
            </div>
          </div>
          <div className="w-[350px] h-[60vh] overflow-y-scroll py-3 px-2 border border-[#ffffff0c] dark:bg-[#111C43] bg-white shadow-xl absolute top-16 z-[1000000000] rounded">
            <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white p-3">
              Notifications
            </h5>
            <div
              className="dark:bg-[#2d3a4e] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f]"
              key={0}
            >
              <div className="w-full flex items-center justify-between p-2">
                <p className="text-black dark:text-white">{"Notification-1"}</p>
                <p
                  className="text-black dark:text-white cursor-pointer"
                  // onClick={() => handleNotificationStatusChange("1")}
                >
                  Mark as read
                </p>
              </div>
              <p className="px-2 text-black dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="p-2 text-black dark:text-white text-[14px]">
                {"Two minutes ago"}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardHeader;
