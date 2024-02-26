import React from "react";
import ReportImage from "../../../../public/assets/images/process/reports.png";
import ProcessImage from "../../../../public/assets/images/process/process.png";
import DocumentsImage from "../../../../public/assets/images/process/documents.png";
import SurveyImage from "../../../../public/assets/images/process/survey.png";
import PermitImage from "../../../../public/assets/images/process/compass.png";
import InstallationImage from "../../../../public/assets/images/uniqueSection/Box.png";
import SystemImage from "../../../../public/assets/images/process/system.png";
import Image from "next/image";
const Process = () => {
  return (
    <div className="bg-gradient-to-br from-[#1B2025] from-20% to-[#08090B] text-white ">
      <div className="bg-[#484F8E] h-full w-10/12 mx-auto rounded-[50px] py-[110px]">
        <h1 className="text-[50px] text-center font-bold uppercase">Process</h1>
        <div className="flex justify-center items-center gap-x-[132px] mt-[38px]">
          <div className="flex flex-col items-center">
            <Image
              src={ReportImage}
              alt="Report Image"
              className="size-[40px]"
            />
            <p className="mt-[20px]">Lorem, ipsum.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={ProcessImage}
              alt="Report Image"
              className="size-[40px]"
            />
            <p className="mt-[20px]">Lorem, ipsum.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={DocumentsImage}
              alt="Report Image"
              className="size-[40px]"
            />
            <p className="mt-[20px]">Lorem, ipsum.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={SurveyImage}
              alt="Report Image"
              className="size-[40px]"
            />
            <p className="mt-[20px]">Lorem, ipsum.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={PermitImage}
              alt="Report Image"
              className="size-[40px]"
            />
            <p className="mt-[20px]">Lorem, ipsum.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={InstallationImage}
              alt="Report Image"
              className="size-[40px]"
            />
            <p className="mt-[20px]">Lorem, ipsum.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={SystemImage} alt="Report Image" className="w-[70px]" />
            <p className="mt-[20px]">Lorem, ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
