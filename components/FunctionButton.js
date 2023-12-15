import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const FunctionButton = ({ symbol, output, setOutput }) => {
  const handlePress = () => {
    switch (symbol) {
      case 'C':
        setOutput('');
        break;
      case '.':
        setOutput((prevOutput) => prevOutput + symbol);
        break;
      case '()':
        if (output.startsWith('(') && output.endsWith(')')) {
          // remove '(' and ')'
          setOutput(output.slice(1, -1));
        }
        else setOutput(`(${output})`);
        break;
      case '±':
        if (!output.startsWith('-')) {
          setOutput(`-${output}`);
        } else setOutput(output.slice(1));
        break;
      default:
        alert(symbol);
    }
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
    fontSize: 30
  }
})

export default FunctionButton;