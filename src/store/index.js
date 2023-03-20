import { configureStore, createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  authenticated: "",
  errorMessage: "",
  user: null,
  permissions: [],
  isBootstraping: true,
  isLoggingOut: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    authUser(state, action) {
      return {
        ...state,
        errorMessage: "",
        authenticated: action.payload.token,
        user: action.payload.user,
        permissions: [],
      };
    },
    getAcl(state, action) {
      let permissions = [];
      if (state.user != null) {
        for (let i = 0; i < action.payload.length; i++) {
          if (action.payload[i].group === state.user.role) {
            permissions = action.payload[i].permissions;
            break;
          }
        }
      }
      return {
        ...state,
        permissions: permissions,
      };
    },
    finishBoot(state) {
      return {
        ...state,
        isBootstraping: false,
      };
    },
  },
});

const regionsInitialState = {
  regions: null,
};

const regionsSlice = createSlice({
  name: "regions",
  initialState: regionsInitialState,
  reducers: {
    getRegions(state, action) {
      return {
        ...state,
        regions: action.payload
      };
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    regions: regionsSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export const regionsActions = regionsSlice.actions;
export default store;
