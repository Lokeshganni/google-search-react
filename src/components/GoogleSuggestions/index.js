// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  takeInput = event => {
    const enteredInput = event.target.value
    this.setState({searchInput: enteredInput})
  }

  showArrowClicked = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const {id, suggestion} = suggestionsList
    const updatedList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="card-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />

          <ul className="ul-card">
            <div className="input-and-search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input-field"
                onChange={this.takeInput}
                placeholder="Search Google"
                value={searchInput}
              />
            </div>
            {updatedList.map(each => (
              <SuggestionItem
                suggestionsList={each}
                key={each.id}
                showArrowClicked={this.showArrowClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
