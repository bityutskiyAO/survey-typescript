import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IApiResults } from '../../interfaces'
import axiosInstance from '../axios'

interface ISurveyState {
    questions: Array<IApiResults>,
    isLoading: boolean,
    isError: boolean,
}

const initialState: ISurveyState = {
    questions: [],
    isLoading: true,
    isError: false
}

export const fetchSurvey = createAsyncThunk('survey/questions', async () => {
    let response
    try {
        response = await axiosInstance.get('/api.php?amount=10')
    } catch (e) {
        console.error(e)
    }
    return response?.data?.results as Array<IApiResults>
})

const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        clearSurvey: (state) => {
            state.questions = []
            state.isLoading = false
            state.isError = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSurvey.fulfilled, (state, action) => {
            state.questions = action.payload
            state.isLoading = false
            state.isError = false
        })
    }
})

export const {
    clearSurvey
} = surveySlice.actions

export default surveySlice.reducer
