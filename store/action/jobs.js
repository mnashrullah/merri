export const SEARCH_JOB = 'SEARCH_JOB';
export const DEFAULT_JOB = 'DEFAULT_JOB';

export const searchJob = (querySearch, queryFulltime, queryLocation) => {
    return {
        type: SEARCH_JOB,
        query: {
            querySearch: querySearch,
            queryFulltime: queryFulltime,
            queryLocation: queryLocation
        }
    };
}

export const getJobs = () => {
    return { type: DEFAULT_JOB }
}
