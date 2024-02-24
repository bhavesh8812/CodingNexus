import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const FeedbackSlider = ({ feedbacks }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    
  return (
    <div className="container">
      <h2>Feedbacks</h2>
      <Slider {...settings}>
        {feedbacks.map((feedback, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{feedback.title}</h5>
                <p className="card-text">{feedback.message}</p>
                <p className="card-text"><small className="text-muted">Submitted by: {feedback.author}</small></p>
              </div>
            </div>
          </div>
        ))}
        </Slider>
    </div>
  );
};

const App = () => {
  const feedbacks = [
    { title: 'Great Course!', message: 'Just wanted to drop a quick note to say how much I enjoyed the course. It was well-paced and packed with valuable information', author: 'Kabir Gupta' },
    { title: 'Incredibly informative!', message: 'The real-world examples and case studies in this course made all the difference. It really helped me understanding. Definitely worth the investment!', author: 'Ritvik Patel' },
    { title: 'Exceptionally well-crafted!', message: 'Just completed the course and I am blown away by how much I have learned! Highly recommend it to anyone looking to level up their skills.', author: 'Richa Sen' },
    { title: 'Outstanding content. Well worth it!', message: 'The course offered a perfect balance between theory and practical examples. It made learning enjoyable and effective. ', author: 'Aisha Sharma' },
];

  return (
    <div>
      <FeedbackSlider feedbacks={feedbacks} />
    </div>
  );
};

export default App;
