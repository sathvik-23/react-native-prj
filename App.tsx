import {Text, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import FancyCards2 from './components/FancyCards2';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <FancyCards2 />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
