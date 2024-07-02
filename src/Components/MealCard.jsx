import React from "react";
import {
  MdOutlineStarPurple500,
  MdOutlineStarOutline,
  MdOutlineStarHalf,
} from "react-icons/md";

const MealCard = ({
  mealImage,
  mealInstruction,
  mealname,
  mealrating,
  mealcuisine,
  mealType,
  DeleteIcon,
  deleteCard,
  imghidden
}) => {
  return (
    <>
      <div className="p-5 bg-[#FAFAFA] border-[1px] border-[#E2E2E2] rounded-lg xs:w-[300px] md:w-[408.15px] mr-2 md:h-[570.21px] shadow-lg">
        <div className="flex items-center justify-center">
          <div
            className={`rounded-lg w-[344px] h-[245px] bg-cover bg-no-repeat `}
            style={{ backgroundImage: `url(${mealImage})` }}
          >
            <div className="flex items-center justify-between px-3 pt-3 ">
              <div className="">
              <img src={DeleteIcon} alt="delete" className={`cursor-pointer ${imghidden} `} onClick={deleteCard}  />
              </div>
              <div className="">

            <h2 className="  bg-black text-white rounded-[3.4px] h-[19.2px] flex items-center  justify-center w-[102px] text-[9px] font-poppins font-bold">
              {mealType}
            </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h2 className="text-[22px] text-black font-bold ">{mealname}</h2>
          <p className=" text-[13.44px] leading-5 py-2 line-clamp-[6] h-[153px]">
            {mealInstruction}
          </p>

          <div className="my-7 text-[13.44px] flex items-center justify-between">
            <h2 className="font-extrabold">
              Cuisine: <span className="font-semibold">{mealcuisine}</span>
            </h2>
            <h2 className="font-semibold flex items-center justify-center gap-x-1">
              <span className="">Cuisine:</span>
              <span className="flex items-center gap-x-1 font-semibold">
                {mealrating} {renderStars(mealrating)}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealCard;



const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <span className="rating-stars text-[#004370] text-[12px] flex items-center justify-center ">
      {[...Array(fullStars)].map((_, index) => (
        <MdOutlineStarPurple500 key={index} />
      ))}
      {halfStar && <MdOutlineStarHalf />}
      {[...Array(emptyStars)].map((_, index) => (
        <MdOutlineStarOutline key={index} />
      ))}
    </span>
  );
};
