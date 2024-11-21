import {Text, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import FancyCards2 from './components/FancyCards2';
import FancyCards3 from './components/FancyCards3';
import FancyCards4 from './components/FancyCards4';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {/* <FlatCards />
          <ElevatedCards /> */}
          <FancyCards />
          <FancyCards2 />
          <FancyCards3 />
          <FancyCards4 />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
