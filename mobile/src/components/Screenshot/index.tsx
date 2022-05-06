import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Camera, Trash } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

interface Props {
  screeshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function Screenshot({ screeshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screeshot ? onRemoveShot : onTakeShot}
    >
      {
        screeshot ?
          <View>
            <Image
              style={styles.image}
              source={{ uri: screeshot }}
            />
            <Trash
              size={22}
              color={theme.colors.text_secondary}
              weight="fill"
              style={styles.removeIcon}
            />
          </View>
          :

          <Camera
            size={22}
            color={theme.colors.text_primary}
            weight="bold"
          />
      }
    </TouchableOpacity>
  );
}