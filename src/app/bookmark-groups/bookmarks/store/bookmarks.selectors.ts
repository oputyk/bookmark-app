import { AppState } from 'src/app/reducers';

export const selectBookmarksFromGroup = (state: AppState, props) => state.bookmarks.filter(bookmark => {console.log(bookmark);;console.log(props);return bookmark.group === props.group;});
