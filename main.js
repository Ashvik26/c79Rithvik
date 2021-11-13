var pokemon_names=[];
function submition(){
    var name1=document.getElementById("pokemon1").value;
    var name2=document.getElementById("pokemon2").value;
    var name3=document.getElementById("pokemon3").value;
    var name4=document.getElementById("pokemon4").value;
    pokemon_names.push(name1);  
    pokemon_names.push(name2);
    pokemon_names.push(name3);
    pokemon_names.push(name4);
    document.getElementById("pk_names").innerHTML=pokemon_names;
    document.getElementById("pk1").style.display="none";
    document.getElementById("pk2").style.display="inline-block";
}
function organize(){
    pokemon_names.sort();
    document.getElementById("pk1").innerHTML=pokemon_names;

}