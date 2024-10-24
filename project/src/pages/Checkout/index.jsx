import { Helmet } from "react-helmet";
import { Button, Heading, Radio, RadioGroup, Input, SelectBox, Img } from "your-component-library"; // Adjust this to your actual component library
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CheckoutRow from "./CheckoutRow";
import CheckoutRowOne from "./CheckoutRowOne";
import React from "react";

const dropDownOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>project</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-color-white">
        <Header />
        <div>
          <CheckoutRow />
          <div className="flex flex-col items-center bg-color-white py-[52px] md:py-5">
            <div className="container-xs mt-2.5 md:px-5">
              <div className="flex items-start gap-[26px] md:flex-col">
                <div className="w-full self-center">
                  <div className="flex flex-col items-start gap-9 bg-color-white py-[34px] pl-[74px] pr-14 md:px-5 sm:p-5">
                    <Heading
                      size="heading4x1"
                      as="h2"
                      className="text-[36px] font-semibold text-black-900 md:text-[34px] sm:text-[32px]"
                    >
                      Billing details
                    </Heading>
                    <div className="mr-1 flex gap-[30px] self-stretch md:mr-0 sm:flex-col">
                      <div className="flex w-full flex-col items-start gap-[22px] sm:w-full">
                        <Heading as="h3" className="text-[16px] font-medium text-black-900">
                          First Name
                        </Heading>
                        <Input
                          shape="round"
                          name="firstName"
                          className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                        />
                      </div>
                      <div className="flex w-full flex-col items-start gap-[22px] sm:w-full">
                        <Heading as="h4" className="text-[16px] font-medium text-black-900">
                          Last Name
                        </Heading>
                        <Input
                          shape="round"
                          name="lastName"
                          className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                        />
                      </div>
                    </div>
                    <div className="mr-1 flex flex-col items-start gap-[22px] self-stretch md:mr-0">
                      <Heading as="h5" className="text-[16px] font-medium text-black-900">
                        Company Name (Optional)
                      </Heading>
                      <Input
                        shape="round"
                        name="companyName"
                        className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                      />
                    </div>
                    <div className="mb-9 mr-1 self-stretch md:mr-0">
                      <div className="flex flex-col items-start gap-[22px]">
                        <Heading as="h6" className="text-[16px] font-medium text-black-900">
                          Country / Region
                        </Heading>
                        <SelectBox
                          shape="round"
                          indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[20px] w-[20px]" />}
                          name="country"
                          placeholder={"Sri Lanka"}
                          options={dropDownOptions}
                          className="gap-4 self-stretch rounded-[10px] border border-solid border-gray-500 px-[30px] sm:p-5"
                        />
                      </div>
                      <div className="mt-9 flex flex-col items-start gap-[22px]">
                        <Heading as="p" className="text-[16px] font-medium text-black-900">
                          Street address
                        </Heading>
                        <Input
                          shape="round"
                          name="streetAddress"
                          className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                        />
                      </div>
                      <div className="mt-9 flex flex-col items-start gap-[22px]">
                        <Heading as="p" className="text-[16px] font-medium text-black-900">
                          Province
                        </Heading>
                        <SelectBox
                          shape="round"
                          indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[20px] w-[20px]" />}
                          name="province"
                          placeholder={"Western Province"}
                          options={dropDownOptions}
                          className="gap-4 self-stretch rounded-[10px] border border-solid border-gray-500 px-[30px] sm:p-5"
                        />
                      </div>
                      <div className="mt-9 flex flex-col items-start gap-[22px]">
                        <Heading as="p" className="text-[16px] font-medium text-black-900">
                          ZIP code
                        </Heading>
                        <Input
                          shape="round"
                          name="zipcode"
                          className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                        />
                      </div>
                      <div className="mt-9 flex flex-col items-start gap-[22px]">
                        <Heading as="p" className="text-[16px] font-medium text-black-900">
                          Phone
                        </Heading>
                        <Input
                          shape="round"
                          name="phone"
                          className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                        />
                      </div>
                      <div className="mt-9 flex flex-col items-start gap-[22px]">
                        <Heading as="p" className="text-[16px] font-medium text-black-900">
                          Email address
                        </Heading>
                        <Input
                          shape="round"
                          name="email"
                          className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                        />
                      </div>
                      <Input
                        size="md"
                        shape="round"
                        name="additionalInfo"
                        placeholder={"Additional information"}
                        className="mt-2 rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Below is the product section */}
          <div className="w-full bg-color-white px-9 py-[86px] md:py-5 sm:p-5">
            <div className="flex flex-col gap-[22px]">
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-wrap justify-between gap-5">
                  <Heading
                    size="text2x"
                    as="p"
                    className="text-[24px] font-medium text-black-900 md:text-[22px]"
                  >
                    Product
                  </Heading>
                  <Heading
                    size="text2x"
                    as="p"
                    className="text-[24px] font-medium text-black-900 md:text-[22px]"
                  >
                    Subtotal
                  </Heading>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-1 flex-wrap items-center">
                    <Heading as="p" className="text-[16px] font-normal text-gray-500">
                      Asgaard sofa
                    </Heading>
                    <Heading size="textxs" as="p" className="ml-2.5 text-[12px] font-medium text-black-900">
                      <span>1</span>
                    </Heading>
                    <Heading as="p" className="text-[16px] font-light text-black-900">
                      Rs. 250,000.00
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap justify-between gap-5">
                    <Heading as="p" className="text-[16px] font-normal text-black-900">
                      Subtotal
                    </Heading>
                    <Heading as="p" className="text-[16px] font-light text-black-900">
                      Rs. 250,000.00
                    </Heading>
                  </div>
                  <Heading as="p" className="text-[16px] font-normal text-black-900">
                    Total
                  </Heading>
                  <Heading size="headingmd" as="h4" className="text-[24px] font-bold text-primary md:text-[22px]">
                    Rs. 250,000.00
                  </Heading>
                </div>
              </div>
              <div className="mt-8 h-blue_gray--100"/>
              <div className="mt-5 flex flex-col gap-2.5">
               <div className="flex items-center gap-[15px]">        
                <div className="h-[14px] w-[14px] rounded-md bg-black-900" />
                < Heading as="p" className="text-[16px] font-normal text-black-900">
                         Direct Bank Transfer
                   </Heading>
                   </div>
                  <Heading as="p" className="text-justify text-[16px] font-light leading-6 text-gray-500"> 
                     Make your payment directly into our bank account. Please use your Order ID as the payment
                    reference. Your order will not be shipped until the funds have cleared in our account.
                     </Heading>
                    </ div>
                  < RadioGroup name="makeyour" className="mt-6 flex flex-col">
                     <Radio
                       value="directbanktransfer"
                       label="Direct Bank Transfer"
                     className="gap-3.5 text-[16px] font-medium text-gray-500"
                    />
                     <Radio
                         value="cashondelivery"
                         label="Cash On Delivery"
                        className="mt-2.5 gap-3.5 text-[16px] font-medium text-gray-500"
                       />
                     </RadioGroup>
                     <Heading as="p"className="mt-[22px] text-justify text-[16px] font-light leading-6 text-black-900">
                      < span>
                         Your personal data will be used to support your experience throughout this website, to manage
                          access to your account, and for other purposes described in our&nbsp;
                          </span>
                          <span className="font-semibold">privacy policy.</ span> 
                        </Heading>
                         <Button
                          size="5x1"
                         className="ml-28 mr-[104px] mt-[38px] self-stretch rounded-[14px]!border px-[33px] md:mx-0 sm:px-5" 
                >
                  Place order
                </Button>
              </div>
            </div>
          </div>
        </div> 
        <CheckoutRowOne />
        <div>
        <Footer className="mb-[50px] border-t-[0.5px] border-solid border-black-900_2b bg-color-white"/> 
      </div>
    </>
  );
}
