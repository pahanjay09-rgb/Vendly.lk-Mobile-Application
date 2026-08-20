import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useState, useRef } from 'react';

export default function VerifyOtpScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Verification</Text>

      <View style={styles.iconBox}>
        <Text style={styles.iconEmoji}>💬</Text>
      </View>

      <Text style={styles.title}>Enter OTP Code</Text>
      <Text style={styles.subtitle}>We sent a 6-digit code to{'\n'}+971 50*****</Text>

      <View style={styles.otpRow}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => { inputRefs.current[index] = ref; }}
            style={styles.otpBox}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="number-pad"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify Code</Text>
      </TouchableOpacity>

      <Text style={styles.resendText}>
        Didn't receive it? <Text style={styles.resendLink}>Resend in 0:45</Text>
      </Text>

      <Text style={styles.expiryText}>🔒 Your code expires in 9:15</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 24, paddingTop: 60 },
  backArrow: { fontSize: 24, marginBottom: 24 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 32 },
  iconBox: { width: 60, height: 60, borderRadius: 12, backgroundColor: '#E8F0FE', alignItems: 'center', justifyContent: 'center', marginBottom: 20, alignSelf: 'center' },
  iconEmoji: { fontSize: 28 },
  title: { fontSize: 18, fontWeight: '600', color: '#1A1A1A', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#888888', textAlign: 'center', marginBottom: 32 },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  otpBox: { width: 45, height: 55, borderWidth: 1, borderColor: '#DDDDDD', borderRadius: 8, fontSize: 20, fontWeight: '600' },
  verifyButton: { backgroundColor: '#005299', paddingVertical: 16, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  verifyButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  resendText: { textAlign: 'center', fontSize: 14, color: '#888888', marginBottom: 12 },
  resendLink: { color: '#005299', fontWeight: '600' },
  expiryText: { textAlign: 'center', fontSize: 13, color: '#888888' },
});