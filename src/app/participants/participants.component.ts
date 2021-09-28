import { Component } from '@angular/core';
import { ParticipantsService } from './participants.service';

@Component({
  selector: 'participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent {

  title = "List of Participants"
  participants;
  display;

  constructor (service: ParticipantsService){
    this.display = this.participants = service.getParticipants()
  }

  showAll(){
    this.display = this.participants
  }

  filterGender(gender: string){
    this.display = this.participants.filter(participant => participant.gender === gender)
  }

}
