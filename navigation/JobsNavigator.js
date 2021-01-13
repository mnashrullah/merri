import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import JobDetailScreen from '../screens/JobDetailScreen';
import JobsScreen from '../screens/JobsScreen';
import Colors from '../constants/Colors';

const JobsNavigator = createStackNavigator({
    Jobs: JobsScreen,
    JobDetail: JobDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
}
)

export default createAppContainer(JobsNavigator);

