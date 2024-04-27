import Layout from "../03_compounds/Layout/layout";
import { useEffect, useState } from "react";
import { data } from "../../data";

const Table = ({ data }) => {
  return (
    <div className="p-4 rounded-lg overflow-hidden">
      <div className="table w-full">
        <p className="bg-gray-900 text-white text-center text-lg font-semibold py-2">
          {data.heading}
        </p>
        <div className="flex bg-yellow-300">
          {data.colHeading.map((col, idx) => (
            <p key={idx} className="flex-1 text-center py-2">
              {col}
            </p>
          ))}
        </div>

        {data.data.map((row, idx) => (
          <div
            key={idx}
            className={`flex ${idx % 2 === 0 ? "bg-gray-200" : "bg-white"}`}
          >
            {row.map((col, idx) => (
              <p key={idx} className="flex-1 text-center py-2">
                {col}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div>
      <Layout>
        <Table data={data} />
      </Layout>
    </div>
  );
};

export default Courses;
