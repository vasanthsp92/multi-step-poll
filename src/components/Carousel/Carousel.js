// Carousel file

import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import QuestionSlide from "../QuestionSlide";
import "./Carousel.css";
import { SummarySlide } from "../SummarySlide/SummarySlide";
import { Store } from "../../context/Store";
import { setActiveIndex, setQuestions } from "../../context/Actions";

export const Carousel = (props) => {
  // Data destrucutring
  const { questions } = props;
  const { state, dispatch } = useContext(Store);
  const { activeIndex } = state;

  const [prevIndex, setPrevIndex] = useState(0);

  const carouselDots = questions.length + 1;

  const handleActiveIndex = (idx) => {
    setPrevIndex(activeIndex);
    dispatch(setActiveIndex(idx));
  };

  useEffect(
    () => {
      // if(questions !== questionsData){}
      dispatch(setQuestions(questions));
      return () => {};
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <div className="carousel" data-testid="carousel">
      {questions.length > 0 && (
        <Grid container sx={{ height: "100%" }}>
          {/* The below grid is for carousel dot indicators */}
          <Grid item xs="auto" className="carousel-indicators-container">
            <div className="carousel-indicators">
              {[...Array(carouselDots)].map((_, idx) => (
                <div
                  data-slide-to="1"
                  key={`cDots${idx}`}
                  className={`dots ${
                    idx === activeIndex
                      ? prevIndex > activeIndex
                        ? "activeDot-bottom"
                        : "activeDot-top"
                      : ""
                  }`}
                  onClick={() => handleActiveIndex(idx)}
                ></div>
              ))}
            </div>
          </Grid>
          {/* The below code is map for question slide ("step" from the requirment) */}
          {activeIndex < questions.length && (
            <Grid item xs data-testid="step-section">
              <div className="carousel-item-container">
                {questions.map((ques, idx) => {
                  return (
                    <div
                      key={`sItem${idx}`}
                      className={`slide ${
                        idx === activeIndex ? "activeSlide" : ""
                      }`}
                    >
                      <QuestionSlide
                        title={ques?.ques}
                        options={ques?.options}
                        idx={idx}
                      />
                    </div>
                  );
                })}
              </div>
            </Grid>
          )}
          {/* The below code is for final summary slide */}
          {activeIndex === questions.length && (
            <Grid item xs data-testid="summary-section">
              <SummarySlide />
            </Grid>
          )}
        </Grid>
      )}
    </div>
  );
};
