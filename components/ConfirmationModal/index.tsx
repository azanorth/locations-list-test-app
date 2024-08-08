import { FC } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import styles from './styles';

interface Props {
  visible: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: FC<Props> = ({
  visible,
  title,
  onConfirm,
  onCancel,
}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onCancel}
  >
    <Pressable style={styles.centeredView} onPress={onCancel}>
      <ThemedView style={styles.modalView}>
        <ThemedText type="defaultSemiBold" style={styles.modalTitle}>
          {title}
        </ThemedText>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={onConfirm}>
            <Text style={styles.buttonText}>Yes</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={onCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
      </ThemedView>
    </Pressable>
  </Modal>
);

export default ConfirmationModal;
