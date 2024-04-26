import Image from "next/image";
import PermitImage from "../../../../public/assets/images/process/compass.png";
import DocumentsImage from "../../../../public/assets/images/process/documents.png";
import ProcessImage from "../../../../public/assets/images/process/process.png";
import ReportImage from "../../../../public/assets/images/process/reports.png";
import SurveyImage from "../../../../public/assets/images/process/survey.png";
import SystemImage from "../../../../public/assets/images/process/system.png";
import InstallationImage from "../../../../public/assets/images/uniqueSection/Box.png";
const Process = () => {
  return (
    <div className="mt-[200px] text-white ">
      <div className="bg-[#484F8E] h-full md:w-10/12 mx-auto rounded-[50px] py-8 md:py-[110px]">
        <h1 className="text-xl md:text-5xl text-center font-bold uppercase mb-14">
          Process
        </h1>
        <div className="flex justify-center items-center gap-4 md:gap-x-[132px] flex-wrap mt-[38px]">
          <div className="flex flex-col items-center">
            <div className="w-5 md:w-[40px]">
              <Image src={ReportImage} alt="Report Image" />
            </div>
            <p className="mt-[20px] text-xs">Saving Reports</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 md:w-[40px]">
              <Image src={ProcessImage} alt="Report Image" />
            </div>
            <p className="mt-[20px] text-xs">Approval Process</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 md:w-[40px]">
              <Image src={DocumentsImage} alt="Report Image" />
            </div>
            <p className="mt-[20px] text-xs">Documents</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 md:w-[40px]">
              <Image src={SurveyImage} alt="Report Image" />
            </div>
            <p className="mt-[20px] text-xs">AI Site Survey</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 md:w-[40px]">
              <Image src={PermitImage} alt="Report Image" />
            </div>
            <p className="mt-[20px] text-xs">CAD/Permit</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 md:w-[40px]">
              <Image src={InstallationImage} alt="Report Image" />
            </div>
            <p className="mt-[20px] text-xs">Installation</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-5 md:w-[40px]">
              <Image src={SystemImage} alt="Report Image" />
            </div>
            <p className="mt-[20px] text-xs">System Activation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
