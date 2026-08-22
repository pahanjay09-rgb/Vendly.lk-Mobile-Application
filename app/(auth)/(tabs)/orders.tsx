import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const filters = ['All', 'Pending', 'Shipped', 'Delivered', 'Cancelled'];

const orders = [
  { id: '432', customer: 'Dinithi', item: 'Nike boots x 1', status: 'Pending', price: 'LKR 500' },
  { id: '433', customer: 'Venuja', item: 'Nike bottles x 1', status: 'Shipped', price: 'LKR 700' },
  { id: '434', customer: 'Dananjaya', item: 'Nike bags x 1', status: 'Delivered', price: 'LKR 1500' },
  { id: '435', customer: 'Kamal', item: 'Nike caps x 1', status: 'Pending', price: 'LKR 400' },
];

const statusColors: Record<string, string> = {
  Pending: '#E8A500',
  Shipped: '#005299',
  Delivered: '#2FA84F',
  Cancelled: '#E24C4C',
};

export default function OrdersScreen() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredOrders = orders.filter((o) => {
    const matchesFilter = activeFilter === 'All' || o.status === activeFilter;
    const matchesSearch = o.customer.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Orders</Text>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color="#888888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search orders..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.filterRow}>
        {filters.map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filterChip, activeFilter === f && styles.filterChipActive]}
            onPress={() => setActiveFilter(f)}
          >
            <Text style={[styles.filterText, activeFilter === f && styles.filterTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.orderCard}>
            <View style={styles.avatar}>
              <Ionicons name="person-outline" size={20} color="#888888" />
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.customerName}>{item.customer}</Text>
              <Text style={styles.orderItem}>{item.item}</Text>
              <Text style={styles.orderId}>#{item.id}</Text>
            </View>
            <View style={styles.orderRight}>
              <View style={[styles.statusBadge, { backgroundColor: statusColors[item.status] + '20' }]}>
                <Text style={[styles.statusText, { color: statusColors[item.status] }]}>{item.status}</Text>
              </View>
              <Text style={styles.orderPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', paddingTop: 60, paddingHorizontal: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 16 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, gap: 8, marginBottom: 14 },
  searchInput: { flex: 1, fontSize: 14 },
  filterRow: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  filterChip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#FFFFFF' },
  filterChipActive: { backgroundColor: '#005299' },
  filterText: { fontSize: 13, color: '#888888' },
  filterTextActive: { color: '#FFFFFF', fontWeight: '600' },
  list: { paddingBottom: 20 },
  orderCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 14, marginBottom: 10, gap: 12 },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#F0F0F0', alignItems: 'center', justifyContent: 'center' },
  orderInfo: { flex: 1 },
  customerName: { fontSize: 15, fontWeight: '600', color: '#1A1A1A' },
  orderItem: { fontSize: 12, color: '#888888', marginTop: 2 },
  orderId: { fontSize: 11, color: '#AAAAAA', marginTop: 2 },
  orderRight: { alignItems: 'flex-end', gap: 6 },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  statusText: { fontSize: 11, fontWeight: '600' },
  orderPrice: { fontSize: 14, fontWeight: '600', color: '#1A1A1A' },
});