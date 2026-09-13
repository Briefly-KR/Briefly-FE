import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <View className="bg-background flex-1 flex-row justify-center">
      <SafeAreaView className="max-w-content flex-1 items-center justify-center gap-4 px-6">
        <Text className="text-foreground text-center font-pretendard-semibold text-5xl leading-[52px]">
          Briefly
        </Text>
      </SafeAreaView>
    </View>
  );
}
