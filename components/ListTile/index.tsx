import { FC, useCallback, useState } from 'react';
import { Pressable, useColorScheme, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import ConfirmationModal from '@/components/ConfirmationModal';
import LocationEntity from '@/entities/locationsEntity';
import { useAppDispatch } from '@/hooks/useStore';
import { locationsActions } from '@/store/locations/slice';
import styles from './styles';

interface Props {
  location: LocationEntity;
}

const ListTile: FC<Props> = ({ location: { name, id } }) => {
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = useCallback(
    (id: string) => {
      dispatch(locationsActions.removeLocation(id));
      setModalVisible(false);
    },
    [dispatch],
  );

  const handleCancel = () => setModalVisible(false);

  const handleOpenModal = () => setModalVisible(true);

  return (
    <View
      style={[
        styles.container,
        { borderColor: Colors[colorScheme ?? 'light'].text },
      ]}
    >
      <View style={styles.tileName}>
        <ThemedText numberOfLines={1}>{name}</ThemedText>
      </View>
      <View style={styles.tileActions}>
        <AntDesign name="infocirlceo" size={24} color={Colors.light.primary} />
        <Pressable onPress={handleOpenModal}>
          <AntDesign name="delete" size={24} color="red" />
        </Pressable>
      </View>
      <ConfirmationModal
        visible={modalVisible}
        title="Are you sure, you want to delete this location?"
        onConfirm={() => handleConfirm(id)}
        onCancel={handleCancel}
      />
    </View>
  );
};

export default ListTile;
