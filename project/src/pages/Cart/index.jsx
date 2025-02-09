import HighQualityFeature from "../../components/HighQualityFeature"; // Ensure path is correct
import React, { Suspense } from "react"; 

const data = [
  {
    trophyImage: "images/img_trophy_1.svg",
    headingText: "High Quality",
    descriptionText: "crafted from top materials",
  },
  { 
    trophyImage: "images/img_guarantee.svg", 
    headingText: "Warranty Protection", 
    descriptionText: "Over 2 years" 
  },
  { 
    trophyImage: "images/img_shipping.svg", // Fixed image name to be consistent
    headingText: "Free Shipping", 
    descriptionText: "Order over $150" 
  },  
  {
    trophyImage: "images/img_customer_support.svg",
    headingText: "24/7 Support",
    descriptionText: "Dedicated support",
  },
];     

export default function CartRowSix() {
  return (
    <div>
      <div className="bg-lime-50 px-[52px] py-[100px] md:p-5">
        <div className="flex gap-[54px] md:flex-col"> 
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <HighQualityFeature {...d} key={"cart" + index} className="w-[28%]" /> // Ensure the width class is correct
            ))}
          </Suspense>
        </div>
      </div>
    </div>  
  );
}
