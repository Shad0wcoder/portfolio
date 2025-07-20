import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title?: string; icon?: React.ReactNode; position?: string; handleClick?: () => void; otherClasses?: string;
}) => {
    return (

        <button
            onClick={handleClick}
            className={`inline-flex gap-2 h-14 animate-shimmer items-center justify-center rounded-md border border-slate-800 
        bg-[linear-gradient(120deg,#000103,40%,#1e2631,55%,#000103)] 
        bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors 
        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
        focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300 ${otherClasses}`}
        >
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </button>

    )
}

export default MagicButton


