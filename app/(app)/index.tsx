import { Redirect } from 'expo-router';

export default function AppScreen() {
  // If a session is active just redirect to the location list screen
  return <Redirect href="/location-list" />;
}
