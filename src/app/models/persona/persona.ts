export class Persona {

    public id?: number;
    public nomre?:string;
    public apellido?:string
    public tipo?:Tipo;
    public alta?:Date;
            
    constructor(){
        this.tipo= new Tipo(0,"")
    } 
    
    }

 export class Tipo{
    public id?:number;
    public descripdion?:string;

    constructor(id:number,descripcion:string){
        this.id=id
        this.descripdion=descripcion;
    }
 }   

