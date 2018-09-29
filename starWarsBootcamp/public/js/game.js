var imageCharacters = []

imageCharacters['THVrZSBTa3l3YWxrZXI='] = "https://www.sideshowtoy.com/assets/products/300187-luke-skywalker/lg/star-wars-luke-skywalker-premium-format-300187-09.jpg"

imageCharacters['Qy0zUE8='] = "https://www.sideshowtoy.com/assets/products/300508-c-3po/lg/star-wars-c-3po-premium-format-300508-08.jpg"

imageCharacters['UjItRDI='] = "https://www.sideshowtoy.com/assets/products/400155-r2-d2/lg/star-wars-r2-d2-legendary-scale-figure-sideshow-400155-01.jpg"

imageCharacters['RGFydGggVmFkZXI='] = "https://www.sideshowtoy.com/assets/products/400103-darth-vader/lg/star-wars-darth-vader-legendary-scale-figure-400103-10.jpg"

imageCharacters['TGVpYSBPcmdhbmE='] = "https://www.sideshowtoy.com/wp-content/uploads/2017/12/star-wars-leia-organa-sixth-scale-figure-hot-toys-feature-903333.jpg"

imageCharacters['T3dlbiBMYXJz'] = "https://pixel.nymag.com/imgs/daily/vulture/2017/12/07/star-wars-cameos/joel-edgerton-owen-lars.w710.h473.2x.jpg"

imageCharacters['QmVydSBXaGl0ZXN1biBsYXJz'] = "https://vignette.wikia.nocookie.net/starwars/images/7/7b/Beru_Luke.png/revision/latest?cb=20130207003217"

imageCharacters['UjUtRDQ='] = "https://img1.cgtrader.com/items/675504/c6593b4816/large/r5-d4-droid-star-wars-3d-model-max-obj-fbx-mtl.jpg"

imageCharacters['QmlnZ3MgRGFya2xpZ2h0ZXI='] = "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768"

imageCharacters['T2JpLVdhbiBLZW5vYmk='] = "https://www.sideshowtoy.com/wp-content/uploads/2018/03/star-wars-obi-wan-kenobi-sixth-scale-figure-hot-toys-feature-903476.jpg"

imageCharacters['RGFydGggTWF1bA=='] = "https://www.sideshowtoy.com/wp-content/uploads/2015/10/star-wars-darth-maul-sixth-scale-feature-100156.jpg"

imageCharacters['WW9kYQ=='] = "https://www.defensacentral.com/ustedpregunta/data/articulos/en-que-personaje-historico-esta-basado-el-maestro-yoda-de-star-wars/5b277b1a02fda.jpg"

imageCharacters['TWFzIEFtZWRkYQ=='] = "https://i.ytimg.com/vi/tHPSI6pit_g/maxresdefault.jpg"

imageCharacters['UG9lIERhbWVyb24='] = "https://lumiere-a.akamaihd.net/v1/images/poe-dameron_70f5aee2.jpeg?region=0%2C0%2C1560%2C878&width=768"

imageCharacters['UGFkbekgQW1pZGFsYQ=='] = "https://am23.akamaized.net/tms/cnt/uploads/2016/09/padme.jpg"

imageCharacters['R3JlZWRv'] = "https://gaming-fans.com/wp-content/uploads/2017/07/bjorn-arvidsson-bjorn-arvidsson-45-e1500422678170-777x437.jpg"

imageCharacters['SmFiYmEgRGVzaWxpamljIFRpdXJl'] = "http://pm1.narvii.com/6550/b9f7f9e2d5b4198e5e5deef1f6acd4072d16db8d_00.jpg"

imageCharacters['V2VkZ2UgQW50aWxsZXM='] = "https://cdn.vox-cdn.com/thumbor/Pt7Fwjy99KLhITCTf-YYjLfEO3Q=/188x0:1410x815/1200x800/filters:focal(188x0:1410x815)/cdn.vox-cdn.com/uploads/chorus_image/image/32955745/wedge.0.jpg"

imageCharacters['TGFuZG8gQ2Fscmlzc2lhbg=='] = "https://img.europapress.es/fotoweb/fotonoticia_20180710095949_640.jpg"

imageCharacters['QXJ2ZWwgQ3J5bnlk'] = "https://vignette.wikia.nocookie.net/es.starwars/images/d/de/Arvel-crynyd.jpg/revision/latest?cb=20180818202306"

let query = ""
let lengthQuery = 0
let cc = []

function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

function loadStarWars() {

    $('.sticky').sticky()
    var req = new XMLHttpRequest()


    req.onreadystatechange = function () {


        if (this.readyState == 4 && this.status == 200) {
            people = JSON.parse(this.responseText)
            console.log(people)
            if(people.count == 0){
              query = ""
              loadStarWars()
            }
            const sliderCharacter = $('#sliderCharacter')
            people.results.forEach(function (character, index) {

                let iconGender = null;
                if (character.gender == "male") {
                    iconGender = "mars"
                } else if (character.gender == "female") {
                    iconGender = "venus"
                } else {
                    iconGender = "neuter"
                }

                codifiedName = (window.btoa(character.name))

                cc.push(codifiedName)

                let card_character = `
                <div class="column">
                    <div class="ui card link centered cardPeople" id="cardCharacter">
                        <div class="image imgCharacter" >
                            <img id="image imageZoom" src="${imageCharacters[codifiedName]}">
                        </div>
                        <div class="content">
                            <a href="https://es.wikipedia.org/wiki/${character.name}" target="_blank" class="header" id="name">${character.name}</a>
                            <div class="meta">
                                Cumpleaños:
                                <span class="date" id="location_">${character.birth_year}</span>
                            </div>
                            <div class="meta">
                            <i class="icon ${iconGender}"></i>
                            <span class="date" id="location_">${character.gender}</span>
                        </div>
                            <div class="description" id="bio_">
                                Color de ojos: <i class="hair_color eye icon" style="color:${character.eye_color}"></i>
                            </div>
                        </div>
                        <div class="extra content">
                            <a>
                            <i class="birthday cake icon"></i>
                            <span id="following_count"></span> ${character.birth_year}
                            </a>
                        </div>
                    </div>
                </div>`;
                $(".imageZoom").magnifierRentgen();

                document.getElementById('containerCharacters').insertAdjacentHTML('beforeend', card_character);
                document.getElementById('preloaderStarWars').classList.remove("active");

            });
            $('.imgCharacter').click(function () {
                let image = $(this).find('img').attr('src')
                showModalInfo(image)
            });
            $('.closemodale').click(function () {
                $('.modale').removeClass('opened');
            });

            function showModalInfo(image) {
                $('.imgModalCharacter').attr('src', image)
                $('.modale').addClass('opened');
            }


        }
    }

    if (lengthQuery > 0) {
        req.open('GET', "https://swapi.co/api/people/?search=" + query + "", true);
    } else {
        req.open('GET', "https://swapi.co/api/people/", true);
    }
    req.send();
}

function searchPeople(input) {
    query = input.value
    lengthQuery = query.length
    loadStarWars()
    document.querySelector('.txtLoader').innerHTML = "Buscando..."
    document.getElementById('containerCharacters').innerHTML = ""
    document.getElementById('preloaderStarWars').classList.add("active");


}
