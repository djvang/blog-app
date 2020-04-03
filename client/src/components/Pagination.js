import React from "react"

const Page = ({
  className,
  active,
  children,
  disabled,
  page,
  onPage = () => {},
  ...props
}) => {
  let Component = "a"
  let classNames = className

  if (active) {
    Component = "span"
    classNames += ` uk-active`
  }

  if (disabled) {
    classNames += ` uk-disabled`
  }

  return (
    <li className={classNames}>
      <Component
        onClick={(event) => {
          event.preventDefault()
          onPage(page, event)
        }}
        {...props}
      >
        {children}
      </Component>
    </li>
  )
}

const PrevPage = (props) => {
  return (
    <Page {...props}>
      <span data-uk-pagination-previous />
    </Page>
  )
}

const NextPage = (props) => {
  return (
    <Page {...props}>
      <span data-uk-pagination-next />
    </Page>
  )
}

const Pagination = () => {
  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" data-uk-margin>
      <PrevPage page={3} href="/" />

      <Page page={1} href="/">
        1
      </Page>

      <Page page={2} href="/">
        2
      </Page>

      <Page page={3} href="/">
        3
      </Page>

      <Page page={4} href="/" active>
        4
      </Page>

      <Page page={5} href="/">
        5
      </Page>

      <NextPage page={5} href="/" />
    </ul>
  )
}

export default Pagination
