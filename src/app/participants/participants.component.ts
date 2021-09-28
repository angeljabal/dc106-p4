import { Component, OnInit } from '@angular/core';
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

  female(){
    this.showAll()
    this.display = this.filterGender("Female")
  }

  male(){
    this.showAll()
    this.display = this.filterGender("Male")
  }

  showAll(){
    this.display = this.participants
  }

  filterGender(gender: string){
    return this.participants.filter(participant => participant.gender === gender)
  }

}
