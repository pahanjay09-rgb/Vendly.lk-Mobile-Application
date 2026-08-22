import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

const categories = [
  { id: 'fashion', icon: '👗', name: 'Clothing & Fashion', desc: 'Apparel, accessories, shoes' },
  { id: 'food', icon: '🍽️', name: 'Food & Beverage', desc: 'Restaurants, catering, delivery' },
  { id: 'beauty', icon: '💄', name: 'Beauty & Cosmetics', desc: 'Skincare, makeup, salon' },
  { id: 'electronics', icon: '📱', name: 'Electronics', desc: 'Phones, gadgets, accessories' },
  { id: 'home', icon: '🛋️', name: 'Home & Lifestyle', desc: 'Furniture, decor, appliances' },
  { id: 'general', icon: '🏬', name: 'General Retail', desc: 'Mixed products & services' },
];

export default function BusinessCategoryScreen() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What's your business?</Text>
      <Text style={styles.subtitle}>Select your business category so we can personalize your experience</Text>

      <ScrollView style={styles.list}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[styles.card, selected === cat.id && styles.cardSelected]}
            onPress={() => setSelected(cat.id)}
          >
            <Text style={styles.cardIcon}>{cat.icon}</Text>
            <View>
              <Text style={styles.cardName}>{cat.name}</Text>
              <Text style={styles.cardDesc}>{cat.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[styles.continueButton, !selected && styles.continueButtonDisabled]}
        disabled={!selected}
        onPress={() => router.push('/')}
      >
        <Text style={styles.continueButtonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 24, paddingTop: 60 },
  heading: { fontSize: 20, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 6 },
  subtitle: { fontSize: 13, color: '#888888', marginBottom: 20 },
  list: { flex: 1 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 14, borderWidth: 1, borderColor: '#DDDDDD', borderRadius: 10, padding: 14, marginBottom: 12 },
  cardSelected: { borderColor: '#005299', backgroundColor: '#E8F0FE' },
  cardIcon: { fontSize: 24 },
  cardName: { fontSize: 15, fontWeight: '600', color: '#1A1A1A' },
  cardDesc: { fontSize: 12, color: '#888888', marginTop: 2 },
  continueButton: { backgroundColor: '#005299', paddingVertical: 16, borderRadius: 8, alignItems: 'center', marginVertical: 16 },
  continueButtonDisabled: { backgroundColor: '#CCCCCC' },
  continueButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});