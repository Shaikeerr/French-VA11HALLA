var gif=1
var perso=""
var lien_perso=""
var expression=1

function next_gif() {
    gif+=1
    if (gif==1) {
        document.getElementById("Gif").src="Gifs/TV.gif"
    }
    else if (gif==2) {
        document.getElementById("Gif").src="Gifs/Protecc.gif"
    }
    else if (gif==3) {
        document.getElementById("Gif").src="Gifs/Dollar.gif"
    }
    else if (gif==4) {
        document.getElementById("Gif").src="Gifs/Cool.gif"
    }
    else if (gif==5) {
        document.getElementById("Gif").src="Gifs/Anna.gif"
    }
    else if (gif==6) {
        document.getElementById("Gif").src="Gifs/Magical-Girl.gif"
    }
    else if (gif==7) {
        document.getElementById("Gif").src="Gifs/Bubbles.gif"
    }
    else if (gif==8) {
        document.getElementById("Gif").src="Gifs/Hero.gif"
    }
    else if (gif==9) {
        document.getElementById("Gif").src="Gifs/off.png"
    }
    else {
        gif=0
        next_gif()
    }
}

function change_persos(x) {
    reset_animation()
    expression=1
    if (x==1) {
        perso="Alma"
        max=7
        document.getElementById("Texte_perso").innerHTML="Alma: Hackeuse est un mot juste pour me décrire, <br> même si ce n'est pas le meilleur. Je suis <br>consultante en sécurité"

    }
    else if (x==2) {
        perso="Anna"
        max=5
        document.getElementById("Texte_perso").innerHTML="Anna: Je ne te veux pas de mal, tu ne peux pas <br> juste m'ignorer tu sais ?"
    }
    else if (x==3) {
        perso="Art"
        max=2
        document.getElementById("Texte_perso").innerHTML="Art: Von Dellay.. Art Von Dellay, c'est mon nom."
    }
    else if (x==4) {
        perso="Betty"
        max=5
        document.getElementById("Texte_perso").innerHTML="Betty: La Bière du Vendredi soir n'est pas <br> n'importe laquelle. C'est LA Bière."
    /*
    else if (x==4) {
        perso="Brian"
        max=2
    */
    }
    else if (x==5) {
        perso="Dana"
        max=5
        document.getElementById("Texte_perso").innerHTML="Dana: J'ai 17 ans éternellement!"
    }
    else if (x==6) {
        perso="Deal"
        max=5
        document.getElementById("Texte_perso").innerHTML="Deal: Je ne suis pas obsédé par mon travail! <br> Juste Passioné!"
    }
    else if (x==7) {
        perso="Donovan"
        max=3
        document.getElementById("Texte_perso").innerHTML="Donovan: Si un endroit sent le savon et le chien <br> mouillé, j'ai, selon mes droits constitutionels, <br> le droit de l'appeler Trou à rat"
    }
    else if (x==8) {
        perso="Dorothy"
        max=8
        document.getElementById("Texte_perso").innerHTML="Dorothy: Ils mettront ma mémoire dans un <br> aspirateur pendant 3 ans!"
    }
    else if (x==9) {
        perso="Gaby"
        max=5
        document.getElementById("Texte_perso").innerHTML="Gaby: Est ce que tu es énervée..?"
    }
    else if (x==10) {
        perso="Gillian"
        max=5
        document.getElementById("Texte_perso").innerHTML="Gillian: JE NE RETOURNERAIS PAS A HONK KONG!!!"
    }
    else if (x==11) {
        perso="Ingram"
        max=1
        document.getElementById("Texte_perso").innerHTML="Ingram: ..."
    }
    else if (x==12) {
        perso="Jamie"
        max=5
        document.getElementById("Texte_perso").innerHTML="Jamie: La vie est une guerre pour laquelle on se bat <br> chaque jour."
    }
    /*
    else if (x==14) {
        perso="Jess"
        max=1
    */
    else if (x==13) {
        perso="Jill"
        max=6
        document.getElementById("Texte_perso").innerHTML="Jill: Il est l'heure de préparer des boissons et <br> de changer des vies.";
    }
    /*
    else if (x==14) {
        perso="Kim"
        max=5

    else if (x==14) {
        perso="*Kira* Miki"
        max=4

    else if (x==14) {
        perso="Lexi"
        max=5

    else if (x==14) {
        perso="Mario"
        max=5
    */
    else if (x==14) {
        perso="Nicole"
        max=5
        document.getElementById("Texte_perso").innerHTML="Nicole: Je suis Streaming-Chan! Et je vous filme <br> en direct ma vie 24/24h!"
    }
    else if (x==15) {
        perso="Sei"
        max=7
        document.getElementById("Texte_perso").innerHTML="Sei: Tu as l'air d'être une personne sympatique, <br> et je déteste énerver des personnes sympatiques."
    }
    else if (x==16) {
        perso="Stella"
        max=5
        document.getElementById("Texte_perso").innerHTML="Stella Ouais..Hum...Appelez moi juste Stella"
    }
    /*
    else if (x==14) {
        perso="TOMCAT"
        max=4

    else if (x==14) {
        perso="Tyler"
        max=1
    */
    else if (x==17) {
        perso="Virgilio"
        max=5
        document.getElementById("Texte_perso").innerHTML="Virgilio: Chaque humain possède 17 paires de <br> chromosomes. Ce nombre est la fondation de toi <br> et de moi."
    /*
    else if (x==14) {
        perso="Vella"
        max=4
    */
   
    }
    lien_perso="Textures Persos/"+perso+"/"+perso+"_1.png"
    document.getElementById("Personnages").src = lien_perso

}

function expression_suivante() {
    expression+=1
    if (expression > max) {
        expression=1
    }
    choix_expression()
}

function expression_précédente() {
    expression-=1
    if (expression == 0) {
        expression=max
    }
    choix_expression()
}

function choix_expression() {
    lien_perso="Textures Persos/"+perso+"/"+perso+"_"+expression+".png"
    document.getElementById("Personnages").src = lien_perso
}

function reset_animation() {
    var element = document.getElementById('Texte_perso');
    element.style.animation = 'none';
    element.offsetHeight; /* trigger reflow */
    element.style.animation = null; 
  }
