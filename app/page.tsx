import { Footer, Navbar, SlideHome } from "@/components";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <Navbar />
      <SlideHome />

      <section className="relative flex items-center w-full py-20">
        <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                      Simp Games Studio
                    </h2>
                    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                      Simp Games studio is a leading mobile gaming company
                      founded in 2023. Our objective is to combine technology
                      and creativity to develop high-quality mobile games At
                      Simp Games, all team members have a genuine chance to
                      contribute to the final product and have an impact on the
                      company.
                    </p>
                  </div>
                  <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                    <a
                      className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                      href="#"
                    >
                      <span> Read more &nbsp; → </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                <img
                  className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                  alt="hero"
                  src="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  py-20 px-4 lg:px-16">
        <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
          <h2 className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl text-center">
            Featured Games
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-10  mt-20">
   
              <div className="bg-white  border rounded-3xl p-4">
                <div className="flex-none lg:flex">
                  <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img
                      src="https://play-lh.googleusercontent.com/yl4fw9hUTNAtIBt0c3kEsWPSh_T-M0YTvW6bzAhNrkfcXQKNHG3JygVi3kffMdYGIOJW=w240-h480-rw"
                      alt="Just a flower"
                      className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap ">
                      <h2 className="flex-auto text-xl font-medium">
                      Unicorn Donut: Drop & Merge
                      </h2>
                    </div>
                    <p className="mt-3" />
                    <div className="flex py-4  text-sm text-gray-500">
                      <div className="w-1/3 flex">
                        <StarIcon className="w-4 h-4 mr-1" />
                        <p className="">4 rating</p>
                      </div>
                      <div className="w-1/3">
                    
                        <p className="">100k reviews</p>
                      </div>
                      <div className="w-1/3">
                    
                        <p className="">1M+ download</p>
                      </div>
                     
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200 " />
                    <div className="flex space-x-3 text-sm font-medium h-16">
                    <button className="w-1/2 hover:bg-gray-100 flex justify-center items-center rounded-md">
                        <svg
                          className="me-3 w-7 h-7"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="google-play"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                          ></path>
                        </svg>
                        Google Play
                      </button>
                      <div className="bg-gray-100 w-[1px]" />
                      <button className="w-1/2 hover:bg-gray-100 flex justify-center items-center rounded-md">
                        <svg
                          className="me-3 w-7 h-7"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="apple"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                          ></path>
                        </svg>
                        App Store
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white  border rounded-3xl p-4">
                <div className="flex-none lg:flex">
                  <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img
                      src="https://play-lh.googleusercontent.com/cwEbcJm5y8UePoqWrYe9LBUvLB2SA0VQ3p7X4vIk4Kb3hYHtyA7KB2Wcr0QWW5Eh0sTn=w240-h480-rw"
                      alt="Just a flower"
                      className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto ml-3 justify-evenly py-2">
                    <div className="flex flex-wrap ">
                      <h2 className="flex-auto text-xl font-medium">
                      Watermelon Balloons Merge
                      </h2>
                    </div>
                    <p className="mt-3" />
                    <div className="flex py-4  text-sm text-gray-500">
                      <div className="w-1/3 flex">
                        <StarIcon className="w-4 h-4 mr-1" />
                        <p className="">4 rating</p>
                      </div>
                      <div className="w-1/3">
                    
                        <p className="">100k reviews</p>
                      </div>
                      <div className="w-1/3">
                    
                        <p className="">1M+ download</p>
                      </div>
                     
                    </div>
                    <div className="flex p-4 pb-2 border-t border-gray-200 " />
                    <div className="flex space-x-3 text-sm font-medium h-16">
                      <button className="w-1/2 hover:bg-gray-100 flex justify-center items-center rounded-md">
                        <svg
                          className="me-3 w-7 h-7"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="google-play"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                          ></path>
                        </svg>
                        Google Play
                      </button>
                      <div className="bg-gray-100 w-[1px]" />
                      <button className="w-1/2 hover:bg-gray-100 flex justify-center items-center rounded-md">
                        <svg
                          className="me-3 w-7 h-7"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="apple"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                          ></path>
                        </svg>
                        App Store
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
