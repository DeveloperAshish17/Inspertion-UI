import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-adit-inspection',
  templateUrl: './adit-inspection.component.html',
  styleUrls: ['./adit-inspection.component.scss']
})
export class AditInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  @Input() inspection: any;
  id: number = 0;
  status: string = "";
  comments: string = "";
  inspectionTypeId!: number;

  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comments = this.inspection.comments;
    this.inspectionTypeId = this.inspectionTypeId;
    this.statusList$ = this.master.getStatusList();
    this.inspectionList$ = this.master.getInspectionList();
    this.inspectionTypesList$ = this.master.getInspectionTypesList();
  }

  addInspection() {
    var inspection = {
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId
    }
    this.master.addInspection(inspection).subscribe(res => {
      var closeModelBtn = document.getElementById('adit-model-close');
      if (closeModelBtn) {
        closeModelBtn.click();
      }

      var showAddSucess = document.getElementById('add-success-alert');
      if (showAddSucess) {
        showAddSucess.style.display = "block";
      }
      setTimeout(function () {
        if (showAddSucess) {
          showAddSucess.style.display = "none"

        }
      }, 5000);
    })
  }

  updateInspection() {

  }

}
