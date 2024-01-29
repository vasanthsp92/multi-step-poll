//Summary Slide File

import React, { useContext, useState } from "react";
import "./SummarySlide.css";
import { Grid, Typography, Button, Tooltip, Snackbar } from "@mui/material";
import { savePollApi } from "../../api";
import { Store } from "../../context/Store";
import { resetAnswers } from "../../context/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

export const SummarySlide = () => {
  // Data destructring from state and props
  const { state, dispatch } = useContext(Store);
  const { answers, questions } = state;

  // Variable & State
  const [openAlert, setOpenAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);

  const saveReport = () => {
    savePollApi(answers).then((res) => {
      if (res.status === 201) {
        setOpenAlert(true);
      } else {
        setOpenErrorAlert(true)
      }
    });
  };

  const handleAlert = () => {
    dispatch(resetAnswers());
  };

  return (
    <div className="sum-slide" data-testid="summary-slide">
      {questions.map((item, idx) => {
        const sIcon = item?.options.find((i) => {
          const sAns = answers.find((j) => j.index === idx);
          return i?.label === sAns?.answer && i.icon;
        });
        return (
          <Grid container key={`sItem${idx}`} className="sum-slide-section">
            <Grid
              item
              xs={6}
              className="summary-ques-container"
              data-testid="summary-question"
            >
              {/* Questions left side reveal in summary slide */}
              <div key={`sQues${idx}`}>
                <Typography variant="h5" className="sum-question">
                  {item.ques}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} className="sum-icon-cotainer">
              <div key={`sAns${idx}`} data-testid="summary-icon-container">
                {sIcon ? (
                  // Selected Icon left side reveal in summary slide
                  <FontAwesomeIcon icon={sIcon?.icon} className="sum-icon answered-icon" />
                ) : (
                  // If icon not selected shows question mark icon
                  <Tooltip title="Choose one" arrow className="tooltip">
                    <div className={"sum-icon"}>
                      <FontAwesomeIcon
                        icon={faQuestion}
                        className="sum-icon"
                        alttext="question-icon"
                      />
                    </div>
                  </Tooltip>
                )}
              </div>
            </Grid>
          </Grid>
        );
      })}
      {/* Final Submit button will enable if all questions are answered*/}
      <Grid className="sum-btn-container">
        <Button
          variant="outlined"
          className={`${
            questions.length !== answers.length
              ? "button-disabled"
              : "button-enabled"
          }`}
          data-testid="submit-button"
          disabled={questions.length !== answers.length}
          onClick={() => saveReport()}
        >
          Submit
        </Button>
      </Grid>
      {/* Alert/notication for successful data save */}
      <Snackbar
        open={openAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleAlert}
        message="Data saved successfully"
        className="alert"
      />

      {/* Alert/notication for successful data save */}
      <Snackbar
        open={openErrorAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        message="Something Went wrong !"
        className="error-alert"
      />
    </div>
  );
};
