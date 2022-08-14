import React from 'react'
import { MotiView, useDynamicAnimation } from 'moti'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler'
import { useAnimatedGestureHandler } from 'react-native-reanimated'

export default function Swipeable({
  scaleTo = 1.05,
  style,
  children,
  ...props
}) {
  const animation = useDynamicAnimation(() => ({
    // this is the initial state
    scale: 1,
  }))

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
    {
      onActive: (event) => {
        animation.animateTo({ translateX: event.translationX})
      },
      onEnd: () => {
        animation.animateTo({ translateX: 0})
      }
    }
  )

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <MotiView style={style} state={animation}>
        {children}
      </MotiView>
    </PanGestureHandler>
  )
}