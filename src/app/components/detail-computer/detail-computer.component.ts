import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-computer',
  templateUrl: './detail-computer.component.html',
  styleUrls: ['./detail-computer.component.css']
})
export class DetailComputerComponent implements OnInit {
  computer: Computer;
  isLoading: boolean;
  constructor(private computerService: ComputerService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.computerService.getById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.computer = data;
        this.isLoading = false;
      });
  }

}
