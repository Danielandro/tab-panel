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
    const selectedTab = this.tabs.find(tab => tab.selected);

    if (!selectedTab) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(selectedTab: TabComponent): void {
    // unselect all tabs
    this.tabs.forEach(tab => tab.selected = false);
    // select clicked passed tab
    selectedTab.selected = true;
  }

}
