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
    <div className="mt-[200px] text-white ">
      <div className="bg-[#484F8E] h-full w-10/12 mx-auto rounded-[50px] py-[110px]">
        <h1 className="text-[50px] text-center font-bold uppercase">Process</h1>
        <div className="flex justify-center items-center gap-x-[132px] mt-[38px]">
          <div className="flex flex-col items-center">
            <div className="w-[40px]">
              <Image src={ReportImage} alt="Report Image" />
            </div>
            <p className="mt-[20px]">Saving Reports</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[40px]">
              <Image src={ProcessImage} alt="Report Image" />
            </div>
            <p className="mt-[20px]">Approval Process</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[40px]">
              <Image src={DocumentsImage} alt="Report Image" />
            </div>
            <p className="mt-[20px]">Documents</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[40px]">
              <Image src={SurveyImage} alt="Report Image" />
            </div>
            <p className="mt-[20px]">AI Site Survey</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[40px]">
              <Image src={PermitImage} alt="Report Image" />
            </div>
            <p className="mt-[20px]">CAD/Permit</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[40px]">
              <Image src={InstallationImage} alt="Report Image" />
            </div>
            <p className="mt-[20px]">Installation</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[70px]">
              <Image src={SystemImage} alt="Report Image" />
            </div>
            <p className="mt-[20px]">System Activation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
