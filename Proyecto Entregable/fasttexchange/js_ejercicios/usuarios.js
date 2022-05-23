
class Usuarios {

    constructor(nombre, user, password, saldo, prestamos ) {
        this.nombre = nombre;
        this.user = user;
        this.password = password;
        this.saldo = saldo;
        this.prestamos = prestamos;
    }    

    getNombre() { return this.nombre; }
    getUser() { return this.user; }
    getPassword() { return this.password; }
    getSaldo() { return this.saldo; }
    getPrestamos() { return this.prestamos;}
    setNombre(nombre) { this.nombre = nombre; }
    setUser(user) { this.user = user; }
    setPassword(password) { this.password = password; }
    setSaldo(saldo) { this.saldo = saldo; }
  

    mostrar() {
        console.log( "\n " + this.nombre + " | " + this.user + " | " + this.password + " | " + this.saldo + " | " + this.prestamos );
    }

    randomUsrName() {        
        let usrName = Math.floor(Math.random()*117)       
        return usrName;
    }

    randomPassword() {        
        let ranPassword = Math.floor(Math.random()*254869)     
        return ranPassword;
    }
    
    randomSaldo() {        
        let ranSaldo = Math.floor(Math.random()*100000)     
        return ranSaldo;
    }
    
    
}

function generadorUsuarios() {

    let cantidad = +prompt("Ingreses la cantidad de usuarios con prestamos a crear");

    console.log("===========================================================");
    
    for (let i = 1; i <= cantidad; i++) {
    
        let metodosDelUsuario = new Usuarios();
        let usrName = metodosDelUsuario.randomUsrName();
        let ranSaldo = metodosDelUsuario.randomSaldo();
        let ranPassword = metodosDelUsuario.randomPassword();    
    
        let usuario = new Usuarios( "Martin"+[i] , 'martin_'+[usrName] , "1234_"+ ranPassword ,  +ranSaldo,  + true);    
        usuario.mostrar();
        
        localStorage.setItem(i, JSON.stringify(usuario));
    
    }
    
    console.log("\n ===========================================================");

    cantidad = +prompt("Ingreses la cantidad de usuarios sin prestamos a crear");

    for (let j = 1; j <= cantidad; j++) {
    
        let metodosDelUsuario = new Usuarios();
        let usrName = metodosDelUsuario.randomUsrName();
        let ranSaldo = metodosDelUsuario.randomSaldo();
        let ranPassword = metodosDelUsuario.randomPassword();
    
    
        let usuario = new Usuarios( "Martin"+[j] , 'martin_'+[usrName] , "1234_"+ ranPassword ,  +ranSaldo,  + false);    
        usuario.mostrar();
        
        localStorage.setItem(j, JSON.stringify(usuario));
            
    }

    console.log("\n ===========================================================");
}

generadorUsuarios();








  



