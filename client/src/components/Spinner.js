import React from "react"

const Spinner = ({ spinning, ratio = 1, ...props }) => {
  if (!spinning) return null
  return <div data-uk-spinner={`ratio: ${ratio}`} {...props} />
}

export default Spinner
