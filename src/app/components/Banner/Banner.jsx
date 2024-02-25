import Image from "next/image";
import BannerImage from "../../../../public/assets/images/bannerImage.png";
import home from "../../../../public/assets/images/navbar/HOME ICON.svg";
import equipments from "../../../../public/assets/images/navbar/SOLAR ICON.svg";
import facts from "../../../../public/assets/images/navbar/RECEIPT ICON.svg";
import aboutUs from "../../../../public/assets/images/navbar/REVIEW ICON.svg";
const Banner = () => {
  return (
    <main
      className="bg-cover bg-center min-w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center gap-x-[34px] mt-[80px] ml-[162px] absolute top-0 left-0 text-white  bg-[#999999]/70 rounded-[20px] py-[21px] px-[51px]">
        <div className="">
          <Image
            width={40}
            src={home}
            alt="home"
            className="mx-auto mb-[23px]"
          />
          <p className="uppercase text-xs block">AREA COVERAGE</p>
        </div>
        <div className="">
          <Image
            width={40}
            src={equipments}
            alt="equipments"
            className="mx-auto mb-[23px]"
          />
          <p className="uppercase text-xs block">EQUIPMENTS</p>
        </div>
        <div className="">
          <Image
            width={40}
            src={facts}
            alt="facts"
            className="mx-auto mb-[23px]"
          />
          <p className="uppercase text-xs block">FACTS</p>
        </div>
        <div className="">
          <Image
            width={40}
            src={aboutUs}
            alt="aboutUs"
            className="mx-auto mb-[23px]"
          />
          <p className="uppercase text-xs block">ABOUT US</p>
        </div>
      </div>
      <div className="w-fit h-96 text-white mb-[36px] flex flex-col justify-center items-center">
        <h1 className="text-[50px] font-bold ">
          YOUR TRUSTED SOLAR PANEL PROVIDER
        </h1>
        <p className="text-[20px] text-center">
          MILLIONS OF PEOPLE SHIFTING TO SOLAR ENERGY, REPLACING THE
        </p>
        <p className="text-[20px] text-center">WIRED SOURCE</p>
        <div className="w-full flex justify-center items-center space-x-[53px] mt-[36px]">
          <input
            type="text"
            className="w-[482px] h-[67px] inline rounded-[10px]  text-center"
            placeholder="Type Your Home Address"
          />
          <button className="w-[204px] h-[67px] bg-[#484F8E]/70 font-bold  rounded-[10px]">
            Get Quote
          </button>
        </div>
      </div>
    </main>
  );
};

export default Banner;
