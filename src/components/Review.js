import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
      .then(res => setReviews(res.data.data || []))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <section className="reviews-section py-5">
      <Container>
        <h2 className="reviews-title mb-5">What Our Customers Say</h2>
        {reviews.length > 0 ? (
          <Row className="justify-content-center g-4">
            {reviews.slice(0, 2).map((review, index) => (
              <Col xs={12} md={6} lg={5} key={index}>
                <div className="review-card mx-auto px-4 position-relative">
                  <div className="quote-circle position-absolute">
                    <span className="quote-icon">❝</span>
                  </div>
                  <p className="review-text mt-3 px-4 py-3">{review.Reviews}</p>
                  <div className="review-author d-flex align-items-center mt-3">
                    <img
                      src="https://i.pravatar.cc/40?img=3"
                      alt={review.Name}
                      className="author-avatar "
                    />
                    <div className="ms-2">
                      <p className="author-name mb-0 ">{review.Name}</p>
                      <p className="author-role mb-0 pb-4">Patient</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
            <Spinner animation="border" size="sm" className="me-2" />
            <span>Loading reviews...</span>
          </div>
        )}
      </Container>
      <div className="my-5"></div>
    </section>
    
  );
}
