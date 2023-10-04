import { createSlice } from '@reduxjs/toolkit';
import { getFetchingData } from '../connect/connect'

export interface TFetchingData {
  loadingDATA: boolean,
  DATA: Array<{[key: string]: string | number}> | any,
  errorDATA: boolean,
}

const initialState: TFetchingData = {
  loadingDATA: false,
  DATA: [],
  errorDATA: false,
}

export const fetchingDataSlice = createSlice({
  name: 'fetchingData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFetchingData.pending, (state) => {
        state.loadingDATA = true;
        state.errorDATA = false;
      })
      .addCase(getFetchingData.fulfilled, (state, { payload }) => {
        state.loadingDATA = false;
        state.DATA = payload;
        state.errorDATA = false;
      })
      .addCase(getFetchingData.rejected, (state) => {
        state.loadingDATA = false;
        state.errorDATA = true;
      })
  },
})

export default fetchingDataSlice.reducer