/* eslint-disable @next/next/no-img-element */
import { FaStethoscope } from "react-icons/fa";
import { RiMicroscopeLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
// import { FaPhoneAlt } from "react-icons/fa";

const GetInTouch = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message successfully submited",
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="my-20">
            <div className="text-center">
                 <h1 className="text-2xl mb-3 font-bold">Have Question ? Get in touch!</h1>
                 <p className="md:w-6/12 mx-auto">
                    Great doctor if you need your family member to get effective immediate
                    assistance, emergency treatment or a simple consultation. !
                </p>
            <div />
            </div>
            <div className="w-10/12 mx-auto md:flex items-center gap-5">
                {/* 1  div */}
                <div className="md:w-1/2">
                    <div className="mt-8 px-6 py-3 bg-gray-50 border rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                            <div className="mb-2">
                                <label htmlFor="patientName" className="block font-semibold mb-1"></label>
                                <input
                                    type="text"
                                    id="patientName"
                                    placeholder="Enter your name"
                                    {...register('patientName', { required: true })}
                                    className="w-full px-4 py-3 border border-purple-700 rounded-md focus:outline-none focus:border-blue-500"
                                />
                                {errors.patientName && <span className="text-red-500">Patient Name is required</span>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email" className="block font-semibold mb-1"></label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    {...register('email', { required: true })}
                                    className="w-full px-4 py-3 border border-purple-700 rounded-md focus:outline-none focus:border-blue-500"
                                />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="number" className="block font-semibold mb-1"></label>
                                <input
                                    type="number"
                                    id="number"
                                    placeholder="Enter your phone number"
                                    {...register('number', { required: true })}
                                    className="w-full px-4 py-3 border border-purple-700 rounded-md focus:outline-none focus:border-blue-500"
                                />
                                {errors.number && <span className="text-red-500">Number is required</span>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="comments" className="block font-semibold mb-1"></label>
                                <textarea
                                    id="comments"
                                    {...register('comments')}
                                    placeholder="Type your massages...."
                                    className="w-full px-4 pb-12 border border-purple-700 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            {/* Other form fields */}
                            <button type="submit" className="bg-blue-500 w-full  text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Your Mind</button>
                        </form>
                    </div>
                </div>
                {/* 2 div */}
                <div className="md:w-1/2">
                    <img
                        className=""
                        src="https://img.freepik.com/free-vector/young-man-cap-working-his-clean-office-desk_3446-508.jpg?w=740&t=st=1709095498~exp=1709096098~hmac=b02189863d095efc3f97aabafffddeba022540a947fff87adf9886156d5e43b1"
                        alt=""
                    />
                </div>
            </div>
                   
          {/* get the letest update */}
          <div className="w-full mx-auto py-5 sm:px-6">
  <div
    className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:px-12 xl:flex xl:items-center "
    style={{ backgroundColor: "#483786" }}
  >
    <div className="xl:w-0 xl:flex-1">
      <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
        Get the latest updates!
      </h2>
      <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
        Subscribe to our newsletter and stay updated on the latest developments.
      </p>
    </div>
    <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
      <div id="mc_embed_signup">
        <form className="sm:flex">
          <input
            className="required rounded-md w-full px-4 py-2 email"
            id="mce-EMAIL"
            placeholder="Enter your email"
            required=""
            type="email"
            defaultValue=""
            aria-required="true"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              className="w-full flex items-center justify-center px-5 py-3 text-base leading-6
                      font-medium rounded-md text-white bg-indigo-500 focus:ring
                      hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400
                      transition duration-150 ease-in-out"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default GetInTouch;