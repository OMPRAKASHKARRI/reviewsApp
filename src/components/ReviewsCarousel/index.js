import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {displayId: 0}

  goBack = () => {
    const {displayId} = this.state
    if (displayId !== 0) {
      this.setState(prevState => ({
        displayId: prevState.displayId - 1,
      }))
    }
  }

  goForward = () => {
    const {reviewsList} = this.props
    const lastReviewIndex = reviewsList.length - 1

    const {displayId} = this.state
    if (displayId !== lastReviewIndex) {
      this.setState(prevState => ({
        displayId: prevState.displayId + 1,
      }))
    }
  }

  render() {
    const {displayId} = this.state
    const {reviewsList} = this.props
    const reviewData = reviewsList[displayId]
    const {imgUrl, username, companyName, description} = reviewData

    console.log(displayId, reviewData)

    return (
      <div className="bg-container1">
        <h1 className="main-heading1">Reviews</h1>
        <div className="reviews-display-container1">
          <button
            className="arrow-button1"
            onClick={this.goBack}
            data-testid="leftArrow"
            type="button"
          >
            <img
              className="arrow-image1"
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>

          <div className="review-container1">
            <img className="profile-image1" src={imgUrl} alt={username} />
            <p className="username-heading1">{username}</p>
            <p className="company-heading">{companyName}</p>
            <p className="description-para1">{description}</p>
          </div>

          <button
            className="arrow-button1"
            onClick={this.goForward}
            data-testid="rightArrow"
            type="button"
          >
            <img
              className="arrow-image1"
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
