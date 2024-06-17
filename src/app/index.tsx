import { ScrollView } from 'tamagui';

import { PostList } from '../components/PostList';

export default function App() {
  return (
    <ScrollView flex={1}>
      <PostList />
    </ScrollView>
  );
}
