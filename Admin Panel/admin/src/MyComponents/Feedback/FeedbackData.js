import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CSS/Feedback/FeedbackData.css";

class FeedbackPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalFeedback: 126,
      newFeedback: 40,
      avgRating: 4.2,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateData();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateData() {
    this.setState({
      totalFeedback: Math.floor(Math.random() * 200 + 100),
      newFeedback: Math.floor(Math.random() * 50 + 10),
      avgRating: (Math.random() * 2 + 3).toFixed(1),
    });
  }

  renderStars() {
    const { avgRating } = this.state;
    const fullStars = Math.floor(avgRating);
    const halfStar = avgRating - fullStars >= 0.5;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="star full">★</span>
        ))}
        {halfStar && <span className="star half">★</span>}
        {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <span key={i + fullStars} className="star empty">☆</span>
        ))}
      </>
    );
  }

  render() {
    return (
      <div className="container d-flex justify-content-center mt-4">
        <div className="row w-100 text-center">
          <div className="col-md-3 cardBox shadow">
            <p className="text-muted">Total Feedback</p>
            <h3>{this.state.totalFeedback}</h3>
          </div>
          <div className="col-md-3 cardBox shadow">
            <p className="text-muted">New</p>
            <h3>{this.state.newFeedback}</h3>
          </div>
          <div className="col-md-3 cardBox shadow">
            <p className="text-muted">Avg. Rating</p>
            <div className="d-flex align-items-center justify-content-center">
              {this.renderStars()}&nbsp;
              <h4>({this.state.avgRating})</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackPanel;
