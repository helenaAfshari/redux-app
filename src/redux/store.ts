
// اینجا قرار هست چیزهایی نوشته شود که روی کل پروژه اعمال شود
// reducer ها ووstate ها داخل همین پوشه هست

import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice.ts'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch