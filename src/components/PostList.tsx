import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore/lite';
import { YStack } from 'tamagui';

import { db } from '../support/firebase';
import { Post } from './Post';

export function PostList() {
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
    <YStack gap={10}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </YStack>
  );
}
