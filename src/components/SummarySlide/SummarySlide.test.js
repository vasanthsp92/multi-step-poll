import { render, screen } from "@testing-library/react";
import { SummarySlide } from "./SummarySlide";
import { testDataWithoutAnswers, testDataWithAnswers } from "../../testData";
import { StateProvider } from "../../context/Store";

describe("Summary Slide", () => {
  test("Summaryslide mount", () => {
    render(
      <StateProvider initialState={testDataWithAnswers}>
        <SummarySlide />
      </StateProvider>
    );
    expect(screen.getByTestId("summary-slide")).toBeInTheDocument();
  });

  test("Summary slide button", () => {
    render(
      <StateProvider initialState={testDataWithoutAnswers}>
        <SummarySlide />
      </StateProvider>
    );
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  test("Summary slide Enabled button", () => {
    render(
      <StateProvider initialState={testDataWithAnswers}>
        <SummarySlide />
      </StateProvider>
    );
    expect(screen.getByTestId("submit-button")).toBeEnabled();
  });
});
