
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definisikan tipe state
export interface Value {
  counter: number;
}

export interface element{
    id: string;
    type: string;
    content:string;
    style:any;
    child?: element[]
}

export interface card {
    id: string;
    element: element[];
}



// State awal
const initialState: card[] = [
  {
    id: "1",
    element: []
  },
  {
    id: "2",
    element: []
  },
  {
    id: "3",
    element: []
  }

]

// Buat slice
const cardObject = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCardPage(state,action: PayloadAction<card>){
      state.push(action.payload);
    },
    removeCardPage(state,action: PayloadAction<number>){
      state.splice(action.payload, 1);
    },
    swapItems(state, action: PayloadAction<{ indexA: number; indexB: number }>) {
      const { indexA, indexB } = action.payload;
      const temp = state[indexA];
      state[indexA] = state[indexB];
      state[indexB] = temp;
    },
  },
});

export const CardObjectReducer = cardObject.reducer 

// Ekspor action
export const { addCardPage, removeCardPage,swapItems } = cardObject.actions;
export default cardObject