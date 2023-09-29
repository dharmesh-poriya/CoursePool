import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";

type Props = {
  isDashboard?: boolean;
};

const DashboardHero = ({ isDashboard }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <DashboardHeader />
    </div>
  );
};

export default DashboardHero;
