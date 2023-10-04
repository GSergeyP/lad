import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://192.168.0.101:3000/json/img.json';

export const getFetchingData: any = createAsyncThunk(
  'fetchingData/getFetchingData',
  async () => {
    const resp = await axios.get(url)
    .then(data => data.data)
    //.catch((err) => console.log(err));
  return resp
})