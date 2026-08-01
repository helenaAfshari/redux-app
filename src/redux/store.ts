
// اینجا قرار هست چیزهایی نوشته شود که روی کل پروژه اعمال شود
// reducer ها ووstate ها داخل همین پوشه هست

import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice.ts';
import {userSlice} from './userSlice.ts';
export const store = configureStore({
    // این ردیوسر اون ردیوسری نیست که قرار فانکشن ها درونش باشند  این یکی دیگس
//    مال store هست
    reducer: {
    counter: counterSlice.reducer,
    user:userSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch