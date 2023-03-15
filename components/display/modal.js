import { useState } from "react";
import Form from "./form";
import Button from "@ui/button";
import { Icon } from "@iconify/react";
import ButtonOutline from "@ui/button-outline";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ButtonOutline type="button" onClick={() => setShowModal(true)}>
        Book Appointment
      </ButtonOutline>
      {/* <button
        className="px-8 py-4 bg-white text-blue-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Book Appointment
      </button> */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Book an appointment
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <Icon icon="ph:x" className="w-10 h-10" />
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-md"></div>
        </>
      ) : null}
    </>
  );
}
