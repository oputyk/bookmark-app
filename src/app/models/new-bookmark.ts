import { Group } from './group.enum';

export interface NewBookmark {
    name: string;
    group: Group;
    url: string;
}
