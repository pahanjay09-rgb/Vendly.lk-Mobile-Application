import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const products = [
  { id: '1', name: 'Nike Boots', price: 'LKR 500', stock: 24 },
  { id: '2', name: 'Nike Caps', price: 'LKR 400', stock: 7 },
  { id: '3', name: 'Nike Bags', price: 'LKR 1,500', stock: 0 },
  { id: '4', name: 'Nike Bottles', price: 'LKR 700', stock: 34 },
];

function getStockColor(stock: number) {
  if (stock === 0) return '#E24C4C';
  if (stock <= 10) return '#E8A500';
  return '#2FA84F';
}

export default function InventoryScreen() {
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Inventory</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={18} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color="#888888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <View style={styles.productIcon}>
              <Ionicons name="cube-outline" size={22} color="#888888" />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <View style={styles.stockBox}>
              <Text style={[styles.stockValue, { color: getStockColor(item.stock) }]}>
                {item.stock}
              </Text>
              <Text style={styles.stockLabel}>Stock</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', paddingTop: 60, paddingHorizontal: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A' },
  addButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#005299', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, gap: 4 },
  addButtonText: { color: '#FFFFFF', fontSize: 13, fontWeight: '600' },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10, gap: 8, marginBottom: 16 },
  searchInput: { flex: 1, fontSize: 14 },
  list: { paddingBottom: 20 },
  productCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 14, marginBottom: 10, gap: 12 },
  productIcon: { width: 42, height: 42, borderRadius: 10, backgroundColor: '#F0F0F0', alignItems: 'center', justifyContent: 'center' },
  productInfo: { flex: 1 },
  productName: { fontSize: 15, fontWeight: '600', color: '#1A1A1A' },
  productPrice: { fontSize: 13, color: '#888888', marginTop: 2 },
  stockBox: { alignItems: 'flex-end' },
  stockValue: { fontSize: 16, fontWeight: 'bold' },
  stockLabel: { fontSize: 11, color: '#AAAAAA', marginTop: 2 },
});