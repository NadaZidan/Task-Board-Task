

/* eslint-disable no-shadow */

export enum IssueStatus {
  SELECTED = 'Selected',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IN_PROGRESS = 'InProgress',
  DONE = 'Done'
}

export const IssueStatusDisplay = {
  [IssueStatus.SELECTED]: 'Open',
  [IssueStatus.IN_PROGRESS]: 'On Hold',
  [IssueStatus.DONE]: 'Closed'
};

export enum IssuePriority {
  
  LOW = 'Low',
  MEDIUM = 'Normal',
  HIGH = 'High',
  
}

export const IssuePriorityColors = {
  [IssuePriority.HIGH]: '#E9494A',
  [IssuePriority.MEDIUM]: '#E97F33',
  [IssuePriority.LOW]: '#2D8738',
 
};
export interface JIssue {
  id: string;
  title: string;
  status: IssueStatus;
  priority: IssuePriority;
  listPosition: number;
  description: string;
  estimate: number;
  timeSpent: number;
  timeRemaining: number;
  createdAt: string;
  updatedAt: string;
  reporterId: string;
  userIds: string[];
  projectId: string;
}
/* eslint-enable no-shadow */
