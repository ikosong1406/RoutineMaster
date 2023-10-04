import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="#00A5CF" />
      </View>
      <View style={styles.dailyOverview}>
        <Text style={styles.sectionTitle}>Daily Overview</Text>
        <View style={styles.activityCard}>
          <Ionicons name="book-outline" size={24} color="#00A5CF" />
          <Text>10:00 AM</Text>
          <Text>Reading</Text>
          <Text>Read a chapter from a book</Text>
        </View>
        <View style={styles.activityCard}>
          <Ionicons name="bicycle-outline" size={24} color="#00A5CF" />
          <Text>02:00 PM</Text>
          <Text>Exercise</Text>
          <Text>Go for a bike ride</Text>
        </View>
        {/* Add more activity cards here */}
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Activity</Text>
      </TouchableOpacity>
      {/* Upcoming Reminders */}
      {/* Empty State Message */}
      <View style={styles.quickAccessIcons}>
        <Ionicons name="star-outline" size={36} color="#00A5CF" />
        <Ionicons name="heart-outline" size={36} color="#00A5CF" />
        <Ionicons name="bookmark-outline" size={36} color="#00A5CF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  createNewButton: {
    backgroundColor: '#00A5CF',
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  createNewButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dailyOverview: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  activityCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#FFA500',
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quickAccessIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
});

export default HomeScreen;
