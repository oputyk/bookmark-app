import { Group } from './group.enum';

export interface Bookmark {
    id: number;
    name: string;
    group: Group;
    url: string;
}
