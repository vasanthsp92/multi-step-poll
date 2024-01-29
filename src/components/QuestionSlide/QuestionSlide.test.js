import { render, screen } from "@testing-library/react";
import { StateProvider } from "../../context/Store";
import { QuestionSlide } from "./QuestionSlide";
import { testDataWithoutAnswers, testDataWithAnswers } from "../../testData";

describe("Question Slide", () => {
  render(
    <StateProvider initialState={testDataWithAnswers}>
      <QuestionSlide
        title={testDataWithoutAnswers.questions[0].ques}
        options={testDataWithoutAnswers.questions[0].options}
      />
    </StateProvider>
  );
  test("Questionslide mount", () => {
    expect(screen.getByTestId("question-slide")).toBeInTheDocument();
  });
  test("Questionslide question title render", () => {
    render(
      <StateProvider initialState={testDataWithAnswers}>
        <QuestionSlide
          title={testDataWithoutAnswers.questions[0].ques}
          options={testDataWithoutAnswers.questions[0].options}
          idx={0}
        />
      </StateProvider>
    );
    expect(screen.getByTestId("question")).toBeInTheDocument();
  });

  test("Questionslide options render", () => {
    render(
      <StateProvider initialState={testDataWithAnswers}>
        <QuestionSlide
          title={testDataWithoutAnswers.questions[0].ques}
          options={testDataWithoutAnswers.questions[0].options}
          idx={0}
        />
      </StateProvider>
    );
    expect(screen.getByTestId("options")).toBeInTheDocument();
  });
});
