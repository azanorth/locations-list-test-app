import { FC } from 'react';
import { useColorScheme, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import styles from './styles';

interface Props {
  id: number;
}

const ListTile: FC<Props> = ({ id }) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        { borderColor: Colors[colorScheme ?? 'light'].text },
      ]}
    >
      <View style={styles.tileName}>
        <ThemedText numberOfLines={1}>Some place {`num ${id}`}</ThemedText>
      </View>
      <View style={styles.tileActions}>
        <AntDesign name="infocirlceo" size={24} color={Colors.light.primary} />
        <AntDesign name="delete" size={24} color="red" />
      </View>
    </View>
  );
};

export default ListTile;
