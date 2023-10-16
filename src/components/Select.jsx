import React from 'react'

const Select = ({ options, label, classname = '', ...props },ref) => {
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''/>}
            <select {...props} id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}>
                {
                    options?.map((option) => {
                        <option key={option} value={option}>{option}</option>
                    })
                }
            </select>
        </div>
    )
}

export default React.forwardRef(Select)