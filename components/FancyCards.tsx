import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class FancyCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={(styles.card, styles.cardElevated)}>
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Mysore</Text>
            <Text style={styles.cardLabel}>Green City, Karnataka</Text>
            <Text style={styles.cardDescription}>
              Mysore Palace was built by the odyars, and it is famos for the
              dusshera celebration during the month of october.
            </Text>
            <Text style={styles.cardFooter}>10 mins away</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {},
  cardElevated: {},
  cardImage: {height: 200},
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
