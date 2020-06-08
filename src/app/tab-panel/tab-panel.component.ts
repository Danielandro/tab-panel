import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['../tab-panel.component.scss']
})
export class TabPanelComponent implements AfterContentInit {
  // grab child components of this class
  // QueryList is iterable i.e. works with ngFor
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;
  constructor() { }

  ngAfterContentInit(): void {
    console.log('TABS ', this.tabs);
  }

}
