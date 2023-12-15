import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const NumberButton = ({ number, setOutput  }) => {
  const handlePress = () => {
    setOutput((prevDisplay) => prevDisplay + number);
  }
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
  },
  text: {
    fontSize: 30
  }
})

export default NumberButton;