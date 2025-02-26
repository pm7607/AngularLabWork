import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-static-curddemo',
  imports: [ NgFor, FormsModule],
  templateUrl: './static-curddemo.component.html',
  styleUrl: './static-curddemo.component.css'
})
export class StaticCURDdemoComponent {
  searchdata = ''
  student = ''
  idtoindex = -1
  studentdata = ['Pratik', 'Riaa', 'Janvi', 'Rohan', 'Raj', 'Riya']
  arr1 = this.studentdata

  insert() {
    if (this.idtoindex == -1) {
      this.studentdata.push(this.student)

    } else {
      this.studentdata[this.idtoindex] = this.student
    }
    this.student = ''
    this.idtoindex = -1
  }

  delete(ind: any) {
    this.studentdata.splice(ind, 1)
  }

  change(ind: any) {
    this.student = this.studentdata[ind]
    this.idtoindex = ind
  }


  search(e: any) {
    this.studentdata = this.arr1.filter((val) => {
      return val.toLowerCase().includes(this.searchdata.toLowerCase())
    })
  }
}
