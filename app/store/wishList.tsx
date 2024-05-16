import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoItem {
  nasaId: string;
  title: string;
  description: string;
  imageUrl: string;
  collectionUrl: string;
  keywords: string[];
}

interface FavoritesState {
  favoriteVideos: VideoItem[];
}

const initialState: FavoritesState = {
  favoriteVideos: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<VideoItem>) => {
      const video = action.payload;
      const existingIndex = state.favoriteVideos.findIndex(
        (v) => v.nasaId === video.nasaId
      );
      if (existingIndex >= 0) {
        state.favoriteVideos.splice(existingIndex, 1);
      } else {
        state.favoriteVideos.push(video);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
