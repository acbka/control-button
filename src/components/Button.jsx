import React from 'react';
import '../css/button.css'

export const Button = ({clickButton, name, children}) => {

   const handleClick = e => {
      e.preventDefault();
      clickButton();
   };

   return (
      <div>
         <button className={name} onClick={handleClick}>{children}</button>
      </div>
   )
}