import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  addComputerForm: Computer;
  marqueDispo: string[];
  typeDispo: string[];
  categoriesDispo: string[];
  isLoading: boolean;
  constructor(private computerService: ComputerService,
              private router: Router) { }

  ngOnInit(): void {
    this.marqueDispo = this.computerService.marqueDispo;
    this.typeDispo = this.computerService.typeDispo;
    this.categoriesDispo = this.computerService.categoriesDispo;
    this.addComputerForm = new Computer;
    }

    addComputer(): void {
      this.computerService.add(this.addComputerForm).subscribe(data => {
        this.router.navigate(['/home']);
      });
    }

}
