import { View, StyleSheet } from 'react-native';
import NumberButton from './components/NumberButton'
import FunctionButton from './components/FunctionButton';

export default function App() {
  // Function to render a row of buttons
  const renderButton = (numbers) => {
    return (
      <View style={styles.buttonRow}>
        {numbers.map((item) => {
          // Check if the text is a number or a text
          const isNumber = !isNaN(parseInt(item));
          return isNumber ? (<NumberButton key={item} number={item} />) : (<FunctionButton key={item} symbol={item} />);
        })}
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
      <View style={styles.footer}>
        {renderButton(['C', '()', '%', '/'])}
        {renderButton([7, 8, 9, 'x'])}
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
});
