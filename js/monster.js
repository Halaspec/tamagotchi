// Attributs du monstre
let naeme;
let life;
let money;
let awake;
// Bouton de l'interface 
let run_btn = document.getElementById("run");
let fight_btn = document.getElementById("fight");
let work_btn = document.getElementById("work");
let sleep_btn = document.getElementById("sleep");
let eat_btn = document.getElementById("eat");
let show_btn = document.getElementById("show");
let douche_btn = document.getElementById("douche");
let sing_btn = document.getElementById("sing");
let new_life_btn = document.getElementById("new");
let kill_btn = document.getElementById("kill");
let fight_audio = document.getElementById("fight_audio");
let wash_audio = document.getElementById("wash_audio");
let eat_audio = document.getElementById("eat_audio");
let sleep_audio = document.getElementById("sleep_audio");
let work_audio = document.getElementById("work_audio");
let zic1_audio = document.getElementById("zic1");
let zic2_audio = document.getElementById("zic2");
let run_audio = document.getElementById("run_audio");
let gameover = document.getElementById("gameover");
let hello = document.getElementById("hello"); 
let hire_Btn = document.getElementById("click");
 let closeBtn = document.getElementById("close");
 let pop = document.getElementById("status");
 let containpop = document.getElementById("contain-pop");
 let sendBtn = document.getElementById("envoie");
 let msgPut = document.getElementById("msg");
 let mailPut = document.getElementById("mail");
let audio_list = [fight_audio, wash_audio, eat_audio, sleep_audio, zic1_audio, zic2_audio];
// variables de l'interface du monstre
let monster = document.getElementById("monster");
let boite_monster = document.getElementById("boitemonster");
let boite_log = document.getElementById("actionbox");
let boite_statut = document.getElementById("statut");
let actoinBoite_liElements = boite_statut.querySelectorAll('li');
// variables de l'interface du monstre
let str_awake = "Reveillé";
function check_monster_awake() { if (!awake) { str_awake = "Endormie"; } else { str_awake = "Reveillé"; } if(life == -1) {str_awake="Mort";kill_monster();} }
// Fonction creation de monstre
function initMonster(name_, life_, money_) {
    naeme = name_;
    life = life_;
    money = money_;
    awake = true;
    new_life_btn.disabled = true;
};
// Fonction affichage de monstre sur la console
function afficheMonstre() {
    check_monster_awake;
    str = "Monstre " + naeme + " crée avec " + life + " vie et " + money + " euros" + " votre statut " + str_awake;
    console.log(str);
    logBoite(str);
}
// permet d’ajouter un message dans la boîte
function logBoite(message) {
    p_log = document.createElement("p");
    p_log.textContent = "- " + message;
    boite_log.insertBefore(p_log, boite_log.firstChild);
};

// Afichage des actuelle stats du mointre
function updateStatus() {
    updateColor(life);
    updateBorder();
    actoinBoite_liElements[0].textContent = "Vie : " + life;
    actoinBoite_liElements[1].textContent = "Argent : " + money;
    actoinBoite_liElements[2].textContent = str_awake;
    check_monster_awake();
};

// Action qui peut realiser le monstre

