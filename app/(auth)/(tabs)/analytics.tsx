import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const topProducts = [
  { name: 'Nike Boots', sold: 34, revenue: 'LKR 17,000' },
  { name: 'Nike Bags', sold: 22, revenue: 'LKR 33,000' },
  { name: 'Nike Caps', sold: 18, revenue: 'LKR 7,200' },
];

const weeklyData = [
  { day: 'Mon', value: 40 },
  { day: 'Tue', value: 65 },
  { day: 'Wed', value: 50 },
  { day: 'Thu', value: 80 },
  { day: 'Fri', value: 95 },
  { day: 'Sat', value: 70 },
  { day: 'Sun', value: 55 },
];

export default function AnalyticsScreen() {
  const maxValue = Math.max(...weeklyData.map((d) => d.value));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Analytics</Text>

      <View style={styles.summaryRow}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryValue}>LKR 80,000</Text>
          <Text style={styles.summaryLabel}>This Month</Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryValue}>150</Text>
          <Text style={styles.summaryLabel}>Orders</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Weekly Sales</Text>
      <View style={styles.chartCard}>
        <View style={styles.chartRow}>
          {weeklyData.map((d) => (
            <View key={d.day} style={styles.barColumn}>
              <View style={[styles.bar, { height: (d.value / maxValue) * 100 }]} />
              <Text style={styles.barLabel}>{d.day}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.sectionTitle}>Top Products</Text>
      {topProducts.map((p) => (
        <View key={p.name} style={styles.productRow}>
          <View style={styles.productIcon}>
            <Ionicons name="cube-outline" size={18} color="#005299" />
          </View>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{p.name}</Text>
            <Text style={styles.productSold}>{p.sold} sold</Text>
          </View>
          <Text style={styles.productRevenue}>{p.revenue}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  content: { padding: 20, paddingTop: 60, paddingBottom: 40 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 16 },
  summaryRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  summaryBox: { flex: 1, backgroundColor: '#005299', borderRadius: 12, padding: 16 },
  summaryValue: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' },
  summaryLabel: { fontSize: 12, color: '#CDE2F5', marginTop: 4 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#1A1A1A', marginBottom: 12 },
  chartCard: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 24 },
  chartRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 120 },
  barColumn: { alignItems: 'center', flex: 1 },
  bar: { width: 16, backgroundColor: '#005299', borderRadius: 4, minHeight: 4 },
  barLabel: { fontSize: 11, color: '#888888', marginTop: 6 },
  productRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 14, marginBottom: 10, gap: 12 },
  productIcon: { width: 38, height: 38, borderRadius: 10, backgroundColor: '#E8F0FE', alignItems: 'center', justifyContent: 'center' },
  productInfo: { flex: 1 },
  productName: { fontSize: 14, fontWeight: '600', color: '#1A1A1A' },
  productSold: { fontSize: 12, color: '#888888', marginTop: 2 },
  productRevenue: { fontSize: 14, fontWeight: '600', color: '#1A1A1A' },
});