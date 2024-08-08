import { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import CreateLocationForm from '@/features/CreateLocationForm';
import commonStyles from '@/styles/common';
import { Location } from '@/interfaces/location';
import { useAppDispatch } from '@/hooks/useStore';
import { locationsActions } from '@/store/locations/slice';
import { useNavigation } from 'expo-router';

const CreateLocationScreen = () => {
  const dispatch = useAppDispatch();
  const { goBack } = useNavigation();

  const handleSubmit = useCallback(
    (data: Location) => {
      dispatch(locationsActions.addLocation(data));
      goBack();
    },
    [dispatch, goBack],
  );

  return (
    <ThemedView style={commonStyles.flexOne}>
      <CreateLocationForm onSubmit={handleSubmit} />
    </ThemedView>
  );
};

export default CreateLocationScreen;

const styles = StyleSheet.create({});
