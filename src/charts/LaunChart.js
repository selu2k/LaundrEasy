import React from "react";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

import launStaticsData from "../assets/dummy-data/launStatics";

const LaunChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={launStaticsData}>
        <XAxis dataKey="name" stroke="#2884ff" />
        <Bar dataKey="Stats" stroke="#2884ff" fill="#2884ff" barSize={30} />

        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LaunChart;
