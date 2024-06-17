import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore/lite';
import { Image, Paragraph, ScrollView, YStack } from 'tamagui';

import { db } from '../support/firebase';

export default function App() {
  const [posts, setPosts] = useState<Array<QueryDocumentSnapshot>>([]);
  useEffect(() => {
    const getPosts = async () => {
      const postsRef = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsRef);
      setPosts(postsSnapshot.docs);
    };
    void getPosts();
  }, []);

  return (
    <ScrollView flex={1}>
      {posts.map((post) => (
        <YStack key={post.id}>
          <Image
            width="100%"
            aspectRatio={1}
            source={{ uri: post.data().imageUrl }}
          />
          <Paragraph key={post.id}>{post.data().caption}</Paragraph>
        </YStack>
      ))}
    </ScrollView>
  );
}
