import './App.css';
import Title from './components/Title';
import React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Title title="今日のできごと" />
      </View>
    );
  }
}
