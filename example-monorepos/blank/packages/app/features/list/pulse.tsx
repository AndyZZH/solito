import React from 'react'
import { MotiView, useDynamicAnimation } from 'moti'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import { useAnimatedGestureHandler } from 'react-native-reanimated'

export default function HoverPulse({
  scaleTo = 1.05,
  style,
  children,
  ...props
}) {
  const animation = useDynamicAnimation(() => ({
    // this is the initial state
    scale: 1,
  }))

  const onGestureEvent = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>(
    {
      onStart: () => {
        animation.animateTo({ scale: scaleTo })
      },
      onFinish: () => {
        animation.animateTo({ scale: 1 })
      },
    }
  )

  return (
    <TapGestureHandler onGestureEvent={onGestureEvent}>
      <MotiView style={style} state={animation}>
        {children}
      </MotiView>
    </TapGestureHandler>
  )
}