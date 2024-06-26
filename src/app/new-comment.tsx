import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { SendHorizontal } from '@tamagui/lucide-icons';
import { router, Stack } from 'expo-router';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite';
import { Button, Input, Paragraph, XStack, YStack } from 'tamagui';

import { db } from '../support/firebase';

export default function NewCommentForm() {
  const [comment, setComment] = useState('');

  const handleCommentChange = (text: string) => {
    setComment(text);
  };

  const handleSubmit = async () => {
    const commentsRef = collection(db, 'comments');
    await addDoc(commentsRef, {
      text: comment,
      timestamp: serverTimestamp(),
    });

    Alert.alert('You have commented:', comment);
    setComment('');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Comments',
          headerBackTitleVisible: false,
        }}
      />

      <YStack flex={1} backgroundColor="white" paddingTop={30}>
        <XStack
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}
          gap={3}
          paddingHorizontal={15}
        >
          <Input
            style={{
              flex: 0.95,
              backgroundColor: 'white',
              borderRadius: 20,
              fontSize: 16,
              textAlignVertical: 'center',
              paddingHorizontal: 15,
              paddingVertical: 10,
              height: 50,
            }}
            numberOfLines={2}
            placeholder="Comment"
            value={comment}
            onChangeText={handleCommentChange}
          />
          <Button
            onPress={handleSubmit}
            style={{ flex: 0.05 }}
            backgroundColor="white"
          >
            <SendHorizontal size={20} color="black" backgroundColor="white" />
          </Button>
        </XStack>
      </YStack>
    </>
  );
}

/* <Button
          onPress={() => {
            router.navigate('/');
          }}
        >
          Go Home
        </Button> */
