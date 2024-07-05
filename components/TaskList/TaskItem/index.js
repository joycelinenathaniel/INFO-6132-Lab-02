import { View, Text, Switch, Pressable, Alert } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import * as database from '../../../database';

export default function TaskItem({
  description,
  id,
  completed,
  onStatusChange,
  onTaskDelete,
}) {
  const [showModal, setShowModal] = useState(false);

  //Change the status of an item
  const handleStatusChange = async () => {
    //Assume that the data was updated
    onStatusChange(!completed, id);

    //Update the data in firebase
    const updated = await database.update(id, { completed: !completed });

    if (!updated) {
      onStatusChange(!completed, id);
      Alert.alert('Error', 'There was an error trying to update the task!');
    }
  };

  //Show confirmation modal
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  //Delete a task
  const handleDeletePress = () => {
    Alert.alert(
      'Delete Task',
      `Are you sure you want to delete "${description}"?`,
      [
        {
          text: 'Yes',
          onPress: async () => {
            const deleted = await database.remove(id);
            if (!deleted) {
              Alert.alert('Error', 'There was an error trying to delete the task. Please try again later.');
            } else {
              onTaskDelete(id);
            }
            handleModalToggle();
          },
        },
        {
          text: 'No',
        },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.switch}>
        <Switch
          value={completed}
          onValueChange={handleStatusChange}
        />
        <Pressable onPress={handleStatusChange}>
          <Text style={styles.completed}>
            {completed ? 'Completed' : 'Open'}
          </Text>
        </Pressable>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonContainer}>
        <MaterialIcons.Button
          name="delete-sweep"
          size={28}
          color="#cc0000"
          backgroundColor="#E3F0FA"
          underlayColor="#ffdddd"
          onPress={handleDeletePress}
        />
      </View>
    </View>
  );
}
