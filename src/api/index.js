// Api File

// savePoll to save data in poll List array in DB/JSON
export const savePollApi = (data) => {
  return fetch(`http://localhost:4000/pollList`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response
        .json()
        .then((data) => ({ data, status: response.status }));
    })
    .then((result) => {
      // Return the status code and response data
      return result;
    })
    .catch((error) => error);
};
