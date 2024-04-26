const Footer = () => {
  return (
    <div className="text-sm md:text-lg bg-[#8DA1B6]/80 text-white flex px-8 md:px-[200px] justify-between py-2 items-center ">
      <p className="">
        SolarCo<sup>TM</sup> 2024
      </p>
      <div className="flex gap-x-4 md:gap-x-[30px]">
        <span className="font-semibold underline">About us</span>
        <span className="font-semibold underline">Terms and Policies</span>
      </div>
    </div>
  );
};

export default Footer;
