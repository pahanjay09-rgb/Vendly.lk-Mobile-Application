import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
// klllllll
export default function WelcomeScreen() {
  return (
    <LinearGradient
      colors={['#005299', '#0074D9']}
      style={styles.container}
    >
      <View style={styles.logoSection}>
        <Text style={styles.logo}>V</Text>
        <Text style={styles.brandName}>Vendly.lk</Text>
        <Text style={styles.tagline}>Grow Local, Think Digital</Text>

        <View style={styles.featuresRow}>
          <View style={styles.featureItem}>
            <Ionicons name="document-text-outline" size={24} color="#FFFFFF" />
            <Text style={styles.featureLabel}>Orders</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="cube-outline" size={24} color="#FFFFFF" />
            <Text style={styles.featureLabel}>Inventory</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="people-outline" size={24} color="#FFFFFF" />
            <Text style={styles.featureLabel}>Customers</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="bar-chart-outline" size={24} color="#FFFFFF" />
            <Text style={styles.featureLabel}>Analytics</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.loginText}>I already have an account</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 80,
    paddingHorizontal: 24,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  brandName: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: -20,
  },
  tagline: {
    fontSize: 14,
    color: '#E0E0E0',
    marginTop: 8,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 32,
    paddingHorizontal: 8,
  },
  featureItem: {
    alignItems: 'center',
    gap: 6,
  },
  featureLabel: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  buttonSection: {
    gap: 12,
  },
  getStartedButton: {
    backgroundColor: '#003D73',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});