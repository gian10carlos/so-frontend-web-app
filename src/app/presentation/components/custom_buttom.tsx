import React from "react";

interface CustomButtomProps {
    textButton: string;
    onClick: ()=> void;
}

const CustomButton: React.FC<CustomButtomProps> = ({textButton, onClick}) => {
    return <button 
    onClick={onClick}
    className="w-24 h-12 py-2 px-5 m-1 bg-slate-500 rounded-md text-white hover:bg-slate-600 shadow-mdz">
        {textButton}
        </button>;
  };
  
  export default CustomButton;