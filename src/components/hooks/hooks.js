
export const useFilterTrue = (arr) => {
    const newState = arr.filter((item) => item.completed)
    return newState
  }
  