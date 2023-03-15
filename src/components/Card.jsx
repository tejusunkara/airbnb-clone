import React from "react";

const Card = (props) => {
  return (
    <div className="pt-12 pl-4 w-44 h-60">
      <img
        src={`/assets/${props.img}`}
        className="rounded-lg space-y-4 w-44 h-60"
      />
      <div className="flex flex-row pt-3 items-center w-44">
        <img
          src="/assets/Star.png"
          className="w-3 h-3"
        />
        <span className="not-italic font-poppins font-light text-xs text-light-black">{'\u00A0'}{props.rating}</span>
        <span className="not-italic font-poppins font-light text-xs text-light-grey">{'\u00A0'}({props.reviewCount}) • {props.country}</span>
      </div>
      <p className="not-italic font-poppins font-light text-xs text-light-black my-2 w-44">{props.title}</p>
      <p className="not-italic font-poppins font-light text-xs text-light-black pb-7 w-44">
        <span className="not-italic font-poppins font-semibold text-xs text-light-black">
          From ${props.price}{'\u00A0'}
        </span>
        / Person
      </p>
    </div>
  );
};

export default Card;