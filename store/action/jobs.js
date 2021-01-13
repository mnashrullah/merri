export const SEARCH_JOB = 'SEARCH_JOB';
export const DEFAULT_JOB = 'DEFAULT_JOB';

export const searchJob = query =>{
    return {type: SEARCH_JOB, query: query};
}

export const getJobs = () =>{
    return {type: DEFAULT_JOB}
}
