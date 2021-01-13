import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import JobItem from '../components/JobItem';
import * as jobActions from '../store/action/jobs';
import Colors from '../constants/Colors';


const JobsScreen = props => {
    const dispatch = useDispatch();
    dispatch(jobActions.getJobs());
    const jobs = useSelector(state => state.jobs.jobs)

    const [value, onChangeText] = React.useState('');

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [valueLocation, onChangeTextLocation] = React.useState('');



    return (
        <View>
            <View>
                <TextInput style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder="Search"
                />
                <View style={styles.filterContainer}>
                    <View style={styles.container}>
                        <Text>Full Time</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text>Location</Text>
                        <TextInput style={styles.inputLocation}
                            onChangeText={text => onChangeTextLocation(text)}
                            value={valueLocation}
                            placeholder="Search location"
                        />
                    </View>
                    <View>
                        <Button
                            color={Colors.primary}
                            title="Apply Filter"
                            onPress={()=>{
                                // dispatch(jobActions.searchJob(value, isEnabled? 'on': 'off', valueLocation))
                            }}
                        />
                    </View>

                </View>
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
    input: {
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        backgroundColor: 'white'
    },
    inputLocation: {
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        backgroundColor: 'white',
        width: '80%'

    },
    filterContainer: {
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'gray',
        borderWidth: 0.5,
        backgroundColor: 'white'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
export default JobsScreen;