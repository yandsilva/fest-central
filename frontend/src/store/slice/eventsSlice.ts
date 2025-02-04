import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../store";

interface Event {
  id: string;
  name: string;
  date: string;
}

interface EventsState {
  loading: boolean;
  events: Event[];
  error: string | null;
  message: string | null;
}

const initialState: EventsState = {
  loading: false,
  events: [],
  error: null,
  message: null,
};

interface GetAllEventsSuccessPayload {
  events: Event[];
}

interface GetAllEventsFailurePayload {
  error: string;
}

interface AddNewEventsSuccessPayload {
  message: string;
}

interface AddNewEventsFailedPayload {
  error: string;
}

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    getAllEventsRequest(state) {
      state.events = [];
      state.error = null;
      state.loading = true;
    },
    getAllEventsSuccess(
      state,
      action: PayloadAction<GetAllEventsSuccessPayload>,
    ) {
      state.events = action.payload.events;
      state.error = null;
      state.loading = false;
    },
    getAllEventsFailure(
      state,
      action: PayloadAction<GetAllEventsFailurePayload>,
    ) {
      state.events = state.events;
      state.error = action.payload.error;
      state.loading = false;
    },
    addNewEventsRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    addNewEventsSuccess(
      state,
      action: PayloadAction<AddNewEventsSuccessPayload>,
    ) {
      state.error = null;
      state.loading = false;
      state.message = action.payload.message;
    },
    addNewEventsFailed(
      state,
      action: PayloadAction<AddNewEventsFailedPayload>,
    ) {
      state.error = action.payload.error;
      state.loading = false;
      state.message = null;
    },
    clearAllErrors(state) {
      state.error = null;
      state.message = null;
    },
  },
});

export const getAllEvents = () => async (dispatch: AppDispatch) => {
  dispatch(eventsSlice.actions.getAllEventsRequest());
  try {
    const response = await axios.get<{ events: Event[] }>(
      "http://localhost:3333/api/v1/events/get-events",
      {
        withCredentials: true,
      },
    );
    dispatch(
      eventsSlice.actions.getAllEventsSuccess({ events: response.data.events }),
    );
  } catch (error: any) {
    dispatch(
      eventsSlice.actions.getAllEventsFailure({
        error: error.response?.data?.message || "Erro ao buscar eventos",
      }),
    );
  }
};

export const addNewEvents =
  (data: FormData) => async (dispatch: AppDispatch) => {
    dispatch(eventsSlice.actions.addNewEventsRequest());
    try {
      const response = await axios.post(
        "http://localhost:3333/api/v1/events/register",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      dispatch(
        eventsSlice.actions.addNewEventsSuccess({
          message: response.data.message,
        }),
      );
      dispatch(eventsSlice.actions.clearAllErrors());
    } catch (error: any) {
      dispatch(
        eventsSlice.actions.addNewEventsFailed({
          error: error.response?.data?.message || "Erro ao adicionar evento",
        }),
      );
    }
  };

export const clearAllEventsErrors = () => (dispatch: AppDispatch) => {
  dispatch(eventsSlice.actions.clearAllErrors());
};

export default eventsSlice.reducer;
