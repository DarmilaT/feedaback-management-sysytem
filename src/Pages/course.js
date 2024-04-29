import React, { useState } from 'react';
import '../styles/CourseFeedback.css';

const CourseFeedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    courseUnit: '',
    date: '',
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
    question11: null,
    question12: null,
    question13: null,
    comments: ''
  });

  const handleChange = (e) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(feedbackData);
  };

  return (
    <div className="course-feedback">
      <h2>COURSE EVALUATION</h2>
      <p>
        This questionnaire intends to collect feedback from the students about the course unit. Your valuable feedback
        will be vital for us to strengthen the teaching-learning environment to achieve excellence in teaching and
        learning.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Unit:</label>
          <input type="text" name="courseUnit" value={feedbackData.courseUnit} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="text" name="date" value={feedbackData.date} onChange={handleChange} />
        </div>
        <p>
          Please respond to the following statements by marking on the scale next to each statement (Ex. ). The scale 1
          to 5 refers to the following.
        </p>
        <div className="options">
          <span className="grade-2">Strongly Disagree</span>
          <span className="grade-1">Disagree</span>
          <span className="grade-0">Not Sure</span>
          <span className="grade1">Agree</span>
          <span className="grade2">Strongly Agree</span>
        </div>
        <div className="question-section">
          <h3>A. General</h3>
          <div className="question">
            <p>i. This course helped me to enhance my knowledge</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question1"
                    value={index - 2}
                    checked={feedbackData.question1 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="question">
            <p>ii. The workload of the course was manageable</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question2"
                    value={index - 2}
                    checked={feedbackData.question2 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="question">
            <p>iii. The course was interesting</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question3"
                    value={index - 2}
                    checked={feedbackData.question3 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="question-section">
          <h3>B. Materials</h3>
          <div className="question">
            <p>i. Adequate Materials (handouts) were provided</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question4"
                    value={index - 2}
                    checked={feedbackData.question4 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="question">
            <p>ii. Handouts were easy to understand</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question5"
                    value={index - 2}
                    checked={feedbackData.question5 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="question">
            <p>iii. Enough reference books were used</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question6"
                    value={index - 2}
                    checked={feedbackData.question6 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="question-section">
          <h3>C. Tutorials/ Examples</h3>
          <div className="question">
            <p>i. Given problems (examples/ tutorials/ exercises) were enough</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question7"
                    value={index - 2}
                    checked={feedbackData.question7 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="question">
            <p>ii. Given problems (examples/ tutorials/ exercises) were challenging</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question8"
                    value={index - 2}
                    checked={feedbackData.question8 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="question-section">
          <h3>D. Lab/ Fieldwork</h3>
          <div className="question">
            <p>i. I could relate what I learnt from lectures to lab/ field classes</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question9"
                    value={index - 2}
                    checked={feedbackData.question9 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="question">
            <p>ii. Labs & Fieldwork helped to improve my skills and practical knowledge</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question10"
                    value={index - 2}
                    checked={feedbackData.question10 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="question">
            <p>iii. I can conduct experiments/ fieldwork myself through set of instructions in future</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question11"
                    value={index - 2}
                    checked={feedbackData.question11 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="question-section">
          <h3>E. About Myself</h3>
          <div className="question">
            <p>i. I prepared thoroughly for each class</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question12"
                    value={index - 2}
                    checked={feedbackData.question12 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="question">
            <p>ii. I attended lectures, lab/fieldwork regularly</p>
            <div className="options">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="question13"
                    value={index - 2}
                    checked={feedbackData.question13 === String(index - 2)}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Any other comments:</label>
          <textarea name="comments" value={feedbackData.comments} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseFeedback;