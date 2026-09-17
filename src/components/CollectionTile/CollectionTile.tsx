import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { palette } from '../../theme/colors';
import { fontFamilies } from '../../theme/typography';

type CollectionTileProps = {
  image: ImageSourcePropType;
  title: string;
  count: string;
  onPress?: () => void;
};

export default function CollectionTile({ image, title, count, onPress }: CollectionTileProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tileTouch}>
      <View style={styles.tile}>
        <Image source={image} style={styles.tileImage} />
        <View style={styles.tileCaption}>
          <Text style={styles.tileTitle} numberOfLines={1}>{title}</Text>
          <Text style={styles.tileCount} numberOfLines={1}>{count}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tileTouch: {
    width: 141,
    marginBottom: 20,
  },
  tile: {
    width: 141,
    height: 106,
    overflow: 'hidden',
    backgroundColor: palette.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    position: 'relative',
  },
  tileImage: {
    width: 141,
    height: 106,
    resizeMode: 'cover',
  },
  tileCaption: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 22,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: 'rgba(244, 244, 248, 0.82)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tileTitle: {
    flex: 1,
    color: palette.darkText,
    fontSize: 8,
    fontWeight: '700',
    fontFamily: fontFamilies.body,
  },
  tileCount: {
    color: palette.darkText,
    fontSize: 8,
    fontFamily: fontFamilies.body,
    marginLeft: 4,
  },
});
