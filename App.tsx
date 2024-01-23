// Import necessary components and modules
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Define the Tic Tac Toe component
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Function to handle a cell press
  const handleCellPress = (index: number) => {
    if (board[index]) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };


  // Function to render the board cells
  const renderSquare = (index: number) => (
    <TouchableOpacity style={styles.square} onPress={() => handleCellPress(index)}>
      <Text style={styles.squareText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  // Function to determine the winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };
  const renderStatus = () => {
    const winner = calculateWinner(board);
    const status = winner
      ? `Winner: ${winner}`
      : `Next Player: ${isXNext ? 'X' : 'O'}`;

    return <Text style={styles.status}>{status}</Text>;
  };

  return (
    <View style={styles.container}>
            {renderStatus()}

      <View style={styles.board}>
        <View style={styles.column}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.column}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.column}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
    </View>
  );
};

// Updated Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
  },
  square: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  squareText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  column: {
    borderWidth: 1,
    width: 100,  // Increase the width
    height: 100, // Increase the height
  },
});

export default App;