// Courir : perte de 1 point de vie ;
function courir() {
    if (life < 1) { logBoite("Action impossible " + naeme + "  n'a pas assez de vie !"); return; }
    if (awake) {
        stopAllaudio();
        run_audio.play();
        monster.src = "src/images/courir.gif";
        life--;
        console.log("courir"+life);
        logBoite("Action <courir> effectué");
        updateStatus();
    }
    else { logBoite("Action <courir> impossible " + naeme + " est " + str_awake); }
};
// se battre : perte de 3 points de vie 
function sebattre() {
    if (life < 3) { logBoite("Action impossible " + naeme + " pas assez de vie !"); return; }
    if (awake) {
        stopAllaudio();
        fight_audio.play();
        monster.src = "src/images/sebattre.gif";
        life -= 3;
        logBoite("Action  <se battre> effectué");
        updateStatus();

    }
    else { logBoite("Action <se battre> impossible" + naeme + " est " + str_awake); }
};
// Travailler : perte de 1 point de vie et gain de 2 unités d’argent ;
function travailler() {
    if (life < 1) { logBoite("Action impossible " + naeme + "  n'a pas assez de vie"); return; }
    if (awake) {
        stopAllaudio();
        work_audio.play();
        monster.src = "src/images/travailler.gif";
        life--;
        money += 2;
        logBoite("Action <travailler> effectué");
        updateStatus();
    }
    else { logBoite("Action <travailler> impossible" + naeme + " est " + str_awake); }
};
// Manger : perte de 3 unités d’argent et gain de 2 points de vie
function manger() {
    if (money < 3) { logBoite("Action impossible " + naeme + " est pauvre !"); return; }
    if (awake) {
        stopAllaudio();
        eat_audio.play();
        monster.src = "src/images/manger.gif";
        money -= 3;
        life += 2;
        logBoite("Action <manger> effectué");
        updateStatus();
    }
    else { logBoite("Action <manger> impossible" + naeme + " est " + str_awake); }
};
// Dormir 
function dormir() {
    if (life < 0) { logBoite("Action impossible " + naeme + " est mort !"); return; }
    if (awake) {
        stopAllaudio();
        sleep_audio.play();
        monster.src = "src/images/dormir.gif";
        awake = false;
        updateStatus();
        logBoite(naeme + " s'endorme");
        swap_color_monster("GREY");
        action_btn_disbled(true);
        setTimeout(dormir, 12000);
    }
    else { swap_color_monster("GREEN");life++; awake = true; updateStatus(); logBoite(naeme + " se reveille"); action_btn_disbled(false); }

}
//doche
function douche() {
    if (life < 1) { logBoite("Action impossible " + naeme + "  n'a pas assez de vie !"); return; }
    if (awake) {
        stopAllaudio();
        wash_audio.play();
        monster.src = "src/images/douche.gif";
        life++;
        console.log("courir"+life);
        logBoite("Action <douche> effectué");
        updateStatus();
    }
    else { logBoite("Action <douche> impossible " + naeme + " est " + str_awake); }
};
// sing
function sing() {
    let choice = Math.floor(Math.random() * 2) + 1;
    if (life < 1) { logBoite("Action impossible " + naeme + "  n'a pas assez de vie !"); return; }
    if (awake) {
        stopAllaudio();
        if (choice == 1) { zic2_audio.play(); }else{ zic1_audio.play();}
        monster.src = "src/images/sing.gif";
        life++;
        money ++;
        console.log("sing"+life);
        logBoite("Action <sing> effectué");
        updateStatus();
    }
    else { logBoite("Action <sing> impossible " + naeme + " est " + str_awake); }
};
// Action au hasard 
function actionauhasard() {
    if (life <= 0) return;
    let choice = Math.floor(Math.random() * 7) + 1;
    switch (choice) {
        case 1: sebattre(); break;
        case 2: travailler() ; break;
        case 3: courir(); break;
        case 4: manger(); break;
        case 5: dormir(); break;
        case 6: douche(); break;
        case 7: sing(); break;
    }
};
// kill monstre 
function kill_monster(){
    stopAllaudio();
    gameover.play();
    monster.src = "src/images/kill.gif";
    life = -1;
    show_btn.disabled   = true;
    kill_btn.disabled   = true;
    new_life_btn.disabled = false;
    swap_color_monster("BALCK");
    action_btn_disbled(true);
    updateStatus();
};
// nouvelle vie monstre 
function new_life__monster(){
    stopAllaudio();
    hello.play();
    monster.src = "src/images/go.gif";
    action_btn_disbled(false);
    show_btn.disabled   = false;
    kill_btn.disabled   = false;
    new_life_btn.disabled=true;
    setInterval(actionauhasard, 12000);
    initMonster("timmy", 20, 20);
    swap_color_monster("BLUE");
    updateStatus();
};
// Listener sur les boutons 

// Show affiche stats du monstre dans la boite log
show_btn.addEventListener('click', function () { afficheMonstre(); });
fight_btn.addEventListener('click', function () { sebattre() });
work_btn.addEventListener('click', function () { travailler() });
run_btn.addEventListener('click', function () { courir() });
eat_btn.addEventListener('click', function () { manger() });
sleep_btn.addEventListener('click', function () { dormir() });
douche_btn.addEventListener('click', function () { douche() });
sing_btn.addEventListener('click', function () { sing() });
new_life_btn.addEventListener('click', function () { new_life__monster() });
kill_btn.addEventListener('click', function () { kill_monster() });
// Foncction de lancement 
function go() {
    monster.src = "src/images/go.gif";
    initMonster("timmy", 20, 20);
    logBoite("Bonjour " + naeme + "!"); // test logBoite
    updateStatus();
    setInterval(actionauhasard, 12000);
      
}

// Ajout de la fonction de lancement au chargement de la page
window.addEventListener('load', go);


// animation function bonus
function swap_color_monster(color){
    monster.style.background=color;
}

function updateColor(points) {
    var red, green, blue;

    if (points <= 10) {
      // Variation du rouge au vert
      red = 255 - (points * 25);
      green = points * 25;
      blue = 0;
    } else if (points < 20) {
      // Variation du vert au bleu
      red = 0;
      green = 255 - ((points - 10) * 25);
      blue = (points - 10) * 25;
    } else {
      // Couleur bleue
      red = 0;
      green = 0;
      blue = 255;
    }evoie
    monster.style.border= str_money + " solid black";
    
}

function action_btn_disbled(bool){
    run_btn.disabled    = bool;
    fight_btn.disabled  = bool;
    work_btn.disabled   = bool;
    sleep_btn.disabled  = bool;
    eat_btn.disabled    = bool;
    douche_btn.disabled = bool;
    sing_btn.disabled = bool;
};

function stopAllaudio(){
    audio_list.forEach(element => {
        element.pause();
    });
};


hire_Btn.addEventListener("click", () => {
    pop.classList.add("pop_show");
  }
  );
  
  closeBtn.addEventListener("click", () => {
    alert("marche");
  
  }
  );
  
  containpop.addEventListener("click", () => {
    event.stopPropagation();
  }
  );
  
  pop.addEventListener("click", () => {
    pop.classList.remove("pop_show");
  }
  );

  mailPut.addEventListener("input", () => {
    if (msgPut.value != null && mailPut.value != null){ sendBtn.disabled = false; } else {sendBtn.disabled = true; }
  
  })
  
  
  msgPut.addEventListener("input", () => {
    if (msgPut.value != null && mailPut.value != null) { sendBtn.disabled = false; } else {sendBtn.disabled = true; }
  })
  
  sendBtn.disabled = true;
  sendBtn.addEventListener("click", () => {
    alert("Envoie avec succées");
    pop.classList.remove("pop_show");
  }
  )