import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const customers = [
  { id: '1', name: 'Dinithi', orders: 3, spent: 'LKR 500' },
  { id: '2', name: 'Venuja', orders: 1, spent: 'LKR 700' },
  { id: '3', name: 'Dananjaya', orders: 2, spent: 'LKR 1,500' },
  { id: '4', name: 'Kamal', orders: 5, spent: 'LKR 400' },
];

export default function CustomersScreen() {
  const [search, setSearch] = useState('');

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customers</Text>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color="#888888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search customers..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>248</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>186</Text>
          <Text style={styles.statLabel}>Repeat Buyers</Text>
          <Text style={styles.statPercent}>75%</Text>
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.customerCard}>
            <View style={styles.avatar}>
              <Ionicons name="person-outline" size={20} color="#888888" />
            </View>
            <View style={styles.customerInfo}>
              <Text style={styles.customerName}>{item.name}</Text>
              <Text style={styles.customerOrders}>{item.orders} orders</Text>
            </View>
            <Text style={styles.customerSpent}>{item.spent}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', paddingTop: 60, paddingHorizontal: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 16 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, gap: 8, marginBottom: 16 },
  searchInput: { flex: 1, fontSize: 14 },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  statBox: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16 },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
  statLabel: { fontSize: 12, color: '#888888', marginTop: 4 },
  statPercent: { fontSize: 12, color: '#2FA84F', marginTop: 2, fontWeight: '600' },
  list: { paddingBottom: 20 },
  customerCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 14, marginBottom: 10, gap: 12 },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#F0F0F0', alignItems: 'center', justifyContent: 'center' },
  customerInfo: { flex: 1 },
  customerName: { fontSize: 15, fontWeight: '600', color: '#1A1A1A' },
  customerOrders: { fontSize: 12, color: '#888888', marginTop: 2 },
  customerSpent: { fontSize: 14, fontWeight: '600', color: '#1A1A1A' },
});