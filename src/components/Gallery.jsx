
const Gallery = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:pt-14 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                Gallery of Our Clinic
              </h2>
              <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
               Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo non habent claritatem insitamconsequat duis autem facilisis at vero eros
              </p>
            </div>
            <a
              href="#"
              className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              More
            </a>
          </div>
        </div>
      </div>

      {/* gallery-section-1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-11/12 mx-auto gap-4 p-4">
        <div className="group cursor-pointer relative" data-aos="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/empty-doctors-workplace-room-with-desk-technology_482257-14017.jpg?w=740&t=st=1709098753~exp=1709099353~hmac=d3bf8f368a43f6a54bc1ef55120fb56d3905d94808ee9f84577130308204b52f"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative" data-aos="zoom-in-up">
          <img
            src="https://img.freepik.com/free-photo/no-people-empty-waiting-area-clinical-center-with-reception-desk-waiting-room-with-seats-start-checkup-visit-appointment-medical-examination-with-doctor-hospital-lobby_482257-46239.jpg?w=826&t=st=1709098755~exp=1709099355~hmac=8d1fc55aa0b6b00286095a553d7d55123dfa57f83a92d6a3d7612fe31dce7ed8"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative" data-aos="zoom-in-down">
          <img
            src="https://img.freepik.com/free-photo/team-doctors-meeting_107420-84791.jpg?w=740&t=st=1709098757~exp=1709099357~hmac=b706e23284d9bf9699451693c30b96e3665b49b072a77cec800780a0a64cc934"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative" data-aos="zoom-out">
          <img
            src="https://img.freepik.com/free-photo/hospital-reception-desk-with-computer-making-healthcare-appointments-patients-with-disease-registration-work-with-medical-checkup-reports-papers-forms-facility-lobby_482257-50665.jpg?w=740&t=st=1709098759~exp=1709099359~hmac=509edf2d1037cdb863144eb931a4ed9250580ce6b71a24d9376e5322880647d4"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative" data-aos="zoom-out-up">
          <img
            src="https://img.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84786.jpg?w=740&t=st=1709098761~exp=1709099361~hmac=39b37a8bd0e0b11e9d0a7761aa7b66e1adfc4e371e488608bc5dc74006dddc76"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative" data-aos="zoom-out-down">
          <img
            src="https://img.freepik.com/free-photo/group-doctors-discussing-with-expert-medic-during-video-conference-from-hospital-office-medicine-staff-using-internet-during-online-meeting-with-expert-doctor-expertise-nurse-taking-notes_482257-5957.jpg?w=826&t=st=1709098763~exp=1709099363~hmac=e9b8c32c716647cac80e9b0c4eb901545da39304c06f6c2d15f7e2c11865be7c"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div className="group cursor-pointer relative"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            src="https://img.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84783.jpg?w=740&t=st=1709098771~exp=1709099371~hmac=781337a187deae1ff844eef081bb7d78f9b0fac11f5d5f71d8f0c6519a124c49"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div
          className="group cursor-pointer relative"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src="https://img.freepik.com/free-photo/no-people-empty-hospital-reception-waiting-room-medical-facility-with-healthcare-service-cure-patients-with-disease-nobody-clinic-lobby-waiting-area-during-covid-19-pandemic_482257-46054.jpg?w=740&t=st=1709098774~exp=1709099374~hmac=0ed065d866a7b4c70eaa591007f54e89b93340d11e7b7eee67e0d74d43449a55"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div
          className="group cursor-pointer relative"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <img
            src="https://img.freepik.com/free-photo/client-apothecary-checkout_482257-75584.jpg?w=826&t=st=1709098776~exp=1709099376~hmac=d8bc963d60756fb8e5f5a094f93f7208445d22f566c3d4889c911ee36bc4fd2b"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div
          className="group cursor-pointer relative"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="https://img.freepik.com/free-photo/doctor-showing-x-ray-scan-senior-woman-laying-hospital-bed-medic-explaining-radiography-retired-patient-with-illness-diagnosis-treatment-sick-old-adult-with-health-issues_482257-42635.jpg?w=826&t=st=1709098979~exp=1709099579~hmac=c4826d0992fa558bd721dfbc9dad0246f5715711049b282af63a2e07f6f49aad"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div
          className="group cursor-pointer relative"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img
            src="https://img.freepik.com/free-photo/african-american-nurse-patient-doing-checkup-visit-waiting-room-lobby-wearing-cervical-neck-collar-after-accident-injury-medical-assistant-consulting-injured-woman-healthcare-facility_482257-51634.jpg?w=740&t=st=1709098988~exp=1709099588~hmac=65011288642ffdf46ee1382f97e38bee2c6b60cfc9b697ef01d35ee92d80c316"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        <div
          className="group cursor-pointer relative"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <img
            src="https://img.freepik.com/free-photo/patients-with-protection-mask-waiting-stomatology-reception-with-new-normal-staff-wearing-ppe-suit_482257-4811.jpg?w=740&t=st=1709099016~exp=1709099616~hmac=eec94dfbd9257f8be987cc298ed82a69bb7cad0a01c81abcb6c5410fb1bfe24b"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
        {/* Repeat this div for each image */}
      </div>
      {/* gallery-section-2 */}
      {/* <>
        <div className="p-5 sm:p-8">
          <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <img
              src="https://source.unsplash.com/bYuI23mnmDQ"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            />
            <img
              src="https://source.unsplash.com/Nllx4R-2c3o"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            />
            <img
              src="https://source.unsplash.com/lp40q07DIe0"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            />
            <img
              src="https://source.unsplash.com/wfalq01jJuU"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <img
              src="https://source.unsplash.com/rMHNK_skwwU"
              data-aos="zoom-in-up"
            />
            <img
              src="https://source.unsplash.com/WBMjuGpbrCQ"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
            />
            <img
              src="https://source.unsplash.com/nCUZ5BYBL_o"
              data-aos="zoom-in-down"
            />
            <img
              src="https://source.unsplash.com/3u4fzMQZhjc"
              data-aos="zoom-out"
            />
            <img
              src="https://source.unsplash.com/haOIqIPSwps"
              data-aos="zoom-in-up"
            />
            <img
              src="https://source.unsplash.com/3UrYD7NNVxk"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <img
              src="https://source.unsplash.com/fm1JKDItlVM"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
            />
            <img
              src="https://source.unsplash.com/qPpq1EVs8vw"
              data-aos="zoom-in-up"
            />
            <img
              src="https://source.unsplash.com/xRyL63AwZFE"
              data-aos="zoom-out"
            />
            <img
              src="https://source.unsplash.com/XeNKWTiCPNw"
              data-aos="zoom-in-up"
            />
            <img
              src="https://source.unsplash.com/DFt3T5r_4FE"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <img
              src="https://source.unsplash.com/Ebwp2-6BG8E"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            />
          </div>
        </div>
        
      </> */}
    </div>
  );
};

export default Gallery;