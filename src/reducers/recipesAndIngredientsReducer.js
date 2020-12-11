import {
    DELETE_TOPIC,
    CREATE_TOPIC,
    UPDATE_TOPIC,
    FIND_TOPIC_FOR_LESSON,
    FIND_TOPIC

  } from "../actions/topicActions"

const initialState = {
    topics: [],
    topicId:{},
    recipes: [
        {id: "123", title: "mac and cheese"},
        {id: "234", title: "chicken salad"},
        {id: "345", title: "sweet potato soup"},
    ],
    ingredients: [
        {id: "456", title: "strawberries"},
        {id: "567", title: "chocolate"},
        {id: "678", title: "yogurt"},
    ]
}


const recipesAndIngredientsReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                ...state,
                topics: [...state.topics, action.topic]
            }
        case FIND_TOPIC_FOR_LESSON:
            return {
                ...state,
                topics: action.topics,
                lessonId: action.lessonId
            }
        case FIND_TOPIC:
            return {
                ...state,
                topicId: action.topicId
            }
        case UPDATE_TOPIC:
            return {
                ...state,
                topics: state.topics.map(topic => topic._id === action.topic._id ? action.topic : topic)
            }
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topic._id)
            }
        default:
            return state
    }
}

export default recipesAndIngredientsReducer
