import { SafeAreaView } from 'react-native-safe-area-context';
import { Home } from '../features/Home';
import { LinearGradient } from 'expo-linear-gradient';

const RootPage = () => {
  return (
    <LinearGradient
      colors={['#2E1371', '#130B2B']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        paddingLeft: 10,
      }}
    >
      <Home />
    </LinearGradient>
  );
};

export default RootPage;
