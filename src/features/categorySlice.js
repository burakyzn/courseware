import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import categoryService from '~services/categoryService'

const initialState = {
  value : []
}

export const fetchCategoryData = createAsyncThunk(
  'category/fetchCategoryData',
  async () => {
    let categories = await categoryService.getAll();
    return categories;
  }
)

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryData.fulfilled, (state, action) => {
      if(action.payload){
        state.value = action.payload
      }
    })
  },
});

export const categorySelector = (state) => state.category.value;

export const {} = categorySlice.actions
export default categorySlice.reducer