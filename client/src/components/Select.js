import React from "react"
import classNames from "classnames"

const Select = ({ options, className, ...props }) => {
  return (
    <select className={classNames("uk-select", className)} {...props}>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
