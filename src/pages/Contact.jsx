import { useState, useRef } from "react";
import Transition from "../components/Transition";
import arrow from "../assets/arrow.svg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef(null);
  const [buttonText, setButtonText] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const notify = () => {
      toast("Message Sent Successfully!");
    };

    emailjs
      .sendForm("service_1two0cb", "template_5038wr9", form.current, {
        publicKey: "bzOHxgPOnVF44jTPC",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("SUCCESS!");
          setButtonText("Send Message");
          e.target.reset();
          notify();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setButtonText("Send Message");
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="pt-1 pb-20">
        <h1 className="mt-32 p-2 text-center text-[25px] md:text-[35px] text-white opacity-80 font-semibold font-onest border border-[#f0a800] bg-[#f0a800] rounded-tl-2xl mx-auto rounded-br-2xl w-fit">
          Contact
        </h1>

        <h1 className="bg-gradient-to-br from-slate-100 to-slate-300 py-4 bg-clip-text text-center text-2xl font-bold font-Asul tracking-tight text-transparent md:text-3xl">
          Reach out to us
        </h1>

        <div className="w-full rounded-[16px] flex flex-col lg:flex-row">
          <div className="w-full pt-12 mt-10 px-3 bg-[#f0a800]/30 backdrop-blur-md pb-10">
            <div className="p-6 -rotate-12 bg-[#f0a800]/30 backdrop-blur-md absolute z-10 top-[13rem] md:top-[7rem] left-4 md:left-[7rem]" />
            <div className="p-6 rotate-6 bg-[#f0a800]/30 backdrop-blur-md absolute top-[30rem] left-10" />
            <div className="p-6 bg-[#f0a800]/30 top-[27rem] md:top-[30rem] right-10 md:right-20 absolute -rotate-12" />
            <div className="p-6 bg-[#f0a800]/30 top-[5rem] md:top-[10rem] right-5 md:right-48 absolute rotate-12" />
            <div className="mt-10">
              <p className="text-[15px] md:text-[17px] text-white opacity-80 font-semibold font-onest">
                +2349019947067
              </p>
            </div>

            <div className="mt-8">
              <p className="text-[15px] md:text-[17px] text-white opacity-80 font-semibold font-onest">
                info@edufactconsults.com
              </p>
              <p className="text-[15px] md:text-[17px] text-white opacity-80 font-semibold font-onest">
                admissions@edufactconsults.com
              </p>
            </div>
            <div className="mt-8">
              <p className="text-[15px] md:text-[17px] text-white opacity-80 font-semibold font-onest">
                7, Ikorodu road, <br /> Maryland behind BRT bus stop, <br />{" "}
                Maryland, Lagos state
              </p>
            </div>

            <p className="pt-10 text-[15px] md:text-[17px] text-white opacity-80 font-semibold font-onest">
              We would love to hear from you! If you have any questions,
              inquiries, or simply want to get in touch, feel free to contact
              us. Our team is ready to assist you and provide the information
              you need. Don't hesitate to reach out and connect with us today!
            </p>
          </div>

          <div className="p-[10px] pb-10 md:p-[50px] w-full pt-12 md:mt-10 px-3 bg-pink-800/90 backdrop-blur-md">
            <p className="text-[15px] md:text-[17px] text-white opacity-80 font-semibold font-onest">
              Hello, we would love to hear from you.
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col mt-10 gap-6 z-[9999]"
            >
              <div className="flex flex-col md:flex-row gap-5 w-full">
                <input
                  type="text"
                  className="text-white bg-transparent text-[16px] leading-[26px] font-[400] border w-full rounded-[5px] p-3 pl-[20px] outline-none"
                  name="first_name"
                  placeholder="First Name*"
                  required
                />
                <input
                  type="text"
                  className="text-white bg-transparent text-[16px] leading-[26px] font-[400] border w-full rounded-[5px] p-3 pl-[20px] outline-none"
                  name="last_name"
                  placeholder="Last Name*"
                  required
                />
              </div>

              <input
                type="text"
                className="text-white bg-transparent text-[16px] leading-[26px] font-[400] border rounded-[5px] p-3 pl-[20px] outline-none"
                name="email"
                placeholder="Email*"
                required
              />

              <input
                type="number"
                className="text-white bg-transparent text-[16px] leading-[26px] font-[400] border rounded-[5px] p-3 pl-[20px] outline-none"
                name="phone"
                placeholder="Phone Number*"
                required
              />

              <textarea
                name="message"
                className="text-white bg-transparent text-[16px] leading-[26px] font-[400] border rounded-[5px] p-3 pl-[20px] outline-none"
                placeholder="Your message..."
              ></textarea>

              <button
                type="submit"
                className="p-4 px-6 flex gap-3 bg-[#f0a800] rounded-full text-white font-[20px] w-fit hover:bg-transparent hover:text-[#f0a800] border border-[#f0a800] transition-all ease-in-out"
              >
                {buttonText}{" "}
                <img
                  src={arrow}
                  className="w-[20px] pt-[2px] -rotate-45 opacity-80"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transition(Contact);
