import axiosConfig from "../apis/axiosConfig";

export const getProjects = () => dispatch => {
    axiosConfig.get('/projects').then(response => {
        dispatch({
            type: 'GET_PROJECTS',
            projects: response.data
        })
    }).catch(error => {
        dispatch({
            type: 'ERROR_GET_PROJECTS',
            error: error.data
        })
    })
}
