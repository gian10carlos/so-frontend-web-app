import React from "react";

interface CustomButtomProps {
    textButton: string;
    onClick: () => void;
    classStyle?: string;
}

const CustomButton: React.FC<CustomButtomProps> = ({ textButton, onClick, classStyle }) => {
    return <button
        onClick={onClick}
        className={`w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 ${classStyle}`}>
        {textButton}
    </button>;
};

export default CustomButton;