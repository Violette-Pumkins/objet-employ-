function Employe (unnom, unebranche, unsalaire) {
//    if (!unnom) throw new Error("Entrez un nom");
//    if (unnom.length < 2) throw new Error("Entrez un nom d'au moins 2 caractères");
    var nom = unnom; // propriété privée
     
//    if (!unebranche) throw new Error("Entrez une branche");
//    if (unebranche.length < 2) throw new Error("Entrez une branche d'au moins 2 caractères");
    var branche = unebranche; // propriété privée

    if (!unsalaire) unsalaire = 0;
    var salaire = unsalaire; // attribut privé

    // le salaire est un attribut privé : pas de préfixe this.
    this.salaireAnnuel = function(){return salaire * 12 ;}

    // ACCESSEURS - Getters and Setters
    this.setSalaire = function(nouveauSalaire) {
        if(salaire < nouveauSalaire) {
            salaire = nouveauSalaire;
        } else {
            throw new Error("Erreur : le salaire ne peut diminuer");
        }
    }

    this.setBranche = function(unebranche) {
        if (!unebranche) throw new Error("Entrez une branche");
        if (unebranche.length < 2) throw new Error("Entrez une branche d'au moins 2 caractères");
        branche = unebranche;
    };

    var setNom = function(unnom) {
        if (!unnom) throw new Error("Entrez un nom");
        if (unnom.length < 2) throw new Error("Entrez un nom d'au moins 2 caractères");
        nom = unnom;
    };

    this.getSalaire = function(){ return salaire; }
    this.getBranche = function(){ return branche; }
    this.getNom     = function(){ return nom; }

    // Contrôle Constructeur (après la création des setters !!!)
    setNom(nom);
    this.setBranche(branche);
    

    this.toString = function() {
        return nom + " (" + branche + "), " + salaire + " €";
    }
}