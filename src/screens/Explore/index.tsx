import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Search } from 'lucide-react-native';

import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import NavHeader from '../../components/NavHeader/NavHeader';
import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

const exploreImages = [
  require('../../assets/Screenshot 2026-07-24 080651.png'),
  require('../../assets/Screenshot 2026-07-24 080707.png'),
  require('../../assets/Screenshot 2026-07-24 080729.png'),
  require('../../assets/Screenshot 2026-07-24 080746.png'),
  require('../../assets/Screenshot 2026-07-24 080810.png'),
  require('../../assets/Screenshot 2026-07-24 081314.png'),
];

export default function ExploreScreen({ navigation }: any) {
  const [query, setQuery] = useState('');
  const visibleImages = exploreImages.filter((_, index) => `${index + 1}`.includes(query));

  return (
    <View style={styles.exploreScreen}>
      <NavHeader navigation={navigation} title="Explore" />
      <View style={styles.exploreSearch}>
        <Search size={24} color={palette.darkText} />
        <TextInput value={query} onChangeText={setQuery} placeholder="Universal Search" placeholderTextColor={palette.secondaryText} style={styles.exploreSearchInput} />
      </View>
      <ScrollView contentContainerStyle={styles.exploreGrid}>
        {visibleImages.map((image, index) => (
          <TouchableOpacity key={image} style={styles.exploreTile} onPress={() => navigation.getParent?.()?.navigate('CardInfoFlow')}>
            <Image source={image} style={styles.exploreImage} />
            <Text style={styles.exploreCaption}>Featured card {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <BottomTabBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  exploreScreen: { flex: 1, backgroundColor: palette.background },
  exploreSearch: { width: 260, height: 30, borderWidth: 2, borderColor: palette.darkText, borderRadius: 20, backgroundColor: palette.white, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 20 },
  exploreSearchInput: { flex: 1, marginLeft: 6, color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 12 },
  exploreGrid: { paddingHorizontal: 16, paddingTop: 28, paddingBottom: 120, flexDirection: 'row', flexWrap: 'wrap', gap: 20 },
  exploreTile: { width: 169, height: 245, backgroundColor: palette.white, borderRadius: 10, overflow: 'hidden' },
  exploreImage: { width: 169, height: 215, resizeMode: 'cover' },
  exploreCaption: { color: palette.darkText, fontFamily: fontFamilies.body, fontSize: 12, padding: 8 },
});
