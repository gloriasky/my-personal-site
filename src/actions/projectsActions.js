import axiosConfig from "../apis/axiosConfig";

export const createNewProject = project => dispatch => {

    axiosConfig.post('/projects/create', project).then(response => {
        dispatch (
            {type: 'CREATE_NEW_PROJECT'}
        )
    }).catch(error => {
        dispatch ({
            type: 'ERROR_CREATE_NEW_PROJECT',
            error: error.data
        })
    })


}
