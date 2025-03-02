import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchLastTickets = createAsyncThunk(
    "lastTickets/fetchLastTickets",
    async () => {
        const response = await fetch(
        'https://students.netoservices.ru/fe-diplom/routes/last'
         );
        const data = await response.json();
        const listlasttickets = data.map( el=> ({
                'el': el })
        ); 
    return listlasttickets;  
    }
);


const lastTicketsSlice = createSlice({
    name: "lastTickets", 
    initialState: {
        tickets: [],       
        loading: false,   
        error: false,       
    },
    reducers: {  },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLastTickets.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchLastTickets.fulfilled, (state, action) => {
                state.loading = true;
                state.error = false;
                state.tickets = action.payload; 
            })
            .addCase(fetchLastTickets.rejected, (state) => {
                state.loading = true;
                state.error = false;
            });
    },
})
export const selectLastTicketsState = (state) => state.lastTickets;
export default lastTicketsSlice.reducer;