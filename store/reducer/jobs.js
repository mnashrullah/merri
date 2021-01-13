import Jobs from '../../models/jobs';
import {DEFAULT_JOB, SEARCH_JOB} from '../action/jobs';
import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const initialState = {
    jobs: []
}

export default (state = initialState, action )=>{
    switch (action.type) {
        case DEFAULT_JOB: 
        const [isLoading, setLoading] = useState(true);
        const [data, setData] = useState([]);
        useEffect(()=>{
            fetch('https://jobs.github.com/positions.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, []);
        
        return {
            ...state, 
            jobs: data
        }   
    }    
    return state
}
