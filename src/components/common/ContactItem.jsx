import React from 'react'

const ContactItem = ({icon,label,href}) => {
    const Wrapper = href ? "a" :"div";
    return (
    <Wrapper
    href={href}
    className="flex items-center gap-2 hover:text-white transition ">
        <span className='text-secondary'>{icon}</span>
        <span>{label}</span>
    </Wrapper>
  )
}

export default ContactItem