import React from "react";
import Header from "../component/Header";
const CustomDisplay = ({ title, subtitle }) => {
  return (
    <div className="w-full">
      <p className="text-gray-600 text-lg">{title}</p>
      <p className="font-semibold text-lg">{subtitle}</p>
    </div>
  );
};
function Dashboard() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto max-w-4xl mt-10">
        <div className="flex gap-12 mb-2">
          <div className="rounded-full bg-slate-400" style={{
            minWidth:'150px',
            height:'150px'
          }}/>
          <div className="w-full">
            <div className="flex mb-2 w-full">
              <CustomDisplay title={"First Name"} subtitle={"Bharat"} />
              <CustomDisplay title={"Last Name"} subtitle={"Rana"} />
            </div>
            <div className="flex mb-2 w-full">
              <CustomDisplay title={"Email"} subtitle={"28brana@gmail.com"} />
              <CustomDisplay title={"Contact No."} subtitle={"781435671023"} />
            </div>
            <div className="flex mb-2 w-full">
              <CustomDisplay title={"Dob"} subtitle={"28-Aug-2002"} />
              <CustomDisplay title={"Gender"} subtitle={"Male"} />
            </div>
            <div className="flex mb-2 w-full">
              <CustomDisplay title={"Qualifications"} subtitle={"Higherst"} />
              <CustomDisplay title={"Hobbies"} subtitle={"Runnign"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
