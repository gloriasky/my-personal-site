import {combineReducers} from "redux";
import * as projectsReducer from './projectsReducer'

export default combineReducers({
    projects: projectsReducer.getProjects
})
