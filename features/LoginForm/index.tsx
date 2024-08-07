import { FC } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import { Login } from '@/interfaces/login';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import styles from './styles';

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .min(4, 'The Login must be at least 4 letters long')
    .required('Login is required'),
  password: Yup.string()
    .min(4, 'The Password must be at least 4 letters long')
    .required('Password is required'),
});

interface Props {
  onSubmit: (data: Login) => void;
}

const LoginForm: FC<Props> = ({ onSubmit }) => {
  const colorScheme = useColorScheme();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Formik
        initialValues={{ login: '', password: '' }}
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
          <>
            <View style={styles.titleContainer}>
              <ThemedText type="title" style={styles.title}>
                Please Sign In
              </ThemedText>
            </View>
            <View style={styles.inputContainer}>
              <ThemedText style={styles.labelContainer}>Login:</ThemedText>
              <TextInput
                style={[
                  styles.input,
                  { color: Colors[colorScheme ?? 'light'].text },
                ]}
                onChangeText={handleChange('login')}
                onBlur={handleBlur('login')}
                value={values.login}
              />
              {touched.login && errors.login && (
                <ThemedText style={styles.errorText}>{errors.login}</ThemedText>
              )}
            </View>
            <View style={styles.inputContainer}>
              <ThemedText style={styles.labelContainer}>Password:</ThemedText>
              <TextInput
                style={[
                  styles.input,
                  { color: Colors[colorScheme ?? 'light'].text },
                ]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <ThemedText style={styles.errorText}>
                  {errors.password}
                </ThemedText>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={() => handleSubmit()}>
                <ThemedText style={{ color: Colors.dark.text }}>
                  Sign In
                </ThemedText>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
