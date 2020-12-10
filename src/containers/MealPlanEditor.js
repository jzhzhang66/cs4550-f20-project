import { buildQueries } from "@testing-library/react";
import "./MealPlanEditor.css";
import React from "react";
import { connect } from "react-redux";
import MealPlanService from "../services/MealPlanService";
import DailyPlanService from "../services/DailyPlanService";
import Meals from "../components/Meals";
import DailyPlans from "../components/DailyPlans";
import TopicPillsComponent from "../components/TopicPillsComponent";
import { findDailyPlansForMealPlan} from "../actions/dailyPlanActions";
import { findDailyPlan } from "../actions/dailyPlanActions";
import { findMealPlanById } from "../actions/mealPlanActions";
import { findLessonsForModule } from "../actions/lessonActions";
import { findLesson } from "../actions/lessonActions"
import { findTopicsForLesson } from "../services/TopicService";
import { findTopicForLesson } from "../actions/topicActions";
import { findTopic } from "../actions/topicActions";
import { findWidgetForTopic} from "../actions/widgetActions"
import WidgetComponent from "../components/WidgetComponent";
import "../App.css";


class MealPlanEditor extends React.Component {
    componentDidMount() {
        console.log(this.props)
        const mealPlanId = this.props.match.params.mealPlanId
        debugger
        const dailyPlanId = this.props.match.params.dailyPlanId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        this.props.findMealPlanById(mealPlanId)
        this.props.findDailyPlansForMealPlan(mealPlanId)
        if (dailyPlanId) {
            this.props.findDailyPlan(dailyPlanId)
            this.props.findLessonsForModule(dailyPlanId)
        }
        if (lessonId) {
            this.props.findLessonById(lessonId)
            this.props.findTopicsForLesson(lessonId)
        }
        if (topicId) {
            this.props.findTopicById(topicId)
            this.props.findWidgetsForTopic(topicId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const dailyPlanId = this.props.match.params.dailyPlanId
        const previousDailyPlanId = prevProps.match.params.dailyPlanId
        if (dailyPlanId !== previousDailyPlanId) {
            this.props.findLessonsForModule(dailyPlanId)
        }
        const lessonId = this.props.match.params.lessonId
        const previousLessonId = prevProps.match.params.lessonId
        if (lessonId !== previousLessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        const topicId = this.props.match.params.topicId
        console.log(topicId);
        const previousTopicId = prevProps.match.params.topicId
        if (topicId !== previousTopicId) {
            this.props.findWidgetsForTopic(topicId)
        }
    }

    render() {
        return (
            <div className="fixed">
                <h2>
                <a className="editor-header" href="#">Meal Plan Editor</a>
                </h2>
                <div className="row">
                    <div className="col-4">
                    <DailyPlans />
                    </div>
                    <div className="col-8">
                        <Meals />
                        <TopicPillsComponent />
                        <WidgetComponent />
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({
    findDailyPlansForMealPlan: (mealPlanId) => findDailyPlansForMealPlan(dispatch, mealPlanId),
    findMealPlanById: (mealPlanId) => findMealPlanById(dispatch, mealPlanId),
    findDailyPlan: (dailyPlanId) => findDailyPlan(dispatch, dailyPlanId),
    findLessonsForModule: (dailyPlanId) => findLessonsForModule(dispatch, dailyPlanId),
    findLessonById: (lessonId) => findLesson(dispatch, lessonId),
    findTopicsForLesson: (lessonId) => findTopicForLesson(dispatch, lessonId),
    findWidgetsForTopic: (topicId) => findWidgetForTopic(dispatch, topicId),
    findTopicById: (topicId) => findTopic(dispatch, topicId),
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (MealPlanEditor)
