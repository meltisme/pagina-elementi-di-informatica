function sposta_a_destra() {
$("#quadrato").removeClass("left");
$("#quadrato").addClass("right");
}

function sposta_a_sinistra() {
$("#quadrato").removeClass("right");
$("#quadrato").addClass("left");
}

function quando_clicki() {
   if ($("#quadrato").hasClass("left")) {
     sposta_a_destra();
   } else {
     sposta_a_sinistra();
   }
 }

$("#quadrato").on("click", quando_clicki)
