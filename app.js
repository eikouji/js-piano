const pianoKeys = [
    'c3', 'd3', 'e3', 'f3', 'g3', 'a3', 'b3', 'c4',
    'c#3', 'd#3', 'f#3', 'g#3', 'a#3'];
    const notes = [];
    keys.forEach(function(key){
        notes.push(document.getElementById(key));
    })


    // change the color of the note when clicked //
    function keyPlay(e){
        if (e.target.className === "keynote" || e.target.className === "black-keynote" ){
            e.target.parentElement.style.backgroundColor = "yellow";

        }else{
            e.target.style.backgroundColor = "yellow";
        }
        playAudio(e);
    }

    function keyReturn(e) {
        e.target.style.backgroundColor = "";
        e.target.parentElement.style.backgroundColor = "";
    }

    function playAudio(e){
        if(e.target.className === "keynote" || e.target.className === 
        black-keynote"){
            
        }
    }


