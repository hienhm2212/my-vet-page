"use client";
import React, { useState } from "react";
import SurgeryPic from "../../public/images/services/surgery-room.png";
import SurgeryRedPic from "../../public/images/services/surgery-room-red.png";
import VaccinePic from "../../public/images/services/vaccine.png";
import VaccineRedPic from "../../public/images/services/vaccine-red.png";
import SkinTreatmenPic from "../../public/images/services/dermathology.png";
import SkinTreatmenRedPic from "../../public/images/services/dermathology-red.png";
import RadiologyPic from "../../public/images/services/stethoscope.png";
import RadiologyRedPic from "../../public/images/services/stethoscope-red.png";

const Service = () => {
  const [isShown, setIsShown] = useState(false);
  const onMouseOver = () => setIsShown(true);
  const onMouseLeave = () => setIsShown(false);
  return (
    <section className="text-gray-700 body-font mt-10">
      <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
        Dịch vụ
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                {isShown ? (
                  <img src={SurgeryRedPic.src} className="w-32 mb-3" />
                ) : (
                  <img src={SurgeryPic.src} className="w-32 mb-3" />
                )}
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Phẫu thuật
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center"  onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
                {isShown ? (
                  <img src={VaccineRedPic.src} className="w-32 mb-3" />
                ) : (
                  <img src={VaccinePic.src} className="w-32 mb-3" />
                )}
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Tiêm ngừa
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src={SkinTreatmenPic.src} className="w-32 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Điều trị da liễu
              </h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <img src={RadiologyPic.src} className="w-32 mb-3" />
              </div>
              <h2 className="title-font font-regular text-2xl text-gray-900">
                Khám bệnh
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
