import React from 'react'

const Suggestions = (props) => {
  const options = props.movies.map((r) =><a onClick={props.suggestionselected.bind(null,r.title)} key={r.id} className="dropdown-item" href="#">{r.title}</a>)
  return options
}

export default Suggestions