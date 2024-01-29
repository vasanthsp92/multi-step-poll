// Helpers Test file
import { updateOrAddObject } from "./helpers";

describe("Helpers Functions test", () => {
  test("Add Object in an array", () => {
    // Arry
    const arr1 = [
      {
        index: 0,
        question: "How would you rate your experience?",
        answer: "UnLike",
      },
    ];
    // Obj
    const obj1 = {
      index: 1,
      question: "What did you like about our service?",
      answer: "Like",
    };
    
    const updatedData = updateOrAddObject(arr1, obj1);

    expect(updatedData).toStrictEqual([
      {
        index: 0,
        question: "How would you rate your experience?",
        answer: "UnLike",
      },
      {
        index: 1,
        question: "What did you like about our service?",
        answer: "Like",
      },
    ]);
  });

  test("Update value in array of object", () => {
    const arr1 = [
        {
          index: 0,
          question: "How would you rate your experience?",
          answer: "UnLike",
        },
        {
          index: 1,
          question: "What did you like about our service?",
          answer: "Like",
        },
      ];
    const obj1 = {
      index: 1,
      question: "What did you like about our service?",
      answer: "UnLike",
    };
    const updatedData = updateOrAddObject(arr1, obj1);

    expect(updatedData).toStrictEqual([
      {
        index: 0,
        question: "How would you rate your experience?",
        answer: "UnLike",
      },
      {
        index: 1,
        question: "What did you like about our service?",
        answer: "UnLike",
      },
    ]);
  });
});
