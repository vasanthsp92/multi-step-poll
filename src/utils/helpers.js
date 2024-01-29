// Helper File

export const  updateOrAddObject = (arr, updatedObject) => {
   // Helper function to update/add data in array of objects.
    const idx = arr.findIndex(obj => obj.index === updatedObject.index);
    if (idx !== -1) {
      arr[idx] = updatedObject;
    } else {
      arr.push(updatedObject);
    }
    return arr;
  }