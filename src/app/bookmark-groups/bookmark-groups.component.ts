import { Group } from './../models/group.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-groups',
  templateUrl: './bookmark-groups.component.html',
  styleUrls: ['./bookmark-groups.component.css']
})
export class BookmarkGroupsComponent implements OnInit {

  public groups: Group[];

  constructor() {
    this.groups = Object.values(Group);
  }

  ngOnInit() {
  }

}
