import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {SrEquipmentService} from '../../services/sr-equipment.service';
import {SR_Equip} from '../../classes/SR_Equip';

@Component({
  selector: 'sr-equip-list',
  providers: [SrEquipmentService],
  templateUrl: './equip-list.component.html',
  styleUrls: ['./equip-list.component.css']
})
class EquipListComponent implements OnInit {
  pieces :SR_Equip[]
  constructor(private equipmentService : SrEquipmentService) { }

  ngOnInit() {
    this.equipmentService.getAll().subscribe(
      data => {
        this.pieces = data;
      },
      error =>{ console.log("Error getting isseList data")}
    );
  }

}


@Component({
  selector: 'sr-equip-info',
  template: `
  <p *ngIf="piece">
	  {{piece.Eq_piece_id}} {{piece.Model}} {{piece.SN}} {{piece.Extra}}
  </p>
	`,
  providers: [SrEquipmentService],
  styleUrls: ['./equip-info.component.css']
})
class SrEquipInfoComponent implements OnInit {
  piece :SR_Equip;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipmentService : SrEquipmentService) {
      this.router.events.subscribe((event)=>{ this.ngOnInit(); });
    }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.equipmentService.getEquipById(id).subscribe(
      data => {
        this.piece = data;
      },
      error =>{ console.log("this error was reached");}
    );
  }

}

export {EquipListComponent, SrEquipInfoComponent};
