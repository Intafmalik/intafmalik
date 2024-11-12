import React from 'react'

const ResumeCard = ({ title, subTitle, result, des }) => {
    return (
        <div className='w-full h-1/3 group flex'>
            <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-bgblack100 dark:bg-bgBlack dark:bg-opacity-60'>
                    <span className='w-3 h-3 rounded-full bg-bgblack900 dark:bg-bodyColor inline-flex group-hover:bg-designColor duration-300'>
                    </span>
                </span>
            </div>
            <div className='w-full bg-bgblack100 bg-opacity-0 hover:bg-opacity-80 dark:bg-bgBlack dark:bg-opacity-20 p-4 dark:hover:bg-opacity-30  duration-300 rounded-lg flex flex-col justify-center gap-10 dark:shadow-shadowOne shadow-shadowlight'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-2xl font-semibold text-textblack700 dark:text-textColorgray dark:group-hover:text-textWhite group-hover:text-textblack900 bg-opacity-15 duration-300'>{title}</h3>
                        <p className='text-sm mt-2 text-textColorgray group-hover:text-textblack700 dark:text-textColor dark:group-hover:text-textWhite duration-300'>{subTitle}</p>

                    </div>
                    <div>
                        <p
                            className='w-20 h-10 text-designColor bg-bgblack50 dark:bg-bgBlack dark:bg-opacity-25 bg-opacity-50 rounded-lg flex items-center justify-center shadow-shadowlight dark:shadow-shadowOne text-sm font-medium'>{result}</p>
                    </div>
                </div>
                <p className='text-md font-medium text-textColorgray group-hover:text-textblack900 dark:text-textColor dark:group-hover:text-textWhite duration-300' >{des}</p>
            </div>

        </div>
    )
}

export default ResumeCard
