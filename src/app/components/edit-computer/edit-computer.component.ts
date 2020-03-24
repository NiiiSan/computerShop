import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  editComputerForm: Computer;
  marqueDispo: string[];
  typeDispo: string[];
  categoriesDispo: string[];
  isLoading: boolean;
  constructor(private computerService: ComputerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.marqueDispo = this.marqueDispo;
    this.typeDispo = this.computerService.typeDispo;
    this.computerService.getById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.editComputerForm = data;
        this.isLoading = false;
      });
  }

  editComputer() {
    this.computerService.editComputer(this.editComputerForm).subscribe((data)=> {
      this.router.navigate(['/home']);
    });
  }
}
