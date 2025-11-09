import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

interface IBasketItemState {
    count: number;
    totalSum: number;
}

const initialState: IBasketItemState = {
    count: 0,
    totalSum: 0,
}

export const basketItemSlice = createSlice({
    name: 'basketItem',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        totalSum: (state) => {
            
        },
    },
});

export const {} = basketItemSlice.actions;

export default basketItemSlice.reducer;