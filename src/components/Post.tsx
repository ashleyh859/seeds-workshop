import { Alert } from 'react-native';
import { Heart, MessageSquare } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { QueryDocumentSnapshot } from 'firebase/firestore/lite';
import { Button, Image, Paragraph, XStack, YStack } from 'tamagui';

type Props = {
  post: QueryDocumentSnapshot;
};

export function Post(props: Props) {
  const post = props.post;
  return (
    <YStack gap={8}>
      <Image
        width="100%"
        aspectRatio={1}
        source={{ uri: String(post.data().imageUrl) }}
      />
      <XStack p={10} paddingBottom={0} gap={10}>
        <Button
          chromeless
          p={2.5}
          onPress={() => {
            Alert.alert('Hello');
          }}
        >
          <Heart />
        </Button>
        <Button
          chromeless
          p={2.5}
          onPress={() => {
            router.navigate('/new-comment');
          }}
        >
          <MessageSquare />
        </Button>
      </XStack>
      <Paragraph p={10} marginLeft={5} paddingTop={0}>
        {post.data().caption}
      </Paragraph>
    </YStack>
  );
}
