

export const getProjects = (state=[], action) => {
    switch (action.type) {
        case 'ERROR_GET_PROJECTS':
            console.log('error: ' + action.error)
            return state;
        case 'GET_PROJECTS':
            return action.projects;
        default:
            return state;
    }
}
