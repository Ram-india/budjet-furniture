import React from 'react'

const ContactItem = ({icon,label,href}) => {
    const Wrapper = href ? "a" :"div";
    return (
    <Wrapper
    href={href}
    className="flex items-start gap-2 sm:gap-3 text-gray-700 hover:text-secondary transition-colors duration-200 text-xs sm:text-sm">
        <span className='text-secondary flex-shrink-0 text-sm sm:text-base mt-0.5'>{icon}</span>
        <span className='break-words'>{label}</span>
    </Wrapper>
  )
}

export default ContactItem