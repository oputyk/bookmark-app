import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Group } from 'src/app/models/group.enum';
import { added as bookmarkAddedAction } from '../store/bookmarks.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.css']
})
export class BookmarkFormComponent implements OnInit {

  bookmarkForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BookmarkFormComponent>,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public dialogData: { group: Group },
    private fb: FormBuilder
  ) {
    this.bookmarkForm = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      group: [dialogData.group, Validators.required]
    });
  }

  ngOnInit() {
  }

  addBookmark() {
    this.store.dispatch(bookmarkAddedAction(this.bookmarkForm.value));
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
