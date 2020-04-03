import React from "react"
import Spinner from "./Spinner"
import classNames from "classnames"

const Button = ({
  className: classNameProp = "",
  component = "button",
  type = "button",
  children,
  active,
  loading,
  color = "",
  size = "",
  href,
  disabled,
  ...props
}) => {
  let Component = component
  const properties = {}

  if (href) {
    Component = "a"
    properties.href = href
  }

  if (Component === "button") {
    properties.type = type

    if (disabled) {
      properties.disabled = disabled
    }
  }

  const className = classNames(
    "uk-button",
    {
      "uk-active": active,
      "uk-disabled": disabled,
      [`uk-button-${color}`]: color,
      [`uk-button-${size}`]: size,
    },
    classNameProp
  )

  return (
    <Component className={className} {...properties} {...props}>
      {children}
      <Spinner
        className="uk-margin-small-left"
        spinning={loading}
        ratio={0.6}
      />
    </Component>
  )
}

export default Button
