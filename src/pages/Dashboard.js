import React from "react";
import Header from "../component/Header";
import { useSelector } from "react-redux";
const CustomDisplay = ({ title, subtitle }) => {
  return (
    <div className="w-full">
      <p className="text-gray-600 text-lg">{title}</p>
      <p className="font-semibold text-lg">{subtitle}</p>
    </div>
  );
};
function Dashboard() {
  const data =useSelector(state=>state.userReducer);
  return (
    <div className="">
      <Header />
      <div className="container mx-auto max-w-4xl mt-10">
        <div className="flex gap-12 mb-2">
          <div className="rounded-full overflow-hidden bg-slate-400" style={{
            minWidth:'150px',
            height:'150px',
          }}>
            <img src={data?.profileImage} alt="user" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full">
            <div className="flex mb-2 w-full">
              <CustomDisplay title={"First Name"} subtitle={data?.firstName} />
              <CustomDisplay title={"Last Name"} subtitle={data?.lastName} />
            </div>
            <div className="flex mb-2 w-full">
              <CustomDisplay title={"Email"} subtitle={data?.email} />
              <CustomDisplay title={"Contact No."} subtitle={data?.contactNo} />
            </div>
            <div className="flex mb-2 w-full">
              <CustomDisplay title={"Dob"} subtitle={data?.dob} />
              <CustomDisplay title={"Gender"} subtitle={data?.gender} />
            </div>
            <div className="flex mb-2 w-full">
              <CustomDisplay title={"Qualifications"} subtitle={data?.qualification} />
              <CustomDisplay title={"Hobbies"} subtitle={data?.hobbies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
