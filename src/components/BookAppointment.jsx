import { FaRegCalendarDays } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { RiMicroscopeLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const BookAppointment = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Appointment schedule booked",
      showConfirmButton: false,
      timer: 1500
    });
  };




  return (
    <div className="w-10/12 mx-auto my-16">
      <FaRegCalendarDays className="text-3xl text-purple-700 mb-5" />
      <div className="md:flex items-center gap-5">
        <div className="w-1/2 space-y-5">
          <h1 className="text-2xl font-bold">Book Your Appointment</h1>
          <p className="mb-7">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.
          </p>

          <div className="space-y-2 border-2 rounded-lg p-4 hover:bg-[#396CF0] duration-500 hover:text-white flex items-center gap-3">
            <FaStethoscope className="text-5xl text-purple-700" />
            <div>
              <h1 className="text-xl font-bold">Success Of Treatment</h1>
              <p>The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century.
              </p>
            </div>
          </div>
          <div className="space-y-2 border-2 rounded-lg p-4 hover:bg-[#396CF0] duration-500 hover:text-white flex items-center gap-3">
            <RiMicroscopeLine className="text-6xl text-purple-700" />
            <div>
              <h1 className="text-xl font-bold">Modern Technology</h1>
              <p>The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century.
              </p>
            </div>
          </div>
          <div className="space-y-2 border-2 rounded-lg p-4 hover:bg-[#396CF0] duration-500 hover:text-white flex items-center gap-3">
            <FaUserDoctor className="text-5xl text-purple-700" />
            <div>
              <h1 className="text-xl font-bold">Certified Doctors</h1>
              <p>The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century.
              </p>
            </div>
          </div>


        </div>

        {/* 2nd div */}
        <div className="w-1/2">
          <div className="mt-8 px-6 py-3 bg-gray-50 border rounded-lg">
            {/* <h2 className="text-xl font-bold mb-2 text-center">Appointment Form</h2> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label htmlFor="patientName" className="block font-semibold mb-1">Patient Name *</label>
                <input
                  type="text"
                  id="patientName"
                  placeholder="Enter your name"
                  {...register('patientName', { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.patientName && <span className="text-red-500">Patient Name is required</span>}
              </div>
              <div className="flex items-center gap-3">
                <div className="mb-2 w-1/2">
                  <label htmlFor="department" className="block font-semibold mb-1">Department *</label>
                  <select
                    id="department"
                    {...register('department', { required: true })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    {/* <option value="">Select Department</option> */}
                    <option value="EyeCare">Eye Care</option>
                    <option value="Gynacolist">Gynacolist</option>
                    <option value="Psythotarapist">Psythotarapist</option>
                    <option value="Othpadic">Othpadic</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Gastrolist">Gastrolist</option>
                    <option value="Urologist">Urologist</option>
                    <option value="Neurologist">Neurologist</option>
                    {/* Add other department options here */}
                  </select>
                  {errors.department && <span className="text-red-500">Department is required</span>}
                </div>
                <div className="mb-2 w-1/2">
                  <label htmlFor="doctor" className="block font-semibold mb-1">Doctor *</label>
                  <select
                    id="doctor"
                    {...register('doctor', { required: true })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="Dr. Fouad.">Dr. Fouad.</option>
                    <option value="Dr. Khalid Abbed">Dr. Khalid Abbed</option>
                    <option value="Dr. Naresh Trehan">Dr. Naresh Trehan</option>
                    <option value="Dr. Arthur Reese Abright">Dr. Arthur Reese Abright</option>
                    <option value="Dr Corrie">Dr Corrie</option>
                    <option value="Dr. M Anderson">Dr. M Anderson</option>
                    <option value="Dr. Mark">Dr. Mark</option>
                    {/* Add other doctor options here */}
                  </select>
                  {errors.doctor && <span className="text-red-500">Doctor is required</span>}
                </div>
              </div>


              <div className="flex items-center gap-3">
                
              <div className="mb-2 w-1/2">
                <label htmlFor="email" className="block font-semibold mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register('email', { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="mb-2 w-1/2">
                <label htmlFor="number" className="block font-semibold mb-1">Number *</label>
                <input
                  type="number"
                  id="number"
                  placeholder="Enter your phone number"
                  {...register('number', { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                {errors.number && <span className="text-red-500">Number is required</span>}
              </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="mb-2 w-1/2">
                  <label htmlFor="date" className="block font-semibold mb-1">Date *</label>
                  <input
                    type="date"
                    id="date"
                    {...register('date', { required: true })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  {errors.date && <span className="text-red-500">Date is required</span>}
                </div>
                <div className="mb-2 w-1/2">
                  <label htmlFor="time" className="block font-semibold mb-1">Time *</label>
                  <input
                    type="time"
                    id="time"
                    {...register('time', { required: true })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  {errors.time && <span className="text-red-500">Time is required</span>}
                </div>
              </div>
              <div className="mb-1">
                <label htmlFor="comments" className="block font-semibold mb-1">Comments</label>
                <textarea
                  id="comments"
                  {...register('comments')}
                  placeholder="Type your massages...."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              {/* Other form fields */}
              <button type="submit" className="bg-blue-500 w-full  text-white px-4 py-2 rounded-md hover:bg-blue-600">Book An Appointment</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BookAppointment;