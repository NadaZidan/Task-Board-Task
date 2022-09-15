import { JIssue } from './issue';
import { JUser } from './user';

export interface JProject {
  id: string;
  name: string;
  url: string;
  description: string;
  createdAt: string;
  updateAt: string;
  issues: JIssue[];
  users: JUser[];
}

// eslint-disable-next-line no-shadow
