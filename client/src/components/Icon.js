import React from "react"

const Icon = ({ icon, ratio = 1 }) => {
  if (!icon) return null
  return <span data-uk-icon={`icon:  ${icon}; ratio: ${ratio}`} />
}

export default Icon
