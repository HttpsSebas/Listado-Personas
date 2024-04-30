class Persona{
    constructor(nombre, apellido, edad, DNI){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._dni = DNI;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    get dni(){
        return this._dni;
    }
    set dni(dni){
        this._dni = dni;
    }
}