import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchLastTickets = createAsyncThunk(
    "lastTickets/fetchLastTickets",
    async () => {
        const response = await fetch(
        'https://students.netoservices.ru/fe-diplom/routes/last'
         );
        const data = await response.json();
        const listlasttickets = data.map( el=> ({
            id: el.id,       
            departure: el.departure,   
            arrival: el.arrival,      
            min_price: el.min_price, })
        ); 
    return listlasttickets;  
    }
);


const lastTicketsSlice = createSlice({
    name: "lastTickets", 
    initialState: {
        tickets: [],
        loading: 'idle', 
        error: null,       
    },
    reducers: {  },
    extraReducers: (builder) => {
        builder
        .addCase(fetchLastTickets.pending, (state) => {
            state.loading = 'pending';
            state.error = null; 
        })
        .addCase(fetchLastTickets.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.tickets = action.payload;
            state.error = null; 
        })
        .addCase(fetchLastTickets.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message; 
        });
    },
})
export const selectLastTicketsState = (state) => state.lastTickets;
export default lastTicketsSlice.reducer;