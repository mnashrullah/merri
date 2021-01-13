import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import JobItem from '../components/JobItem';
import * as jobActions from '../store/action/jobs';

const JobsScreen = props => {
    const dispatch = useDispatch();
    dispatch(jobActions.getJobs());
    const jobs = useSelector(state => state.jobs.jobs)
    const [value, onChangeText] = React.useState('');


    return (
        <View>
            <View>
                <TextInput style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder="Search"
                />

            </View>
            <FlatList
                data={jobs}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <JobItem
                        title={item.title}
                        company={item.company}
                        location={item.location}
                        image={item.company_logo}
                        onViewDetail={() => {
                            props.navigation.navigate('JobDetail', {
                                jobId: item.id,
                                jobTitle: item.title
                            })
                        }}
                    />
                )}
            />
        </View>
    )
}
JobsScreen.navigationOptions = props => {
    return {
        headerTitle: 'JOB LIST'
    }
}
const styles = StyleSheet.create({
    input:{
        borderRadius: 10, 
        padding: 10,
        marginLeft: 10, 
        marginRight: 10,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 0.5, 
        backgroundColor: 'white'
    }
})
export default JobsScreen;