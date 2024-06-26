import { Stack } from 'expo-router';
import { ScrollView } from 'tamagui';

import { PostList } from '../components/PostList';

export default function App() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <ScrollView flex={1}>
        <PostList />
      </ScrollView>
    </>
  );
}
