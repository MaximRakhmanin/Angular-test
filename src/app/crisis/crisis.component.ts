import { Component, OnInit } from '@angular/core';
import { TestService} from '../test.service';

@Component({
  selector: 'app-crisis',
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.css']
})
export class CrisisComponent implements OnInit {

    constructor(private testService: TestService) {
    }

    ngOnInit() {
    }

    setFile(event) {
        const file = event.target.files[0];
        console.log(file);
        const formData = new FormData();
        formData.append('file', file, file.name);
        console.log(formData);
        this.testService.setFile(formData).subscribe(data => console.log(data));
    }
}
