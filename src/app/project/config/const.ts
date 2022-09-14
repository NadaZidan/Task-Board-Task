import { IssuePriorityIcon } from '@trungk18/interface/issue-priority-icon';
import { IssuePriority} from '@trungk18/interface/issue';
import { IssueUtil } from '../utils/issue';

export class ProjectConst {
  /* eslint-disable @typescript-eslint/naming-convention */
  static readonly IssueId = 'issueId';
  static readonly Projects = 'Projects';
  static PrioritiesWithIcon: IssuePriorityIcon[] = [
    IssueUtil.getIssuePriorityIcon(IssuePriority.LOW),
    IssueUtil.getIssuePriorityIcon(IssuePriority.MEDIUM),
    IssueUtil.getIssuePriorityIcon(IssuePriority.HIGH),
  ];

 
  /* eslint-enable @typescript-eslint/naming-convention */
}
