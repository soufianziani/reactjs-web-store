import React from "react";

const Contact = () => {
  return (
    <>
<h2 className="text-5xl font-bold text-[#A47249] text-center mt-20">Contact </h2>
    <div className="flex items-center justify-center p-12">
      <div className="flex flex-row">
        <div className="w-1/2 pr-4">
          <img
            src="https://images.unsplash.com/photo-1534432182912-63863115e106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="Side Image"
            className="max-w-full h-auto"
          />
        </div>
        <div className="">
          <div className="mx-auto w-full max-w-[550px]">
            <form action="https://formsubmit.co/bouthainahammia4@gmail.com" method="POST">
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="Full-Name"
                      id="fName"
                      placeholder="full Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="Email"
                      id="lName"
                      placeholder="your email"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Comment pouvons-nous aider ?
                </label>
                <input
                  required
                  type="text"
                  name="Comment-pouvons-nous-aider"
                  id="guest"
                  placeholder="Message"
                  min="0"
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      required
                      type="date"
                      name="Date"
                      id="date"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time
                    </label>
                    <input
                      required
                      type="time"
                      name="Time"
                      id="time"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                  How many guest are you bringing?
                </label>
                <input
                  required
                  type="number"
                  name="How-many-guest-are-you-bringing"
                  id="guest"
                  placeholder="xxx-xxx-xxx x"
                  min="0"
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Do you want delivery service?
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input
                      required
                      type="radio"
                      name="Do-you-want-delivery-service"
                      id="radioButton1"
                      className="h-5 w-5"
                    />
                    <label
                      htmlFor="radioButton1"
                      className="pl-3 text-base font-medium text-[#07074D]"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      required
                      type="radio"
                      name="Do-you-want-delivery-service"
                      id="radioButton2"
                      className="h-5 w-5"
                    />
                    <label
                      htmlFor="radioButton2"
                      className="pl-3 text-base font-medium text-[#07074D]"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
    
              <div>
                <button
                  className="hover:shadow-form rounded-md bg-[#B64E18] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
    );
    };
    
    export default Contact;