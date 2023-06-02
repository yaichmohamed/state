import React from 'react';

const Person = ({ fullName, bio, imgSrc, profession }) => {
  return (
    <div>
      <img src={imgSrc} alt={fullName} /> // Display the person's image with alt text as their full name
      <h1>{fullName}</h1> // Display the person's full name
      <h2>{profession}</h2> // Display the person's profession
      <p>{bio}</p> // Display the person's biography
    </div>
  );
};

export default Person;
