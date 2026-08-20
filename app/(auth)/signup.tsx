import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function SignupScreen() {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Start your free trial</Text>
      <Text style={styles.subtitle}>Set up your Vendly.lk account in minutes</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={fullName} onChangeText={setFullName} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Business Name</Text>
        <TextInput style={styles.input} value={businessName} onChangeText={setBusinessName} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      </View>

      <TouchableOpacity style={styles.checkboxRow} onPress={() => setAgreed(!agreed)}>
        <View style={[styles.checkbox, agreed && styles.checkboxChecked]} />
        <Text style={styles.checkboxText}>
          I agree to Vendly.lk's Terms of Service and Privacy Policy
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push('/verify-otp')}
      >
        <Text style={styles.createButtonText}>Create Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  backArrow: { fontSize: 24, marginBottom: 24 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#888888', marginBottom: 28 },
  inputGroup: { marginBottom: 16 },
  label: { fontSize: 14, color: '#333333', marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#DDDDDD', borderRadius: 8, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15 },
  checkboxRow: { flexDirection: 'row', alignItems: 'flex-start', marginVertical: 16, gap: 10 },
  checkbox: { width: 18, height: 18, borderWidth: 1, borderColor: '#DDDDDD', borderRadius: 4, marginTop: 2 },
  checkboxChecked: { backgroundColor: '#005299', borderColor: '#005299' },
  checkboxText: { flex: 1, fontSize: 13, color: '#666666' },
  createButton: { backgroundColor: '#005299', paddingVertical: 16, borderRadius: 8, alignItems: 'center', marginTop: 8 },
  createButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});