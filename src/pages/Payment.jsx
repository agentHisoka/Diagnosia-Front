import React, { useRef, useState } from "react";
import paypal from "../assets/PayPal.svg";
import masterCard from "../assets/Mastercard.svg";
import { TbLockSquareRounded } from "react-icons/tb";
import "./payment.css";

function Payment() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  return (
    <div className=" w-full min-h-screen flex flex-col  ">
      <div className=" bg-[#55c1ff] flex justify-center items-center top-0 w-full h-[200px]">
        <div className="w-[50%] flex flex-col justify-center items-start ">
          <h1 className="  font-roboto ss:leading-[70px] leading-[50px] text-[40px] text-[#101750] font-bold">
            Payment
          </h1>
        </div>
      </div>

      <div className=" mt-6 flex justify-center items-center flex-col gap-8 w-full">
        <div className=" w-[50%] flex flex-row justify-start">
          <h1 className=" text-[30px] text-black font-semibold">
            Client Information
          </h1>
        </div>

        <div className=" drop-shadow-2xl flex flex-row gap-10 py-10 px-10 w-[60%] bg-gray-100 grand ">
          <div className=" w-[60%] gap-10 flex flex-col">
            <div className=" drop-shadow-2xl px-4 py-4 flex flex-col gap-6 bg-white box">
              <h1 className=" text-black font-bold">Shipping Method</h1>
              <div className=" border-[1px] border-[#000] py-3 px-4 flex flex-row justify-between">
                <div className=" gap-1 flex flex-row">
                  <input type="radio" />
                  <p className=" text-black font-semibold">2.29$</p>
                </div>
                <div>
                  <p>USPS 1st Class With Tracking(5 - 13 days)</p>
                </div>
                <div>
                  <img className="h-10 w-10" src={paypal} alt="" />
                </div>
              </div>
              <div className=" border-[1px] border-[#000] py-3 px-4 flex flex-row justify-between">
                <div className=" gap-1 flex flex-row">
                  <input type="radio" />
                  <p className=" text-black font-semibold">2.29$</p>
                </div>
                <div>
                  <p>USPS 1st Class With Tracking(5 - 13 days)</p>
                </div>
                <div>
                  <img className="h-10 w-10" src={paypal} alt="" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-2xl box">
              <h1 className="text-2xl font-semibold text-black mb-4">
                Payment Method
              </h1>

              <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    className="form-radio text-[#1660CF] h-5 w-5"
                  />
                  <p className="text-lg text-black font-semibold">Paypal </p>
                </div>
                <p className="text-sm text-gray-600">
                  You will be redirected to the PayPal website after submitting
                  your order
                </p>
                <img className="h-10 w-10" src={paypal} alt="PayPal" />
              </div>

              <div className="border border-gray-300 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2 items-center">
                    <input
                      type="radio"
                      className="form-radio text-[#1660CF] h-5 w-5"
                    />
                    <p className="text-lg text-black font-semibold">
                      Pay with credit card
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    <img
                      src={masterCard}
                      alt="MasterCard"
                      className="h-10 w-10"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="w-[45%]">
                    <label
                      className="text-gray-400 text-sm"
                      htmlFor="cardNumber"
                    >
                      Card number
                    </label>
                    <input
                      id="cardNumber"
                      className="rounded-lg border border-opacity-70 border-[#1660CF] py-2 px-4 focus:outline-none focus:ring-[#1660CF] focus:border-[#1660CF]"
                      type="text"
                    />
                  </div>
                  <div className="w-[45%]">
                    <label
                      className="text-gray-400 text-sm"
                      htmlFor="expirationDate"
                    >
                      Expiration date
                    </label>
                    <input
                      id="expirationDate"
                      className="rounded-lg border border-opacity-70 border-[#1660CF] py-2 px-4 focus:outline-none focus:ring-[#1660CF] focus:border-[#1660CF]"
                      type="text"
                    />
                  </div>
                  <div className="w-[45%]">
                    <label className="text-gray-400 text-sm" htmlFor="cvc">
                      CVC
                    </label>
                    <input
                      id="cvc"
                      className="rounded-lg border border-opacity-70 border-[#1660CF] py-2 px-4 focus:outline-none focus:ring-[#1660CF] focus:border-[#1660CF]"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-row ">
              <p className=" flex flex-row justify-center items-center gap-6">
                <TbLockSquareRounded className=" text-[#1660CF] text-[30px] " />{" "}
                <span>
                  We protect your payment information using encryption to
                  provide bank-level security.
                </span>{" "}
              </p>
            </div>
          </div>

          <div className=" w-[40%]  gap-10 flex flex-col">
            <div className=" drop-shadow-2xl bg-white px-4 py-4 flex flex-col box">
              <h1 className=" text-black font-bold">Discount Code</h1>
              <div className=" flex flex-col">
                <label htmlFor="">enter your coupon code</label>
                <input
                  className=" rounded-[4px] py-2 px-4 border-[1px] border-opacity-70 border-[#1660CF] "
                  type="text"
                />
              </div>
            </div>

            <div className=" drop-shadow-2xl bg-white gap-4 px-4 py-4 flex flex-col justify-center items-center box">
              <h1>Billing summary</h1>
              <div className=" w-full flex flex-row justify-between items-center">
                <p>Subtotal:</p>
                <p>3270.76$</p>
              </div>
              <div className=" w-full flex flex-row justify-between items-center">
                <p>Subtotal:</p>
                <p>3270.76$</p>
              </div>
              <div className=" w-full flex flex-row justify-between items-center">
                <p>Subtotal:</p>
                <p>3270.76$</p>
              </div>
              <div className=" w-full flex flex-row justify-between items-center">
                <p>Subtotal:</p>
                <p>3270.76$</p>
              </div>

              <div className=" h-[1px] w-full bg-gray-400 " />

              <div className="w-full  flex flex-row justify-between items-center">
                <p className=" font-bold">Grand total:</p>
                <p className=" font-bold">3270.76$</p>
              </div>

              <div className=" w-full flex flex-col">
                <label htmlFor="">comment about the purchase:</label>
                <input
                  className=" rounded-[4px] py-2 px-4 border-[1px] border-opacity-70 border-[#1660CF] "
                  type="text"
                />
              </div>

              <div className=" my-3 flex flex-row gap-2">
                <input type="checkbox" />
                <p>
                  Please check to acknowledge our{" "}
                  <span className=" text-blue-500">Privacy & Terms Policy</span>{" "}
                </p>
              </div>

              <button className=" rounded-xl text-white font-semibold flex justify-center items-center bg-[#19D16F] h-10 w-[80%] ">
                Pay 3309.70$
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
