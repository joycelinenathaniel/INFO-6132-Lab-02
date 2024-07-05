import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import TaskList from './components/TaskList';
import AppLoader from './components/AppLoader';
import * as SplashScreen from 'expo-splash-screen';

import { useState } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (id, description, completed) => {
    const newTask = {
      description: description,
      id: id,
      completed: completed,
    };

    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
  };

  const handleStatusChange = (value, id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = value;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handlePostDelete = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <>
      <View style={styles.container}>
        <AppLoader
          setTasks={setTasks}
        />
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.form}>
          <Form onAddTask={handleAddTask} />
        </View>
        <View style={styles.taskList}>
          <TaskList
            tasks={tasks}
            onStatusChange={handleStatusChange}
            onTaskDelete={handlePostDelete}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  header: {
    height: 100,
  },
  form: {
    height: 175,
  },
  taskList: {
    flex: 4,
    paddingTop: 16,
  },
});
