interface CustomButtonCircleProps {
    icon: string,
    text: string,
}

export default function CustomButtonCircle({ icon, text }: CustomButtonCircleProps) {
    return (
        <button className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-purple-500">{icon}</span>
            </div>
            <span className="text-xs mt-1">{text}</span>
        </button>
    )
}
