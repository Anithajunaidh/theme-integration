"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

const SubscriptionCard = React.memo(
  () => {
    return (
      <div
        className="min-h-[46rem] min-w-[20rem] minXl:max-w-[28rem]
        w-full max-w-[32rem] sm:!max-w-[22rem] sm:!min-h-[37rem]
        flex flex-col flex-wrap rounded-[2rem] py-6 px-10  relative lg:max-w-[27rem]"
      >
       
          <div className="text-right absolute right-0">
            <div className="bg-primaryText py-4 px-6 text-vs rounded-l-full text-defaultText font-avenir font-semibold">
             Recommended
            </div>
          </div>
     

        <div className="gap-12">
          <div className="w-full flex flex-row  items-baseline gap-4">
              <div className="text-xl font-semibold mt-20">
                250€
              </div>
          </div>
          <div className="flex flex-col gap-4 min-h-[20rem] minLg:min-h-[24rem]">
            <div className="w-full">
              <div className="text-xs font-medium">
                Title
              </div>
            </div>

            <div className="w-full">
              <div className="text-xxs font-inter">
                subTitle
              </div>
            </div>

            <div className="w-full flex flex-col min-h-[10rem] font-inter">
                    <div
                      className="w-full flex flex-row mb-2"
                    >
                    
                        <div className="mt-[0.1rem] xl:!mt-0">
                        *
                        </div>
                  
                      <div className="text-vs text-start ml-2">
                        offer
                      </div>
                    </div>
            </div>
          </div>
        </div>

          <div
            className="w-full
              my-2 
            } px-12 flex justify-center "
          >
            <Button
              value="Select"
              variant="rectangle-white"
              click={null}
              className="text-xs text-center max-w-[22rem] font-avenir sm:!min-w-[18rem]"
            />
          </div>
          <div className="w-full pt-[8rem] pb-2">
            <div className="text-xxs font-avenir text-center">
              Finaliza el 2024/06/03
            </div>
          </div>
     
      </div>
    );
  }
);

export default SubscriptionCard;
