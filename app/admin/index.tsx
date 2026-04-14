import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../utils/colors';

export default function AdminHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightBackground,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 20,
    fontWeight: '700',
  },
});