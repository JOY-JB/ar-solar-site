import Image from "next/image";
import Link from "next/link";
import BannerImage from "../../../../public/assets/images/bannerImage.png";
import home from "../../../../public/assets/images/navbar/HOME ICON.svg";
import facts from "../../../../public/assets/images/navbar/RECEIPT ICON.svg";
import aboutUs from "../../../../public/assets/images/navbar/REVIEW ICON.svg";
import equipments from "../../../../public/assets/images/navbar/SOLAR ICON.svg";
const Banner = () => {
  return (
    <main
      className="bg-cover bg-center min-w-screen h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundSize: "fill",
      }}
    >
      <div className="hidden md:flex justify-center items-center gap-x-[34px] mt-[80px] ml-[162px] absolute top-0 left-0 text-white  bg-[#999999]/70 rounded-[20px] py-[21px] px-[51px] ">
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
      <div className="w-fit h-screen text-white mb-[36px] flex flex-col justify-evenly md:justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          YOUR TRUSTED SOLAR PANEL PROVIDER
        </h1>
        <div className="hidden md:block">
          <p className="text-center mt-2">
            MILLIONS OF PEOPLE SHIFTING TO SOLAR ENERGY, REPLACING THE
          </p>
          <p className="text-center">WIRED SOURCE</p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-12 mt-[36px]">
          <input
            type="text"
            className="w-96 h-[67px] inline rounded-[10px] text-center"
            placeholder="Type Your Home Address"
          />
          <Link href="/quote-form">
            <button className="w-96 md:w-48 h-[67px] bg-[#484F8E]/70 font-bold  rounded-[10px]">
              Get Quote
            </button>
          </Link>
        </div>

        <div className="block md:hidden text-sm">
          <p className="text-center mt-2">
            MILLIONS OF PEOPLE SHIFTING TO SOLAR ENERGY, REPLACING THE WIRED
            SOURCE
          </p>
        </div>
      </div>
    </main>
  );
};

export default Banner;
