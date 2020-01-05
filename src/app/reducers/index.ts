import { Bookmark } from './../models/bookmark';
import { ActionReducerMap } from '@ngrx/store';
import { bookmarksReducer } from '../bookmark-groups/bookmarks/store/bookmarks.reducer';

export interface AppState {
  bookmarks: Bookmark[];
}

export const reducers: ActionReducerMap<AppState> = {
  bookmarks: bookmarksReducer
};
