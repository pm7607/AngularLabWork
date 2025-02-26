import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-of-obj',
  imports: [ NgFor,FormsModule],
  templateUrl: './array-of-obj.component.html',
  styleUrl: './array-of-obj.component.css'
})
export class ArrayOfObjComponent {
  title = 'Array of Objects';
  searchdata = ''

  idtoindex = -1
  studentdata = [
    { firstname: 'jonh', lastname: 'hang' },
    { firstname: 'pratik', lastname: 'Mehta' },
    { firstname: 'honey', lastname: 'Patel' },
  ]
  temp = { firstname: '', lastname: '' }

  obj1 = this.studentdata;

  insert() {
    if (this.idtoindex == -1) {
      this.studentdata.push({ ...this.temp })

    } else {
      this.studentdata[this.idtoindex].firstname = this.temp.firstname
      this.studentdata[this.idtoindex].lastname = this.temp.lastname
    }
    this.temp.firstname = ''
    this.temp.lastname = ''
    this.idtoindex = -1
  }

  delete(ind: any) {
    this.studentdata.splice(ind, 1)
  }

  change(ind: any) {
    this.temp.firstname = this.studentdata[ind].firstname
    this.temp.lastname = this.studentdata[ind].lastname
    this.idtoindex = ind
  }


  search(e: any) {
    this.studentdata = this.obj1.filter((val: any) => {
      if (val.firstname.toLowerCase().includes(this.searchdata.toLowerCase()) ||
        val.lastname.toLowerCase().includes(this.searchdata.toLowerCase())
      ) {
        return val
      }
    })
  }

}
