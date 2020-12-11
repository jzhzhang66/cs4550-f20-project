import IngredientService from "../services/IngredientService"

export const FIND_INGREDIENTS = "FIND_INGREDIENTS"
export const UPDATE_KEYWORD = "UPDATE_KEYWORD"
export const FIND_INGREDIENT_INFO_BY_ID = "FIND_INGREDIENT_INFO_BY_ID"


export const findIngredients = (dispatch, ingredientName) => 
    IngredientService.findIngredients(ingredientName)
    .then(ingredients =>
      dispatch({
        type: FIND_INGREDIENTS,
        ingredients
      }))


export const updateKeyword = (dispatch, keyword) => {
  return dispatch({
    type: UPDATE_KEYWORD,
    keyword
  })
}

export const findIngredientInfoById = (dispatch, ingredientId) =>
IngredientService.findIngredientInfoById(ingredientId)
    .then(ingredient =>
      dispatch({
        type: FIND_INGREDIENT_INFO_BY_ID,
        ingredient
      }))



