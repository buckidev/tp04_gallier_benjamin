export class  Client {
    public login: String="";
    public mdp: String="";
    public Nom: String="";
    public Prenom: String="";

    constructor(login:String,mdp:String,Nom:String,Prenom:String){
      this.login=login;
      this.mdp=mdp;
      this.Nom=Nom;
      this.Prenom=Prenom;
    }
  }