import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// asincronía -- simular pedir un valor inicial al servidor
export const fetchFirst = createAsyncThunk(
    'counter/fetchFirst',
    async () => {
        // función que ejecuta asíncronamente
        const value = await new Promise((resolve) => {
            setTimeout(() => resolve(10), 500);
        })
        return value;
    }
)

// slice / estado global -- donde va a estar el estado inicial y los reducers
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        status: 'idle', // idle, loading, error
        error: null,
    },
    reducers: { // estos reducers son las actions de mi slice
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementManual: (state, action) => { state.value += action.payload },
        reset: (state) => { state.value = 0 },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFirst.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchFirst.fulfilled, (state, action) => {
            state.status = 'idle'
            state.value = action.payload
        })
        .addCase(fetchFirst.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error?.message ?? 'Error desconocido 🙃';
        })
    }
})

// exportar lo que quiero usar fuera de este slice
export const { increment, decrement, incrementManual, reset } = counterSlice.actions;

// selectores -- centralizar los valores del state
export const selectCount = (state) => state.counter.value
export const selectStatus = (state) => state.counter.status
export const selectError = (state) => state.counter.error

export default counterSlice.reducer;