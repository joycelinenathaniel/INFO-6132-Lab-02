import { View, Text } from 'react-native';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My To-Dos</Text>
      </View>
    </View>
  );
}
