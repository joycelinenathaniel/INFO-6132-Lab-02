import { ScrollView, Text, View } from 'react-native';
import TaskItem from './TaskItem';
import styles from './styles';

export default function TaskList({ tasks, onStatusChange, onTaskDelete }) {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {tasks.map((task, index) => {
                    return (
                        <TaskItem
                            key={index}
                            {...task}
                            onStatusChange={onStatusChange}
                            onTaskDelete={onTaskDelete}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}