// import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import { FaArrowRight, FaUmbrellaBeach, FaCalendarPlus } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiBackstab } from "react-icons/gi";
import { TbEmergencyBed } from "react-icons/tb";

const DoctorCategory = () => {
  return (
    <div className="mb-20">
      <div className="text-center my-20 space-y-3">
        <h1 className="text-2xl font-bold">Explore By Categories</h1>
        <p className="w-6/12 mx-auto">
          Great doctor if you need your family member to get effective immediate
          assistance, emergency treatment or a simple consultation.
        </p>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-5">
        <div className="border-2 hover:border-purple-700 rounded-lg space-y-4 p-5">
          <div className="bg-gray-200 rounded-full w-14 h-14 p-3 flex justify-center items-center">
            <FaUserDoctor className="text-2xl text-[#305CCC]" />
          </div>
          <h1 className="font-bold text-lg">Doctors</h1>
          <p>Due to its wide spread use as filler</p>
          <a href="" className="flex items-center gap-2 text-sky-600">
            Find here <FaArrowRight />
          </a>
        </div>
        <div className="border-2 hover:border-purple-700 rounded-lg space-y-4 p-5">
          <div className="bg-gray-200 rounded-full w-14 h-14 p-3 flex justify-center items-center">
            <GiBackstab className="text-2xl text-[#305CCC]" />
          </div>
          <h1 className="font-bold text-lg">Clinics</h1>
          <p>Due to its wide spread use as filler text</p>
          <a href="" className="flex items-center gap-2 text-sky-600">
            Find here <FaArrowRight />
          </a>
        </div>
        <div className="border-2 hover:border-purple-700 rounded-lg space-y-4 p-5">
          <div className="bg-gray-200 rounded-full w-14 h-14 p-3 flex justify-center items-center">
            <FaUmbrellaBeach className="text-2xl text-[#305CCC]" />
          </div>
          <h1 className="font-bold text-lg">Labs</h1>
          <p>Due to its wide spread use as filler text</p>
          <a href="" className="flex items-center gap-2 text-sky-600">
            Find here <FaArrowRight />
          </a>
        </div>
        <div className="border-2 hover:border-purple-700 rounded-lg space-y-4 p-5">
          <div className="bg-gray-200 rounded-full w-14 h-14 p-3 flex justify-center items-center">
            <TbEmergencyBed className="text-2xl text-[#305CCC]" />
          </div>
          <h1 className="font-bold text-lg">Emergency</h1>
          <p>Due to its wide spread use as filler text</p>
          <a href="" className="flex items-center gap-2 text-sky-600">
            Find here <FaArrowRight />
          </a>
        </div>
        <div className="border-2 hover:border-purple-700 rounded-lg space-y-4 p-5">
          <div className="bg-gray-200 rounded-full w-14 h-14 p-3 flex justify-center items-center">
            <FaCalendarPlus className="text-2xl text-[#305CCC]" />
          </div>
          <h1 className="font-bold text-lg">Insurance</h1>
          <p>Due to its wide spread use as filler text</p>
          <a href="" className="flex items-center gap-2 text-sky-600">
            Find here <FaArrowRight />
          </a>
        </div>
      </div>

      {/* About Doctris */}
      <div className="md:flex gap-3 items-center w-10/12 mx-auto mt-16">
        <div className="space-y-6 w-2/3">
          <p className="bg-gray-100 w-40 text-purple-700 text-center rounded-xl px-2">About Doctris</p>
          <h1 className="text-3xl font-semibold text-purple-500">Good Services And Better 
            Health By Our Specialists
          </h1>
          <p className="w-4/5">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
          <p className="w-4/5 mb-12">The most well-known dummy text is the Lorem Ipsum which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Lain language which more or less corresponds to proper Latin. It contains a series of real Latin words.
          </p>
          <p>
            <a href="https://www.nemc.edu.bd/our-doctors/" className="bg-gray-200 border-2 shadow-lg border-purple-700 font-bold hover:text-white hover:bg-orange-400 py-2 px-4 rounded-md text-purple-700">Read more</a>
          </p>
        </div>
        
          <div className="w-1/3">
          <img
            className="rounded-md h-[500px]"
            src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg?w=360&t=st=1708932907~exp=1708933507~hmac=4192f0c662818efc37428bfdc089038aa12b161d698b4dff3b67205e065c46b2"
            alt=""
          />
        
        </div>
      </div>
    </div>
  );
};

export default DoctorCategory;
