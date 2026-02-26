import React from 'react'

const TitleSection = ({heading, subHeading, text, textClassName = "",}) => {
  return (
  <div className="max-w-[1176px] md:pt-16 pt-20 md:px-0 px-5 flex flex-col items-center justify-center text-center mx-auto">
      <h5 className="body-text font-medium text-primary">
        {subHeading}
      </h5>
      <h3 className="heading-2 py-6">
        {heading}
      </h3>
     <p className={`body-text ${textClassName}`}>
        {text}
      </p>
    </div>
  )
}

export default TitleSection
