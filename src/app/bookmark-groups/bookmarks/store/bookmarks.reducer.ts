import { Action, createReducer, on } from '@ngrx/store';
import { Bookmark } from '../../../models/bookmark';
import { Group } from '../../../models/group.enum';
import { added, removed } from './bookmarks.actions';
import { NewBookmark } from 'src/app/models/new-bookmark';

let idSequence = 1;

const initialState = [
    { id: idSequence++, url: 'example.com', name: 'example', group: Group.Leisure }
];

const reducer = createReducer<Bookmark[]>(
    initialState,
    on(added, (state: Bookmark[], newBookmark: NewBookmark) => ([...state, { ...newBookmark, id: idSequence++ }])),
    on(removed, (state: Bookmark[], { id }) => state.filter(bookmark => bookmark.id !== id))
);

export function bookmarksReducer(state: any | undefined, action: Action) {
    return reducer(state, action);
}
