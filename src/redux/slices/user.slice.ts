import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/interfaces/user.interface';

type InitialState = {
  user: IUser;
};

const initialState: InitialState = {
  user: {
    id: localStorage.getItem('userId') || '',
    firstName: '',
    lastName: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
