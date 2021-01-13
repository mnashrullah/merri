import React from 'react';
import { Text, ScrollView, View, StyleSheet, Image, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import HTML from "react-native-render-html";

const JobDetailScreen = props => {
    const jobId = props.navigation.getParam('jobId');
    const selectedJob = useSelector(state => state.jobs.jobs.find(job => job.id === jobId));
    const url = selectedJob.company_url;

    return (
        <ScrollView>
            <View>
                <Text style={styles.company}>
                    {selectedJob.company}
                </Text>
                <View style={styles.job}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: selectedJob.company_logo }} />
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.title}>{selectedJob.title}</Text>
                        <Text style={styles.location}>{selectedJob.location}</Text>
                        {/* <Text style={styles.url} onPress={()=> Linking.openURL({selectedJob.company_url})></Text> */}
                        <Text style={styles.url}
                            onPress={() => Linking.openURL(url)}>
                            Go To Website
                    </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.company}>Job Specification</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.caption}>Title</Text>
                    <Text style={styles.body}>{selectedJob.title}</Text>
                    <Text style={styles.caption}>Full Time</Text>
                    <Text style={styles.body}>{selectedJob.type}</Text>
                    <Text style={styles.caption}>Description</Text>
                    {/* <Text style={styles.body}>{selectedJob.description}</Text> */}
                    <View  style={styles.body} >
                        <HTML source={{ html: selectedJob.description }}/>
                    </View>
                    
                </View>
            </View>

        </ScrollView>

    )
}

JobDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: 'JOB DETAIL'
    }
}
const styles = StyleSheet.create({
    job: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
    },
    box:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
    },
    url: {
        color: 'blue'
    },
    description: {
        width: '70%',
        padding: 10
    },
    image: {
        height: '90%',
        width: '90%',
    },
    imageContainer: {
        width: '30%',
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    company: {
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    location: {
        fontSize: 14,
        color: '#888'
    },
    caption:{
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        fontSize: 14,
        color: '#888'
    },
    body: {
        paddingLeft: 10,
        paddingTop: 5,
        paddingRight: 10,
        fontSize: 14,
    }

});

export default JobDetailScreen;