"use client"

import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import DoctorCategory from "@/components/DoctorCategory";
import BookAppointment from "@/components/BookAppointment";

  const  HomePage = () => {
  const fun = ()=> {
    alert("Programming Hero")
  }
  return (
    <main className="">
      {/* <h1>Programming Hero</h1>
      <button onClick={fun}>Click Me</button> */}
      <Banner />
      <DoctorCategory/>
      <BookAppointment/>
      <Faq/>

    </main>
  );
}
export default HomePage;