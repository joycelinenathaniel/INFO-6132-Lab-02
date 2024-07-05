import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { Keyboard } from 'react-native';
import * as database from '../../database';

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const handleAddPress = async () => {
    const validate = [];

    //Validate the data
    if (description === '') {
      validate.push('The description is required.');
    }

    if (validate.length > 0) {
      setErrorMessages(validate);
    } else {
      const completed = false; 

      const data = {
        description,
        completed
      }

      const id = await database.save(data);

      onAddTask(id, description, completed);

      //Clear up the form
      setDescription('');
      setErrorMessages([]);
      Keyboard.dismiss();
    }
  };

  //Validate input in description text field
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <View style={styles.container}>
      {/* Conditionally display the error message */}
      {errorMessages.length > 0 && (
        <View>
          {errorMessages.map((message, index) => (
            <Text key={index} style={styles.errorMessage.item}>
              Error: {message}
            </Text>
          ))}
        </View>
      )}
      <TextInput
        style={styles.textInput}
        placeholder="Enter a task"
        multiline={false}
        value={description}
        onChangeText={handleDescriptionChange}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddPress}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
