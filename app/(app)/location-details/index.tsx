import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { useAppSelector } from '@/hooks/useStore';
import { selectLocationById } from '@/store/locations/slice';
import { ThemedText } from '@/components/ThemedText';
import styles from './styles';

const LocationDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const location = useAppSelector((state) => selectLocationById(state, id));

  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>Name:</ThemedText>
      <View style={styles.row}>
        <Text numberOfLines={2} style={[styles.value, styles.valueBold]}>
          {location?.name}
        </Text>
      </View>
      <ThemedText style={styles.label}>Country:</ThemedText>
      <View style={styles.row}>
        <Text numberOfLines={2} style={styles.value}>
          {location?.country}
        </Text>
      </View>
      <ThemedText style={styles.label}>City:</ThemedText>
      <View style={styles.row}>
        <Text numberOfLines={2} style={styles.value}>
          {location?.city}
        </Text>
      </View>
      <ThemedText style={styles.label}>State:</ThemedText>
      <View style={styles.row}>
        <Text numberOfLines={3} style={styles.value}>
          {location?.state}
        </Text>
      </View>
      <ThemedText style={styles.label}>Address:</ThemedText>
      <View style={styles.row}>
        <Text numberOfLines={2} style={styles.value}>
          {location?.address}
        </Text>
      </View>
    </View>
  );
};

export default LocationDetailsScreen;
