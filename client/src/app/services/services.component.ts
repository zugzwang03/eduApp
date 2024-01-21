import { Component, Input} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  @Input() question: string = '';
  @Input() solution: string = '';
  constructor(private clientService: ClientService) { }
  ngOnInit() {
    
  }
  questionSubmitted() {
    this.clientService.postSubjectiveQs(this.question).subscribe(solution => {
      this.solution = solution;
    });
  }
}
