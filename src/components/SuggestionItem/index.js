// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, showArrowClicked} = props
  const {suggestion} = suggestionsList
  const arrowClick = () => {
    showArrowClicked(suggestion)
  }
  return (
    <li className="li-card">
      <p className="li-para">{suggestion}</p>
      <img
        className="arrow-img"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={arrowClick}
      />
    </li>
  )
}

export default SuggestionItem
