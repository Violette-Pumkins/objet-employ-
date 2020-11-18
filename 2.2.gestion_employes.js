 var emp1 = new Employe("Tartempion","Formateur",2000);

 console.log(emp1.toString());
 emp1.setBranche("Manager");
 console.log(emp1.toString());
 emp1.setBranche();

var emp2 = new Employe();  //Ca plante

 emp1.branche = "Manager";
 console.log("NOM : " + emp1.nom.toUpperCase());
 console.log("Branche : " + emp1.branche);
 console.log("Salaire : " + emp1.getSalaire());
 emp1.setSalaire(3000);
 console.log("Salaire : " + emp1.getSalaire());

 emp1.salaire = 3000;
 console.log(emp1);

 console.log("Salaire annuel : " + emp1.salaireAnnuel());

 console.log(emp1);

 try {
     emp1.setSalaire(2500);
 } catch (e) {
     console.error(e.message);
 }
 console.log("TOUT VA BIEN");
 console.log(emp1.getSalaire());

 try { var emp2 = new Employe();}
 catch(e) { console.error(e.message);} // PB nom

 try { var emp3 = new Employe('T');}
 catch(e) { console.error(e.message);} // PB nom

try { var emp4 = new Employe('Thor');}
catch(e) { console.error(e.message);}  //PB branche

try { var emp5 = new Employe('Thor','B');}
catch(e) { console.error(e.message);} // PB branche

 Salaire = 0
try { var emp6 = new Employe('Thor','Test');} 
catch(e) { console.error(e.message);} 

console.log(emp6);

console.log(emp6.getSalaire());

console.log(emp6.getNom());
emp6.nom = "truc";
console.log(emp6.getNom());
console.log(emp6);
console.log(emp6.getBranche());
try {
    emp6.setBranche("M");
} catch (e) {
    console.error(e.message);
}

emp6.setBranche("Manager");
console.log(emp6.getBranche());
