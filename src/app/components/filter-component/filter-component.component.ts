import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {

  @Output() filterData = new EventEmitter<any>();
  @Output() filterName = new EventEmitter<any>();
  @Output() filterId = new EventEmitter<any>();
  
  filterForm: FormGroup;
  searchName: string;
  searchId: number;

  constructor(private fb: FormBuilder) {
    this.createFrom();
  }
  
  ngOnInit(): void {
    
  }

  createFrom() {
    this.filterForm = new FormGroup({
        searchName: new FormControl(),
        searchId: new FormControl(),
    });
  }

  searchNameChanges() {
    this.searchName = this.filterForm.get('searchName')?.value!;
    this.filterName.emit(this.searchName);
  }

  searchIdChanges() {
    this.searchId = this.filterForm.get('searchId')?.value;
    this.filterId.emit(this.searchId);
  }

  search() {
    this.filterData.emit();
    // this.clean();
  }

  clean() {
    this.filterForm.get('searchName')?.setValue('');
    this.filterForm.get('searchId')?.setValue(null);
  }


}
