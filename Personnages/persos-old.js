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
        document.getElementById("Gif").src="Gifs/Protec.gif"
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
        document.getElementById("Gif").src="Gifs/MG.gif"
    }
    else if (gif==7) {
        document.getElementById("Gif").src="Gifs/Bubbles.gif"
    }
    else if (gif==8) {
        document.getElementById("Gif").src="Gifs/Hero.gif"
    }
    else {
        gif=0
        next_gif()
    }
}

function change_persos(x) {
    expression=1
    if (x==1) {
        perso="Alma"
    }
    else if (x==2) {
        perso="Anna"
    }
    else if (x==3) {
        perso="Art"
    }
    else if (x==4) {
        perso="Betty"
    }
    else if (x==5) {
        perso="Dana"
    }
    else if (x==6) {
        perso="Deal"
    }
    else if (x==7) {
        perso="Donovan"
    }
    else if (x==8) {
        perso="Dorothy"
    }
    else if (x==9) {
        perso="Gaby"
    }
    else if (x==10) {
        perso="Gillian"
    }
    else if (x==11) {
        perso="Ingram"
    }
    else if (x==12) {
        perso="Jamie"
    }
    else if (x==13) {
        perso="Jill"
    }
    else if (x==14) {
        perso="Nicole"
    }
    else if (x==15) {
        perso="Sei"
    }
    else if (x==16) {
        perso="Stella"
    }
    else if (x==17) {
        perso="Virgilio"
    }
    lien_perso="Textures Persos/"+perso+"/"+perso+"_1.png"
    document.getElementById("Personnages").src = lien_perso

}

function expression_suivante() {
    if (expression > 0 & expression < 5) {
        expression+=1
    }
    else {
        expression=1
    }
    choix_expression()
}

function expression_précédente() {
    if (expression > 1 & expression < 6) {
        expression-=1
    }
    else {
        expression=5
    }
    choix_expression()
}

function choix_expression() {
    lien_perso="Textures Persos/"+perso+"/"+perso+"_"+expression+".png"
    document.getElementById("Personnages").src = lien_perso
}

