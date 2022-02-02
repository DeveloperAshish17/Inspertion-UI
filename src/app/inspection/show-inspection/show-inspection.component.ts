import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.scss']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  inspectionTypeList$!: Observable<any[]>;
  inspectionTypeList: any = [];

  //map to display

  inspectionTypeMap: Map<number, string> = new Map()

  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.master.getInspectionList();
    this.inspectionTypeList$ = this.master.getInspectionTypesList();
    this.refreshInspectionTypesMap();

  }

  refreshInspectionTypesMap() {
    this.master.getInspectionTypesList().subscribe(data => {
      this.inspectionTypeList = data;

      for(let i = 0; i < data.length; i++)
      {
        this.inspectionTypeMap.set(this.inspectionTypeList[i].id, this.inspectionTypeList[i].inspectionName);
      }
    })
  }
}
