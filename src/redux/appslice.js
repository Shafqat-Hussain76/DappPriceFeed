import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import GetPrice from "../artifacts/contracts/GetPrice.sol/GetPrice.json"
const contractAddress = "0xFffE0524FB9cF8E2E01554251D4BadeE24975674"; //rinkeby

const initialState = {
    contractProvider: null,
    Eth: null,
};

export const LoadBlockchain = createAsyncThunk("LoadBlockchain", async(_, thunkAPI)=>{
    const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/22e41a0082b44d1e9e920225f861bcdf");
    const contractProvider = new ethers.Contract(contractAddress, GetPrice.abi, provider);
    
    return {

        contractProvider,
    }
})

export const appslicer = createSlice({
    name: "app",
    initialState,
    reducers:{
        getval: (state, action)=>{
            state.Eth = action.payload
        }
    },
    extraReducers:{
        [LoadBlockchain.fulfilled.toString()]:(state, {payload})=>{
            state.contractProvider = payload.contractProvider;
        }
    }

})
export const appslicerfinal = appslicer.reducer;
export const { getval } = appslicer.actions;