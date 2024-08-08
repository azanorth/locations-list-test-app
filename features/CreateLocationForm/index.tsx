import { FC } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Location } from '@/interfaces/location';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import commonStyles from '@/styles/common';
import styles from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string(), // State is optional
  address: Yup.string().required('Address is required'),
});

interface Props {
  onSubmit: (data: Location) => void;
}

const CreateLocationForm: FC<Props> = ({ onSubmit }) => {
  const colorScheme = useColorScheme();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={commonStyles.flexOne}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Formik
          initialValues={{
            name: '',
            country: '',
            city: '',
            state: '',
            address: '',
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              {/* Name */}
              <View style={styles.inputContainer}>
                <ThemedText style={styles.label}>Name:</ThemedText>
                <TextInput
                  style={[
                    styles.input,
                    { color: Colors[colorScheme ?? 'light'].text },
                  ]}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
              </View>

              {/* Country */}
              <View style={styles.inputContainer}>
                <ThemedText style={styles.label}>Country:</ThemedText>
                <TextInput
                  style={[
                    styles.input,
                    { color: Colors[colorScheme ?? 'light'].text },
                  ]}
                  onChangeText={handleChange('country')}
                  onBlur={handleBlur('country')}
                  value={values.country}
                />
                {touched.country && errors.country && (
                  <Text style={styles.errorText}>{errors.country}</Text>
                )}
              </View>

              {/* City */}
              <View style={styles.inputContainer}>
                <ThemedText style={styles.label}>City:</ThemedText>
                <TextInput
                  style={[
                    styles.input,
                    { color: Colors[colorScheme ?? 'light'].text },
                  ]}
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={values.city}
                />
                {touched.city && errors.city && (
                  <Text style={styles.errorText}>{errors.city}</Text>
                )}
              </View>

              {/* State */}
              <View style={styles.inputContainer}>
                <ThemedText style={styles.label}>State:</ThemedText>
                <TextInput
                  style={[
                    styles.input,
                    { color: Colors[colorScheme ?? 'light'].text },
                  ]}
                  onChangeText={handleChange('state')}
                  onBlur={handleBlur('state')}
                  value={values.state}
                />
              </View>

              {/* Address */}
              <View style={styles.inputContainer}>
                <ThemedText style={styles.label}>Address:</ThemedText>
                <TextInput
                  style={[
                    styles.input,
                    { color: Colors[colorScheme ?? 'light'].text },
                  ]}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                />
                {touched.address && errors.address && (
                  <Text style={styles.errorText}>{errors.address}</Text>
                )}
              </View>

              <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => handleSubmit()}>
                  <ThemedText style={{ color: Colors.dark.text }}>
                    Save
                  </ThemedText>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateLocationForm;
