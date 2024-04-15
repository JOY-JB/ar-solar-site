const Footer = () => {
  return (
    <div className="bg-[#8DA1B6]/80 text-white flex px-8 md:px-[200px] justify-between py-2 md:h-[96px] items-center ">
      <p className="text-sm md:text-[20px]">
        SolarCo<sup>TM</sup> 2024
      </p>
      <div className="flex gap-x-4 md:gap-x-[30px]">
        <span className="text-sm md:text-[20px] font-bold underline">
          About us
        </span>
        <span className="text-sm md:text-[20px] font-bold underline">
          Terms and Policies
        </span>
      </div>
    </div>
  );
};

export default Footer;
