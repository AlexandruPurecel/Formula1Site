import { Component } from '@angular/core';
import { Drivers, Team } from '../Models/team';
import { StudentService } from '../Services/service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private teamService: StudentService){}

  showSecondRow:boolean = false;
  inputValue: string = '';
  teamFromDB: Team[] = [];
  newTeamName: string = '';
  newTeamPrincipal: string = ''
  newTeamCountry: string='';
  driverFromDB: Drivers[] = [];
  NewDriverName: string = '';
  NewDriverNumber: number = 0;
  NewDriverTeam: string = '';
  NewDriverPoint: number = 0;

  showTeams: boolean = false;
  showDrivers: boolean = false;
  showTeamName: boolean = false;
  showTeamPrincipal: boolean = false;
  showDriverName: boolean = false;
  showDriverNumber: boolean = false;


  ngOnInit(){
    this.getTeams()
  }
  

  showMoreButtons(){
    this.showSecondRow = true;
  }

  showLessButtons(){
    this.showSecondRow = false;
  }

  
  getTeams(){
    this.teamService.getTeams().subscribe(result=>
      {
        this.teamFromDB = result;
        this.showTeams = true;
        this.showTeamName = true;
        this.showTeamPrincipal= true;
      });
  }
  addTeam(){
    let newTeam = {Name: this.newTeamName, Principal: this.newTeamPrincipal, Country: this.newTeamCountry};
    this.teamService.addTeam(newTeam);
  }

  getDrivers(){
    this.teamService.getDrivers().subscribe(result=>
      {
        this.driverFromDB = result;
        this.showDrivers = true;
        this.showDriverName = true;
        this.showDriverNumber = true;
      });
  }

  addDriver(){
    let newDriver = {Name: this.NewDriverName, Number: this.NewDriverNumber, Team: this.NewDriverTeam, Points:this.NewDriverPoint};
    this.teamService.addDrivers(newDriver);
  }

}