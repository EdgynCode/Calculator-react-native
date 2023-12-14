import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import NumberButton from './components/NumberButton'
import FunctionButton from './components/FunctionButton';

export default function App() {
  // State to hold the current input or result
  const [display, setDisplay] = useState('');
  
  // Function to render a row of buttons
  const renderButton = (numbers) => {
    return (
      <View style={styles.buttonRow}>
        {numbers.map((item) => {
          // Check if the text is a number or a text
          const isNumber = !isNaN(parseInt(item));
          return isNumber ? (<NumberButton key={item} number={item} setDisplay={setDisplay} />)
          : (<FunctionButton key={item} symbol={item} setDisplay={setDisplay} />);
        })}
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.display}>{display}</Text>
      </View>
      <View style={styles.footer}>
        {renderButton(['C', '()', '%', '÷'])}
        {renderButton([7, 8, 9, '×'])}
        {renderButton([4, 5, 6, '-'])}
        {renderButton([1, 2, 3, '+'])}
        {renderButton(['±', 0, '.', '='])}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  header: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#FA9F42',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  display: {
    fontSize: 40,
    color: '#333',
    alignSelf: 'flex-end',
    paddingRight: 10
  }
});
