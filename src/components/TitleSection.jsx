import React from 'react'

const TitleSection = ({heading, subHeading, text}) => {
  return (
  <div className="w-[1176px] pt-[120px] flex flex-col items-center justify-center text-center mx-auto">
      <h5 className="body-text font-medium">
        {subHeading}
      </h5>
      <h3 className="heading-3 mt-7 mb-6">
        {heading}
      </h3>
      <p className="body-text">
        {text}
      </p>
    </div>
  )
}

export default TitleSection
