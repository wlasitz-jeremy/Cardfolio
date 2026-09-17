import { StyleSheet, TextInput, View } from 'react-native';
import { Search } from 'lucide-react-native';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

export default function ExploreScreen({ navigation }: any) {
  return (
    <View style={styles.exploreScreen}>
      <NavHeader navigation={navigation} title="Explore" />
      <View style={styles.exploreSearch}>
        <Search size={24} color={palette.darkText} />
        <TextInput placeholder="Universal Search" placeholderTextColor={palette.secondaryText} style={styles.exploreSearchInput} />
      </View>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  exploreScreen: { flex: 1, backgroundColor: palette.background },
  exploreSearch: { width: 260, height: 30, borderWidth: 2, borderColor: palette.darkText, borderRadius: 20, backgroundColor: palette.white, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 20 },
  exploreSearchInput: { flex: 1, marginLeft: 6, color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 12 },
});
