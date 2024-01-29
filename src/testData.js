import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export const testDataWithoutAnswers = {
    answers: [],
    questions: [
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
    ],
    activeIndex: 1
}

export const testDataWithAnswers = {
  answers: [
      {
          "index": 0,
          "question": "How would you rate your experience?",
          "answer": "UnLike"
      },
      {
          "index": 1,
          "question": "What did you like about our service?",
          "answer": "Like"
      },
      {
          "index": 2,
          "question": "What could we improve?",
          "answer": "Happy"
      }
  ],
  questions: [
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
  ],
  activeIndex: 1
}

