/* eslint-disable unicorn/consistent-function-scoping */
import React from "react";
import Image from "next/image";

const Button = React.memo(
  ({
    variant,
    value,
    className,
    click,
    fullWidth,
    large,
    icon,
    noMinWidth,
    isDisabled,
  }: any) => {
    const variantHandler = (data: any) => {
      switch (data) {
        case "filled-primary": {
          return `${
            fullWidth ? "w-full" : "w-fit"
          } rounded-[1rem] min-h-[5rem] bg-primaryBtnColor text-defaultText sm:min-h-[4rem] ${
            noMinWidth ? "min-w-full" : "min-w-[22rem] xxl:!min-w-[28rem]"
          }  font-medium hover:bg-primaryBtnHover transition-colors ease-in-out duration-300 px-8`;
        }
        case "outlined": {
          return `rounded-[3rem] min-h-[6rem] outline outline-primary-color 
          hover:bg-primary-color text-primary-color hover:text-white transition-colors ease-in-out duration-300 `;
        }
        case "filled-white": {
          return "rounded-[4rem] bg-primaryBg text-primaryText font-medium min-h-[4rem]";
        }
        case "outlined-white": {
          return "transition-colors ease-in-out duration-300 rounded-[4rem] min-h-[4rem] border border-primaryBg text-defaultText hover:bg-primaryBg  hover:text-accentPrimaryDark";
        }
        case "outlined-green": {
          return "transition-colors ease-in-out duration-300 text-xs rounded-[4rem] min-h-[5rem] border  min-w-[15rem] border-secondaryBg text-secondaryBg hover:bg-backgroundTri";
        }
        case "outlined-salmon": {
          return "transition-colors ease-in-out duration-300 text-xs rounded-[1rem] min-h-[5rem] border  min-w-[17rem] border-primaryBtnColor text-primaryBtnColor hover:bg-primaryBtnLight";
        }
        case "filled-primary-sm": {
          return `transition-colors ease-in-out duration-300 text-xs rounded-[1rem] min-h-[5rem] bg-primaryBtnColor  min-w-[15rem] text-defaultText hover:bg-primaryBtnHover ${
            large && "min-w-[20rem]"
          }`;
        }
        case "outlined-grey": {
          return `${
            fullWidth ? "w-full" : "w-fit"
          } text-xs rounded-[4rem] min-h-[5rem] bg-primaryBg border border-borderSecondary  min-w-[15rem] text-secondaryText hover:bg-backgroundTri ${
            large && "min-w-[20rem] transition-colors ease-in-out duration-300"
          }`;
        }
        case "filled-rectangle": {
          return "text-xs w-full rounded-[1rem] min-h-[5rem] bg-secondaryBg text-defaultText min-w-[25rem] hover:bg-secondaryBgDarken my-2 sm:min-h-[5rem] transition-colors ease-in-out duration-300 ";
        }
        case "salmon-rectangle": {
          return "text-xs w-full rounded-[1rem] min-h-[5rem]  bg-primaryBtnColor text-defaultText min-w-[20rem] hover:bg-primaryBtnHover my-2 sm:min-h-[5rem] transition-colors ease-in-out duration-300 ";
        }
        case "grey-rectangle": {
          return "text-xs w-full rounded-[1rem] min-h-[5rem] bg-googleButton text-primaryText min-w-[20rem] hover:bg-googleHover my-2 sm:min-h-[5rem] transition-colors ease-in-out duration-300 lg:min-h-[4.5rem]";
        }
        case "filled-green": {
          return `${
            fullWidth ? "w-full" : "w-fit"
          } rounded-[3rem] min-h-[5rem] bg-secondaryBg text-defaultText ${
            noMinWidth ? "min-w-full" : "min-w-[25rem]"
          }  font-medium hover:bg-secondaryBgDarken transition-colors ease-in-out duration-300 `;
        }
        case "filled-red": {
          return `${
            fullWidth ? "w-full" : "w-fit"
          } rounded-[3rem] min-h-[5rem] bg-cancelBg text-defaultText ${
            noMinWidth ? "min-w-full" : "min-w-[25rem]"
          }  font-medium hover:bg-cancelBgDarken transition-colors ease-in-out duration-300 `;
        }
        case "filled-grey": {
          return `${
            fullWidth ? "w-full" : "w-fit"
          } rounded-[3rem] min-h-[5rem] bg-formBg text-defaultText ${
            noMinWidth ? "min-w-full" : "min-w-[25rem]"
          }  font-medium hover:bg-formBgDarken transition-colors ease-in-out duration-300 `;
        }
        case "filled-light-red": {
          return `${
            fullWidth ? "w-full" : "w-fit"
          } rounded-[3rem] min-h-[5rem] bg-warningColor text-defaultText ${
            noMinWidth ? "min-w-full" : "min-w-[25rem]"
          }  font-medium hover:bg-warningColorDarken transition-colors ease-in-out duration-300 `;
        }
        case "salmon-rectangle-sm": {
          return "text-xs w-full rounded-[1rem] min-h-[5rem]  bg-primaryBtnColor text-defaultText min-w-[10rem] hover:bg-primaryBtnHover my-2  transition-colors ease-in-out duration-300 lg:min-h-[4.5rem] md:!min-h-[4rem]";
        }
        case "rectangle-white": {
          return `${
            fullWidth ? "w-full" : "w-fit"
          } rounded-[1rem] min-h-[5rem] bg-defaultText text-primaryText sm:min-h-[4rem] ${
            noMinWidth ? "min-w-full" : "min-w-[19rem]"
          }  font-medium`;
        }
        case "rectangle-grey": {
          return `${
            fullWidth ? "w-full" : "w-fit"
          } rounded-[1rem] min-h-[5rem] bg-primaryText text-defaultText sm:min-h-[4rem] ${
            noMinWidth ? "min-w-full" : "min-w-[19rem]"
          }  font-medium`;
        }
        case "salmon-rectangle-sm-rounded": {
          return "text-xs w-full rounded-[1rem] min-h-[4rem]  bg-primaryBtnColor text-defaultText min-w-[10rem] hover:bg-primaryBtnHover my-2  transition-colors ease-in-out duration-300 lg:min-h-[4.5rem]";
        }
        case "salmon-rectangle-sm-light": {
          return "text-xs w-full rounded-[1rem] min-h-[4rem]  bg-disablebg text-disableText min-w-[10rem] my-2  transition-colors ease-in-out duration-300 xl:min-h-[4.5rem] ";
        }
      }
    };

    return (
      <div
        className={`noselect flex justify-center items-center ${
          isDisabled ? "cursor-not-allowed" : "cursor-pointer"
        } px-12 py-2 xxl:!px-2
          ${variantHandler(variant)} ${className}`}
        onClick={isDisabled ? null : click}
      >
        {icon && <Image src={icon} alt="icon" className="w-8 mr-6" />}
        <div>{value}</div>
      </div>
    );
  }
);
export default Button;
