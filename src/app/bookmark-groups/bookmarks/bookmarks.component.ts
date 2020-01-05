import { selectBookmarksFromGroup } from './store/bookmarks.selectors';
import { Group } from './../../models/group.enum';
import { AppState } from 'src/app/reducers';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/models/bookmark';
import { Store, select } from '@ngrx/store';
import { removed as bookmarkRemovedAction } from './store/bookmarks.actions';
import { MatDialog } from '@angular/material/dialog';
import { BookmarkFormComponent } from './bookmark-form/bookmark-form.component';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  @Input() public group: Group;
  public bookmarks$: Observable<Bookmark[]>;
  public displayedColumns: string[] = ['visit', 'id', 'name', 'url', 'removeButton'];

  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  ngOnInit() {
    this.bookmarks$ = this.store.pipe(select(selectBookmarksFromGroup, { group: this.group }));
  }

  remove(bookmark: Bookmark) {
    this.store.dispatch(bookmarkRemovedAction({ id: bookmark.id }));
  }

  add() {
    this.dialog.open(BookmarkFormComponent, {
      width: '600px',
      data: { group: this.group }
    });
  }

  visit(url: string) {
    window.open(url, '_blank');
  }
}
