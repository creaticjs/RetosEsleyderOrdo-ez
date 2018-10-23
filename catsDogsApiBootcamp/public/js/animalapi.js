let petIndex = ['cat', 'dog']
let pet = petIndex[Math.floor(Math.random() * petIndex.length)];
var randmonPet = [{
  cat: {
    title: 'gato',
    preloader: 'http://ai-hmi.com/wp-content/plugins/preloader-sws/assets/img/bg-true/running-cat.gif',
    loading: 'public/assets/catloader.gif',
    urlAll: 'https://api.thecatapi.com/v1/images/search?limit=4',
    urlFirst: 'https://api.thecatapi.com/v1/images/search?',
    key: 'e2b85e5b-d7af-4590-8d0c-0cda7dfb9737'
  },
  dog: {
    title: 'perro',
    preloader: 'https://i.gifer.com/GjoH.gif',
    loading: 'public/assets/dogloader.gif',
    urlFirst: 'https://api.thedogapi.com/v1/images/search?',
    urlAll: 'https://api.thedogapi.com/v1/images/search?limit=4',
    key: '23315eeb-3433-43a2-94e5-b634a5c5434e'
  }
}]


$(function () {
  var nextImage = 0
  var listElm = document.querySelector('.wrapImagesPets');

  //subir foto
  $('.itemModalCreatePet').click(function(e){
    e.preventDefault();
    $('.mdCreatePet').modal('show')
  })

  $('#btnShowMorePets').click(function(){
    $(".wrapImagesPets").animate({ scrollTop: $('.wrapImagesPets')[0].scrollHeight}, 1500);
  });


  // Detect when scrolled to bottom.
  listElm.addEventListener('scroll', function () {
    $('.wrapImagesPets').addClass('boxshadow')      
    if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
      $('.loaderPets').addClass('active')
      loadAllPets()
      listElm.scrollTop = listElm.scrollHeight;
    }
  });
  $('#imgOfDay').attr('src', randmonPet[0][pet].preloader)
  loadAllPets()
  setInterval(loadNextPetOfDay,10000)

  $('#imgOfDay').mouseenter(function(){
      $(this).addClass('fadeInImageToDay')
      setTimeout(hideFadeIn,2000)
      
  });

  function hideFadeIn(){
    if ($('#imgOfDay').hasClass('fadeInImageToDay')){
      $('#imgOfDay').removeClass('fadeInImageToDay')
    }
  }
  
  //$('.itemPets').dropdown()

  function loadNextPetOfDay() {

    nextImage++
    let countImageOnGallery = $('.wrapImagesPets img').size()

    if (nextImage == countImageOnGallery){
      nextImage = 0  
    }
    let imageToShow = $('.wrapImagesPets img')[nextImage].src
    $('#imgOfDay').attr('src', imageToShow)
    
  }

  function loadAllPets() {
    $('#loadingImage').attr('src',randmonPet[0][pet].loading)
    $('.petRandom').html(randmonPet[0][pet].title)

    
    let settingsAll = {
      "async": true,
      "crossDomain": false,
      "url": randmonPet[0][pet].urlAll,
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "x-api-key": randmonPet[0][pet].key
      }
    }
    $.when($.ajax(settingsAll)).done(function (response) {
      $('#imgOfDay').attr('src', response[0].url)

      response = $.Enumerable.From(response)
      .OrderByDescending("$.id")
      .ToArray();
      console.log(response)

      var dominant = "red"
      $(response).each(function (index) {
        let that = this
        

        RGBaster.colors(this.url, {
          success: function (payload) {
            dominant = payload.dominant
            let images = `
            <img class="imgListAll zoom" id="imagePet${index}" src="${that.url}" style="background-color:${dominant};"/>
            `

            $('.wrapImagesPets').append(images)
            $('.wrapImagesPets').removeClass('boxshadow')   
            $('.loaderPets').removeClass('active')
            $('#btnShowMorePets').fadeIn()
            $('.imgListAll').click(function () {
              let img = $(this).attr('src')
              $('#imgOfDay').attr('src', img)

            })

          }

        })

      })
    })
  }
})