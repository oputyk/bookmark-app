import { AppState } from 'src/app/reducers';

export const selectBookmarksFromGroup = (state: AppState, props) => state.bookmarks.filter(bookmark => bookmark.group === props.group);
