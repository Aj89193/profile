import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  getReview = reviewList => {
    const {activeReviewIndex} = this.state
    const {imageUrl, username, companyName, description} = reviewList[
      activeReviewIndex
    ]
    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imageUrl} className="image" alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
    console.log(`click on left`)
  }

  onRight = () => {
    const {reviewList} = this.props
    const {activeReviewIndex} = this.state
    if (activeReviewIndex < reviewList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
    console.log(`clicked on right arrow and ${activeReviewIndex}`)
  }

  render() {
    const {activeReviewIndex} = this.state
    const {reviewList} = this.props

    return (
      <div className="app-container">
        <button
          data-testid="leftArrow"
          className="btn"
          onClick={this.onLeft}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
          />
        </button>
        {this.getReview(reviewList)}
        <button
          data-testid="rightArrow"
          className="btn"
          onClick={this.onRight}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel
