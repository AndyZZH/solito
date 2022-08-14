import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import HoverPulse from '../list/pulse';
import Swipeable from '../list/swipeable-list';

export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <HoverPulse style={{}}>
        <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      </HoverPulse>
      <Swipeable style={{}}>
        <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      </Swipeable>
    </View>
  )
}
