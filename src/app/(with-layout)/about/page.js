/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "About | Next Project",
  description: "Generated by create next app",
};


const AboutPage = () => {
    return (
      <div className="w-10/12 mx-auto my-16">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold">About Doctris</h1>
          <h1 className="border-2 w-14 mx-auto border-purple-700"></h1>
          <p className="w-9/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
            risus nec dui venenatis dignissim. Aenean vitae metus in augue
            pretium ultrices. Duis dictum eget dolor vel blandit.
          </p>
        </div>

        <div className="mt-12">
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta
            luctus est interdum pretium. Fusce id tortor fringilla, suscipit
            turpis ac, varius ex. Cras vel metus ligula. Nam enim ligula,
            bibendum a iaculis ut, cursus id augue. Proin vitae purus id tortor
            vehicula scelerisque non in libero.
          </p>
          <p className="mb-5">
            Nulla non turpis sit amet purus pharetra sollicitudin. Proin rutrum
            urna ut suscipit ullamcorper. Proin sapien felis, dignissim non
            finibus eget, luctus vel purus. Pellentesque efficitur congue orci
            ornare accumsan. Nullam ultrices libero vel imperdiet scelerisque.
            Donec vel mauris eros.
          </p>

          <div className="my-5">
            <img
              className="w-full h-[500px] rounded-md"
              src="https://img.freepik.com/free-photo/doctor-leading-medical-team-hospital_1098-493.jpg?w=740&t=st=1709042874~exp=1709043474~hmac=d2b3493eb61d5c3254943893d98c67d936e37cd175cde41129f9ff759fa7d446"
              alt=""
            />
          </div>

          <div className="flex justify-between gap-3 py-12 px-3 bg-gray-100 rounded-md">
            <div classname="space-y-4">
              <h1 className="text-xl font-bold">Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                porta luctus est interdum pretium. Fusce id tortor fringilla.
              </p>
            </div>
            <div classname="space-y-4">
              <h1 className="text-xl font-bold">Our Vission</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                porta luctus est interdum pretium. Fusce id tortor fringilla.
              </p>
            </div>
            <div classname="space-y-4">
              <h1 className="text-xl font-bold">Our Plan</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                porta luctus est interdum pretium. Fusce id tortor fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutPage;