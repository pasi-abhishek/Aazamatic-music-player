var i = 0;
var v = 0.5;
var song = new Audio();





var song_name_array = ['Despacito ','Shape of You','See You Again','Uptown Funk ','Gangnam Style ','Dame Tu Cosita','Sorry ','Sugar ','Roar ','Counting Stars']

var singer_name_array = ['Luis Fonsi ft. Daddy Yankee',' Ed Sheeran',' Wiz Khalifa ft. Charlie Puth','Mark Ronson ft. Bruno Mars','PSY',' El Chombo ft. Cutty Ranks','Justin Bieber','Maroon 5',' Katy Perry','OneRepublic']

var song_artwork_array = [
    'https://images.genius.com/736a05a3bfc3ae89af3d9b4d3e6c209d.1000x1000x1.jpg',
    'https://tse4.mm.bing.net/th?id=OIP.EHwrQ_EMJJB3wfdhhWO7YwHaHa&pid=Api&P=0&h=180" alt="song artwork',
    'https://tse3.mm.bing.net/th?id=OIP.4nuDFHJCooQyw9OpzyF9hAHaHa&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.VyeFyGokzCalwshSdw6OpQHaHa&pid=Api&P=0&h=180',
    'https://www.postergully.com/cdn/shop/products/105_Copy_1024x1024.jpg?v=1578633946',
    'https://i.scdn.co/image/ab67616d0000b273ffcfbdbf6be9e9dea73ea65d',
    'https://i1.sndcdn.com/artworks-000146958777-ktveel-t500x500.jpg',
    'https://i1.sndcdn.com/artworks-000107338750-5bxgf8-t500x500.jpg',
    'https://m.media-amazon.com/images/I/513u94PPcFL._AC_UF894,1000_QL80_.jpg',
    'https://i.scdn.co/image/ab67616d0000b273abe84d30b6cbe9452dea68e5'





]

var song_link_array = [
    'https://www.dropbox.com/scl/fi/6mvaz81uibt64nnjuz46f/Despacito.mp3?rlkey=x70z46r4xnszdwohe1aqtp7za&st=sz3uz23m&dl=1',
    'https://www.dropbox.com/scl/fi/wbq3ksbloen3390kk58tp/Shape-of-you.mp3?rlkey=iyxd2nssq06adoncgzwmshnex&st=33d4xc4e&dl=1',
    'https://www.dropbox.com/scl/fi/m90nydkmw3vlazybyvkba/Wiz-Khalifa-See-You-Again-feat.-Charlie-Puth.mp3?rlkey=i36v7a5rwah5j8jfm9ivxqtkc&st=ljxrti5b&dl=1',
    'https://www.dropbox.com/scl/fi/h9k128jcdf1vxq4c1j11p/uptown-funk.mp3?rlkey=06fo9ct5xikku7s5dy45too2u&st=z0mx8l5s&dl=1',
    'https://www.dropbox.com/scl/fi/1qsa641ilxi6rxv268h5p/Gangnam-style.mp3?rlkey=i4cdhsopreifsvibir9od4rqz&st=2i6qrbwo&dl=1',
    'https://www.dropbox.com/scl/fi/1iya363gg2a8qu9qjl6yh/damn-tu-pasita.mp3?rlkey=uju3ceicmuiq6y2889kdfxewb&st=s2wsjxri&dl=1',
    'https://www.dropbox.com/scl/fi/asm458sn1mq7bq6i1mt8v/sorry-justin-beiber.mp3?rlkey=uhskd8e390g6s6gpvhvdwftyv&st=aao3ki8q&dl=1',
    'https://www.dropbox.com/scl/fi/rfros6e8egjyijnvm1q90/sugar-maroon-5.mp3?rlkey=xq6y6yd6f9ijsk02ly9auh6s7&st=h3m4zixk&dl=1',
    'https://www.dropbox.com/scl/fi/1tfsnopax8crrw4aiv16h/roar-katy-perry.mp3?rlkey=kpgt0rqewub5fkhjrockjt5kn&st=rbgk46nu&dl=1',
    'https://www.dropbox.com/scl/fi/f8so7trh33jfyhib3mxhl/counting-Star.mp3?rlkey=e5g4e9ok5gk8mpj4k6ts4y8j0&st=79g05c0l&dl=1'

]


function shuru(){
    i = 0;
    document.getElementById("song_name_position").innerHTML = song_name_array[i];
    document.getElementById("singer_name_position").innerHTML = singer_name_array[i];
    document.getElementById("artwork_wall").src = song_artwork_array[i] ;


}

function play( j ){
    i = j;
    document.getElementById("song_name_position").innerHTML = song_name_array[i];
    document.getElementById("singer_name_position").innerHTML = singer_name_array[i];
    document.getElementById("artwork_wall").src = song_artwork_array[i] ;
    song.src= song_link_array[i]
    song.play()
    document.getElementById('play').style="background-color : var(--color1); border-radius: 50%;"
    document.getElementById('pause').style="background-color : var(--color3); border-radius: 50%;"



}
function pause(){
    song.pause();
    document.getElementById('pause').style="background-color : var(--color1); border-radius: 50%;";
    document.getElementById('play').style="background-color : var(--color3); border-radius: 50%;"

}

function next(i){
    if(i < song_name_array.length-1){
        i+=1;
        play(i)
    }
    else{
        i= 0;
        play(i)
    }

}

function pre(i){
    if(i < 1){
        i= song_name_array.length-1;
        play(i)
    }
    else{
        i-= 1;
        play(i)
    }

}

function volume(x){
    v = x;
    song.volume = v;

}


document.addEventListener('keydown', keydown_ivent);

function keydown_ivent(e) {
	
	var key ;
	switch (e.key) {

		case 'ArrowUp':
			key = v+0.1;
            volume(key)
			break;
		case 'ArrowDown':
			key = i;
            key = v-0.1;
            volume(key)
			break;
        case 'ArrowLeft':
			key = i;
            pre(key)
			break;
		case 'ArrowRight':
			key = i;
            next(key)
			break;
	}
	
}



