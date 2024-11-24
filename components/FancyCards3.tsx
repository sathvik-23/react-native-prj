import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCardsMysorePalace() {
  return (
    <View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Mysore_Palace_Night.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mysore Palace</Text>
          <Text style={styles.cardLabel}>Mysuru, Karnataka</Text>
          <Text style={styles.cardDescription}>
            The Mysore Palace is a historical palace and the royal residence of
            the Wadiyar dynasty. It is one of the most visited monuments in
            India, famous for its Indo-Saracenic architecture and vibrant
            lighting displays.
          </Text>
          <Text style={styles.cardFooter}>4 hours away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
  },
});
