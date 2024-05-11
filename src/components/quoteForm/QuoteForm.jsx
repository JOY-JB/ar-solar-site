"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GooglePlacesComponent from "./GooglePlacesComponent";

const QuoteForm = () => {
  const [data, setData] = useState({ name: "", email: "", bill: "" });
  const router = useRouter();

  const handleGetQuote = (e) => {
    e.preventDefault();

    if (data.name === "" || data.email === "" || data.bill === "") {
      alert("Please fill all the fields");
      return;
    } else if (parseInt(data.bill) < 1) {
      alert("Please enter a valid bill amount");
      return;
    }

    localStorage.setItem("quoteData", JSON.stringify(data));

    router.push("/quote");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-10 rounded-xl mx-[6] md:mx-[134px]">
      {/* <h2 className="text-lg md:text-[30px] font-bold text-center md:text-left mb-8">
        PROPERTY AND UTILITY BILL
      </h2> */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[117px] md:gap-y-[0] ">
        <div className="flex flex-col  gap-y-[20px]">
          {/* <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-full mt-[10px] pl-[10px] border border-[#BBC1FF]/25"
              name="name"
              onChange={handleChange}
            />
          </div> */}
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-full mt-[10px] pl-[10px] border border-[#BBC1FF]/25"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="bill">Electricity Bill</label>
            <input
              type="number"
              className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-full mt-[10px] pl-[10px] border border-[#BBC1FF]/25"
              name="bill"
              onChange={handleChange}
            />
          </div>

          <button
            className="bg-[#484F8E]/50 w-full py-[27px] mt-[78px] rounded-[10px]"
            onClick={handleGetQuote}
          >
            Get Quote
          </button>
        </div>
        <div className="md:pl-[20px]">
          {/* <div>
              <input
                placeholder="Home Address"
                type="text"
                className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-full mt-[10px] pl-[10px] border border-[#BBC1FF]/25 placeholder-white/50 text-center"
              />
            </div> */}
          <div className="mt-[20px] w-full rounded-[10px] overflow-hidden">
            {/* <Image
                src="/assets/images/roofImage.jpg"
                width={500}
                height={500}
                alt="map"
                className="w-full"
              /> */}
            <GooglePlacesComponent />
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
