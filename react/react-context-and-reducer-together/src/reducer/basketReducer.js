export function basketReducer(basket, action) {
  switch (action.type) {
    case "added": {
      return [...basket, action.product];
    }
    case "deleted": {
      return basket.filter((p) => p.id !== action.id);
    }
    case "updated": {
      return basket.map((p) => {
        if (p.id === action.id) {
          return { ...p, title: action.title };
        }
      });
    }
    default:
      throw new Error("Action not defined");
  }
}
