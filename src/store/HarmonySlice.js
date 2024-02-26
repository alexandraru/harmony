import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLanguage = createAsyncThunk(
    'info/fetchLanguage',
    async function(_, {rejectWithValue}){
        try {
            const response = await fetch('https://65b822dc46324d531d55fea5.mockapi.io/ukrainian');
            if(!response.ok){
                throw new Error('Server Error!')
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

)
export const fetchLanguageRu = createAsyncThunk(
    'info/fetchLanguageRu',
    async function(_, {rejectWithValue}){
        try {
            const response = await fetch('https://65b822dc46324d531d55fea5.mockapi.io/ukrainian/ru');
            if(!response.ok){
                throw new Error('Server Error!')
            }

            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

)
export const fetchLanguageUa = createAsyncThunk(
    'info/fetchLanguageUa',
    async function(_, {rejectWithValue}){
        try {
            const response = await fetch('https://65b822dc46324d531d55fea5.mockapi.io/ukrainian/ua');
            if(!response.ok){
                throw new Error('Server Error!')
            }

            const data = await response.json();
            console.log(data.coursePriceItem);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

)

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const harmonySlice = createSlice({
    name: 'info',
    initialState: {
        infoLanguage: [],
        infoDisplay: {},
        infoDisplayRu: {},
        infoDisplayUa: {},
        language: 'ua',
        error: null,
    },
    reducers: {
        changeLang: (state) => {
          if(state.language === 'ru'){
            state.language = 'ua';
            state.infoDisplay = state.infoDisplayUa;
          }else {
            state.language = 'ru';
            state.infoDisplay = state.infoDisplayRu;
           }
    }},
    extraReducers: builder =>{
        builder
                .addCase(fetchLanguageUa.fulfilled, (state, action) => {
                    state.infoDisplayUa = action.payload;
                    state.infoDisplay =  state.infoDisplayUa;
                    state.language = 'ua';
                    state.error = null;
                })
                
                .addCase(fetchLanguageRu.fulfilled, (state, action) => {
                    state.infoDisplayRu = action.payload;
                    state.error = null;
                })
                
                .addCase(fetchLanguageRu.rejected, setError)
                .addCase(fetchLanguageUa.rejected, setError)

    }

})

export const {changeLang} = harmonySlice.actions;
export default harmonySlice.reducer;