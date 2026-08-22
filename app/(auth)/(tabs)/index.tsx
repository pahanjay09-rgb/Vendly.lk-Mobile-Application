import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.greeting}>Good morning 👋</Text>
          <Text style={styles.storeName}>Pahan's Fashion Store</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={20} color="#1A1A1A" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-outline" size={20} color="#1A1A1A" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.revenueCard}>
        <Text style={styles.revenueLabel}>TODAY'S REVENUE</Text>
        <Text style={styles.revenueAmount}>LKR 4,820</Text>
        <Text style={styles.revenueChange}>↑ 18% vs yesterday</Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statBox}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>New Orders</Text>
            <Ionicons name="cube-outline" size={16} color="#005299" />
          </View>
          <Text style={styles.statValue}>24</Text>
          <Text style={styles.statSubtext}>↑ 3 today</Text>
        </View>

        <View style={styles.statBox}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>Pending COD</Text>
            <Ionicons name="cash-outline" size={16} color="#E8A500" />
          </View>
          <Text style={styles.statValue}>12 orders</Text>
        </View>

        <View style={styles.statBox}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>Delivered</Text>
            <Ionicons name="checkmark-circle-outline" size={16} color="#2FA84F" />
          </View>
          <Text style={styles.statValue}>Today</Text>
        </View>

        <View style={styles.statBox}>
          <View style={styles.statHeader}>
            <Text style={styles.statLabel}>Cancelled</Text>
            <Ionicons name="close-circle-outline" size={16} color="#E24C4C" />
          </View>
          <Text style={styles.statValue}>COD issues</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsGrid}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="add-circle-outline" size={22} color="#005299" />
          <Text style={styles.actionText}>New Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="sparkles-outline" size={22} color="#005299" />
          <Text style={styles.actionText}>AI Assistant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bar-chart-outline" size={22} color="#005299" />
          <Text style={styles.actionText}>Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bicycle-outline" size={22} color="#005299" />
          <Text style={styles.actionText}>Couriers</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  content: { padding: 20, paddingTop: 60 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
  greeting: { fontSize: 14, color: '#888888' },
  storeName: { fontSize: 20, fontWeight: 'bold', color: '#1A1A1A', marginTop: 2 },
  headerIcons: { flexDirection: 'row', gap: 10 },
  iconButton: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  revenueCard: { backgroundColor: '#005299', borderRadius: 14, padding: 18, marginBottom: 16 },
  revenueLabel: { color: '#CDE2F5', fontSize: 12, fontWeight: '600', letterSpacing: 0.5 },
  revenueAmount: { color: '#FFFFFF', fontSize: 28, fontWeight: 'bold', marginTop: 6 },
  revenueChange: { color: '#A8D4FF', fontSize: 13, marginTop: 4 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 24 },
  statBox: { width: '48%', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 14, marginBottom: 12 },
  statHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statLabel: { fontSize: 12, color: '#888888' },
  statValue: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A', marginTop: 8 },
  statSubtext: { fontSize: 11, color: '#2FA84F', marginTop: 2 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#1A1A1A', marginBottom: 12 },
  actionsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  actionButton: { width: '48%', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, alignItems: 'center', marginBottom: 12, gap: 6 },
  actionText: { fontSize: 13, fontWeight: '600', color: '#1A1A1A' },
});