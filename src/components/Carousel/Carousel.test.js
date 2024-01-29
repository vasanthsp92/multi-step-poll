import { render, screen } from "@testing-library/react";
import { StateProvider } from "../../context/Store";
import { Carousel } from "./Carousel";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { testDataWithAnswers } from "../../testData";

const questions = [
  {
    ques: "How would you rate your experience?",
    options: [
      {
        icon: <ThumbDownIcon />,
        label: "UnLike",
      },
      {
        icon: <ThumbUpIcon />,
        label: "Like",
      },
      {
        icon: <SentimentVerySatisfiedIcon />,
        label: "Happy",
      },
      {
        icon: <SentimentVerySatisfiedIcon />,
        label: "Happy",
      },
      {
        icon: <SentimentVerySatisfiedIcon />,
        label: "Happy",
      },
    ],
  },
  {
    ques: "What did you like about our service?",
    options: [
      {
        icon: <ThumbDownIcon />,
        label: "UnLike",
      },
      {
        icon: <ThumbUpIcon />,
        label: "Like",
      },
      {
        icon: <SentimentVerySatisfiedIcon />,
        label: "Happy",
      },
    ],
  },
  {
    ques: "What could we improve?",
    options: [
      {
        icon: <ThumbDownIcon />,
        label: "UnLike",
      },
      {
        icon: <ThumbUpIcon />,
        label: "Like",
      },
      {
        icon: <SentimentVerySatisfiedIcon />,
        label: "Happy",
      },
    ],
  },
];
describe("Carousel", () => {
  test("Carousel mount", () => {
    render(
      <StateProvider initialState={testDataWithAnswers}>
        <Carousel questions={questions} />
      </StateProvider>
    );
    expect(screen.getByTestId("carousel")).toBeInTheDocument();
  });

  test("Carousel render questionslide / step component", () => {
    render(
      <StateProvider initialState={testDataWithAnswers}>
        <Carousel questions={questions} />
      </StateProvider>
    );
    expect(screen.getByTestId("step-section")).toBeInTheDocument();
  });
});
