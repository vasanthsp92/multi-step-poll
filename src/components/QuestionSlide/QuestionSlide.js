// Quesiton Slide File

import React, { useContext, useState } from "react";
import { Grid, Typography, Tooltip } from "@mui/material";
import { Store } from "../../context/Store";
import { setActiveIndex, updateAnswer } from "../../context/Actions";
import { updateOrAddObject } from "../../utils/helpers";
import "./QuestionSlide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const QuestionSlide = (props) => {
  // Data destructring from state and props
  const { title, options, idx } = props;
  const { state, dispatch, prevActiveIndex } = useContext(Store);
  const { answers, activeIndex } = state;

  // Variable & State
  let selectedValue;

  if (answers.length > 0) {
    const selectedOption = answers.find((ele) => ele.index === idx);
    selectedValue = selectedOption?.answer || "";
  }

  const [value, setValue] = useState(selectedValue);

  const handleOption = (option) => {
    const ansObj = {};
    ansObj["index"] = idx;
    ansObj["question"] = title;
    ansObj["answer"] = option.label;
    // Update or Add in the answerList
    const updatedAnwers = updateOrAddObject(answers, ansObj);

    dispatch(updateAnswer(updatedAnwers));
    dispatch(setActiveIndex(idx + 1));
    setValue(option.label);
  };
  return (
    <Grid container data-testid="question-slide">
      <Grid item xs={6} className="ques-container">
        {/* Question/Title in the step */}
        {title && (
          <Typography
            variant="h3"
            data-testid="question"
            className={`question question-${
              prevActiveIndex > activeIndex ? "bottom" : "top"
            }`}
          >
            {title}
          </Typography>
        )}
      </Grid>
      <Grid item xs={6} className="opts-container">
        <div className="opts-section" data-testid="options">
          {/* Options diplay in icons */}
          {options &&
            options.map((option, indx) => (
              <>
                {idx === activeIndex && (
                  <div key={indx + 10}>
                    {value === option?.label && idx === activeIndex ? (
                      // Selected Icon
                      <Tooltip title={option?.label} arrow open={true}>
                        <div className="icon-label icon-label-selected">
                          <FontAwesomeIcon icon={option?.icon} />
                        </div>
                      </Tooltip>
                    ) : (
                      // Radio button icon
                      <Tooltip title={option?.label} arrow className="tooltip">
                        <label
                          className={`icon-label icon-${
                            prevActiveIndex > activeIndex ? "bottom" : "top"
                          }`}
                        >
                          <input
                            type="radio"
                            name="response"
                            value={option?.label}
                            onChange={() => handleOption(option)}
                            style={{ display: "none" }}
                          />
                          <FontAwesomeIcon icon={option?.icon} />
                        </label>
                      </Tooltip>
                    )}
                  </div>
                )}
              </>
            ))}
        </div>
      </Grid>
    </Grid>
  );
};
