// Questions data file where we can add more questions or more options

import { faSmile, faFaceFrown, faThumbsUp, faThumbsDown, faLaugh } from '@fortawesome/free-regular-svg-icons';

export const questions = [
  {
    ques: "How would you rate your experience?",
    options: [
      {
        icon: faThumbsDown,
        label: "UnLike",
      },
      {
        icon: faThumbsUp,
        label: "Like",
      },
      {
        icon: faLaugh,
        label: "Happy",
      },
      {
        icon: faFaceFrown,
        label: "UnHappy",
      },
      {
        icon: faSmile,
        label: "Satisfied",
      },
    ],
  },
  {
    ques: "How would you like about our service?",
    options: [
      {
        icon: faThumbsDown,
        label: "UnLike",
      },
      {
        icon: faThumbsUp,
        label: "Like",
      },
      {
        icon: faLaugh,
        label: "Happy",
      },
      {
        icon: faFaceFrown,
        label: "UnHappy",
      },
      {
        icon: faSmile,
        label: "Satisfied",
      },
    ]
  },
  {
    ques: "How would you like about our quality?",
    options: [
      {
        icon: faThumbsDown,
        label: "UnLike",
      },
      {
        icon: faThumbsUp,
        label: "Like",
      },
      {
        icon: faLaugh,
        label: "Happy",
      },
      {
        icon: faFaceFrown,
        label: "UnHappy",
      },
      {
        icon: faSmile,
        label: "Satisfied",
      },
    ]
  },
];
