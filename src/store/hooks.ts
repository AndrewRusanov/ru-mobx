import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, store } from './store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
