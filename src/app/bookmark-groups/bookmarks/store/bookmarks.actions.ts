import { NewBookmark } from '../../../models/new-bookmark';
import { createAction, props } from '@ngrx/store';

export const added = createAction(
    '[Bookmarks] Added',
    props<NewBookmark>()
);

export const removed = createAction(
    '[Bookmarks] Removed',
    props<{ id: number }>()
);
