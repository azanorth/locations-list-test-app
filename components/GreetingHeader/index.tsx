import { useState, useEffect } from 'react';
import { View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import styles from './styles';

const GreetingHeader = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        setGreeting('Good Morning!');
      } else if (currentHour < 18) {
        setGreeting('Good Day!');
      } else {
        setGreeting('Good Evening!');
      }
    };

    updateGreeting();

    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">{greeting}</ThemedText>
    </View>
  );
};

export default GreetingHeader;
