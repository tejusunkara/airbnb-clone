import React from "react";

const Card = (props) => {

  // const { card } = props;

  let badgeText;
  if (props.openSpots == 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <div className="flex flex-col pt-7 w-44 text-xs relative" style={{ flex: '0 0 auto' }}>
      {badgeText &&
        <div className="absolute top-8 left-1 bg-white py-1 px-2 rounded-sm not-italic font-poppins font-normal">
          {badgeText}
        </div>
      }
      <img
        src={`/assets/${props.img}`}
        className="rounded-lg mb-2 h-60 w-full"
      />
      <div className="flex items-center not-italic font-poppins font-light">
        <img
          src="/assets/Star.png"
          className="h-3"
        />
        <span className="text-light-black">{'\u00A0'}{props.stats.rating.toFixed(1)}</span>
        <span className="text-light-grey">{'\u00A0'}({props.stats.reviewCount}) • {props.location}</span>
      </div>
      <p className="not-italic font-poppins font-light text-light-black w-44 overflow-hidden text-ellipsis my-2">{props.title}</p>
      <p className="not-italic font-poppins font-light text-light-black pb-2">
        <span className="font-semibold mt-auto">
          From ${props.price}{'\u00A0'}
        </span>
        / Person
      </p>
    </div>
  );
};

export default Card;