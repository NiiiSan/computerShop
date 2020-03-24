import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  computers : Computer[];
  isLoading: boolean;
  constructor(private computerService: ComputerService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.computerService.getAll().subscribe(data => {
      this.computers = data;
      this.isLoading = false;
    });
  }

  deleteComputer(computer: Computer) {
    this.isLoading = true;
    this.computerService.remove(computer).subscribe(data => {
      this.computerService.getAll().subscribe(allComputers => {
        this.computers = allComputers;
        this.isLoading = false;
      });
    });
  }

}
