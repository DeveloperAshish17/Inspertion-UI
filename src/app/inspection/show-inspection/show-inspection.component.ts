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

  //variable (properties)
  modelTitle: string = '';
  activateAditInspectionComponent: boolean = false;
  inspection: any;

  modelAdd() {
    this.inspection = {
      id: 0,
      status: null,
      Comment: null,
      inspectionTypeId: null
    }
    this.modelTitle = "Add Inspection";
    this.activateAditInspectionComponent = true;
  }

  modelClose() {
    this.activateAditInspectionComponent = false;
    this.inspectionList$ = this.master.getInspectionList();
  }

  refreshInspectionTypesMap() {
    this.master.getInspectionTypesList().subscribe(data => {
      this.inspectionTypeList = data;

      for (let i = 0; i < data.length; i++) {
        this.inspectionTypeMap.set(this.inspectionTypeList[i].id, this.inspectionTypeList[i].inspectionName);
      }
    })
  }
}
