import { AppProcess } from '../../types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MAIN_CITY, NameSpace, SortType } from '../../consts';

const initialState: AppProcess = {
  city: MAIN_CITY,
  currentSortType: SortType.Popular,
  selectState: false,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeSelectedCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    sortOffersByType: (
      state,
      action: PayloadAction<{
        currentSortType: string;
        selectState: boolean;
      }>
    ) => {
      state.currentSortType = action.payload.currentSortType;
      state.selectState = action.payload.selectState;
    },
  },
});

export const { changeSelectedCity, sortOffersByType } = appProcess.actions;
