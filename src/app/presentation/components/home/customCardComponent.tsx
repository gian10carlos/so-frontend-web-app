import { FaMoneyBill, FaUser } from "react-icons/fa";

interface CardProps {
    name: string;
    datetime: string;
    amount: string;
    nameClassName?: string;
}

export default function customCardComponent({ name, datetime, amount, nameClassName }: CardProps) {
    return (
        <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-2">
                <FaUser />
                <FaMoneyBill />
                <div>
                    <div className={`text-sm font-semibold ${nameClassName}`}>{name}</div>
                    <div className="text-xs text-gray-400">{datetime}</div>
                </div>
            </div>
            <div className={`text-green-500 font-semibold ${nameClassName}`}>S/. {amount}</div>
        </div >
    )
}
