import React, { useState } from "react"

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()

    onFormSubmit(term)
    //TODO: Make sure we call
    // callback from parent component
  }
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="">Search for a video</label>
          <input
            type="text"
            placeholder="Search videos"
            onChange={(event) => setTerm(event.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
