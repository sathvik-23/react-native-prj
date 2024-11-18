import {Text, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
