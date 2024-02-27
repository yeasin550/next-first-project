/* eslint-disable @next/next/no-img-element */
const Banner = () => {
  return (
    <div
      className="p-8 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/stethoscope-copy-space_23-2147652347.jpg?w=740&t=st=1708791189~exp=1708791789~hmac=ab6a99dfd03edd7caf13c393fcd3b1e7e2ce642cb77ab58d3469bf25b4ef4c96')`,
        height: "500px", // Adjust height as needed
      }}
    >
      <div className="w-[530px] mt-16 space lg:ml-12 space-y-5 ">
        <h1 className="text-5xl font-semibold">Find Your Best Doctor</h1>
        <p>
          Great doctor if you need your family member to get immediate
          assistance, emergency treatment or a simple consultation.
        </p>
        <input
          type="text"
          placeholder="Doctor name typing..."
          className="w-72 p-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
        />
        <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Submit
        </button>
        {/* <br /> */}
        {/* <button className="px-4 py-2 ml-3  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Consult
        </button> */}
        <p>
          {" "}
          <b>Note:</b> Please search best doctors here,
        </p>
      </div>
    </div>
  );
};

export default Banner;
