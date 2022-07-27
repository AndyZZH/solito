import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { Provider as PaperProvider } from 'react-native-paper';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <PaperProvider>
        <Dripsy>{children}</Dripsy>
      </PaperProvider>
    </NavigationProvider>
  )
}
