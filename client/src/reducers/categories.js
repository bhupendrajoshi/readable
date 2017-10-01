import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES, SET_SELECTED_CATEGORY } from '../actions/categories';

const initialCategoryState = {
  categories: [],
  isRequestingCategories: false,
  categoriesLastUpdatedAt: undefined,
  selectedCategory: undefined,
}

export default function categories(state = initialCategoryState, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return { ...state, isRequestingCategories: true };
    case RECEIVE_CATEGORIES:
      return { ...state, isRequestingCategories: false, categoriesLastUpdatedAt: action.receivedAt, categories: action.categories };
    case SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.selectedCategory }
    default:
      return state;
  }
}
