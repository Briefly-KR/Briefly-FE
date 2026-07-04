import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <View className="flex-1 flex-row justify-center bg-background">
      <SafeAreaView className="max-w-content flex-1 items-center justify-center gap-4 px-6">
        <Text className="text-center text-5xl font-semibold leading-[52px] text-foreground">
          Briefly
        </Text>
      </SafeAreaView>
    </View>
  );
}
