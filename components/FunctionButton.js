import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const FunctionButton = ({ symbol }) => {
  const handlePress = () => {
    alert(symbol);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{symbol}</Text>
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
    fontSize: 20
  }
})

export default FunctionButton;