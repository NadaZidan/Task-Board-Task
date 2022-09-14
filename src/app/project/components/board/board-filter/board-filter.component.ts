import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FilterService } from '@trungk18/project/state/filter/filter.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddIssueModalComponent } from '../../add-issue-modal/add-issue-modal.component';

@Component({
  selector: 'board-filter',
  templateUrl: './board-filter.component.html',
  styleUrls: ['./board-filter.component.scss']
})
@UntilDestroy()
export class BoardFilterComponent implements OnInit {
  items: NavItem[];
  searchControl: FormControl = new FormControl('');
  userIds: string[];

  constructor(
    private _modalService: NzModalService,
    public filterService: FilterService
  ) {
    this.userIds = [];
  }

  ngOnInit(): void {
    this.items = [
      new NavItem('plus', 'Create issue', this.openCreateIssueModal.bind(this))
    ];
    this.searchControl.valueChanges
      .subscribe((term) => {
        this.filterService.updateSearchTerm(term);
      });

   
  }

  openCreateIssueModal() {
    this._modalService.create({
      nzContent: AddIssueModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzWidth: 700
    });
  }

  resetAll() {
    this.searchControl.setValue('');
    this.filterService.resetAll();
  }
}
class NavItem {
  constructor(public icon: string, public tooltip: string, public handler: Handler) {}
}

type Handler = () => void;