import { AppRouter } from './routes/AppRouter'
import { ItemsContextProvider } from './context/ItemsProvider'
import './App.css'

export const App = () => {
  return (
    <ItemsContextProvider>
      <AppRouter />
    </ItemsContextProvider>
  )
}
