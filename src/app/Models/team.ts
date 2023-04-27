export class Team{
  Name: string;
  Principal: string;
  Country: string;

  constructor()
  {
      this.Name = '';
      this.Principal='';
      this.Country='';
  }
}

export class Drivers{
  Name: string;
  Number: number;
  Team: string;
  Points: number;

  constructor()
  {
    this.Name='';
    this.Number=0;
    this.Team='';
    this.Points=0;
  }

}

