$(function() {

    var intents = 0
    var intents_faileds = 0
    var count_letters_on_word = 0
    var tutorial = true
    var restart_intents = false
    var word_selected = null;
    var array_word_selected = [];
    var clean_array = [];

    //letters
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    //words
    var words = ['TBBC','THEBITBANGCOMPANY','BIGDATA','RUBYONRAILS','BOT','PLATZI', 'CREATIC', 'BOOTCAMP', 'JAVASCRIPT', 'NODEJS', 'ANGULAR', 'VUEJS', 'ELECTRON', 'EXPRESS', 'SOCKET', 'GIT', 'JQUERY', 'ARDUINO', 'CORDOVA'];
    //var words = ['ARMARIO','COMPUTADOR','MOTO','TELEVISOR','CARGADOR','COBIJAS','BICICLETERIA','CADENA','CAFE','ARROZ']
    
    //Este metodo recorre las letras del arreglo letters
    for(i=0; i < letters.length; i++)
    {
        var individual_word = $("<div class='dinamic_word active_word'></div>")
        individual_word.addClass('letter_word_'+letters[i])
        individual_word.html(letters[i])
        
        $('#wrap_words').append(individual_word)
    }
    random_word_init();
    intent_count()

    function show_word(){
        $('#interactive_word .dinamic_box').each(function(){         
            var data_letter = $(this).data('letter')
            $(this).html("<div class='text_letter_hide'>"+data_letter+"</div>")
        })
    }


    $('.btn_restart_game').click(function(){
        window.location.reload()
    });

    $('#btn_track').click(function(){
        
        clean_array = array_word_selected
        var letter_random = clean_array[Math.floor(Math.random() * clean_array.length)];
        var indice = clean_array.indexOf(letter_random)

        for (var i = clean_array.length - 1; i >= 0; i--) {
            if (clean_array[i] === letter_random) {
                clean_array.splice(i,1);
            }
          }

        var box_with_letter = '<div class="box_with_letter">'+letter_random+'</div>'

        $('#interactive_word .dinamic_box').each(function(){
                         
            if($(this).hasClass('letter_box_'+letter_random)){
                
                $('.letter_box_'+letter_random).append(box_with_letter);
                $('.letter_box_'+letter_random).removeClass('active_box');
                $('.letter_word_'+letter_random).addClass('disabled_word')
                verify_user_win()

            } 
        })

    });


    function verify_user_win(){

        success_intents = $('.active_box').size()

        if (success_intents == 0){
            $('.msg_game_win').fadeIn();
        }
    }

    function intent_count(){
        $('.rest_intents').html(intents)
    }

    //Este metodo actualiza datos del juego
    function update_game(){
        if(!restart_intents){
            if (intents_faileds < 8){
                intents--
            }
            intents_faileds++
            $('#part'+intents_faileds).fadeIn()
            $('.base_vertical, .base_horizontal').fadeIn()

            if (intents_faileds == 8){
                $('#part1').css('border-color','#ccc')
                for(var i = 0; i<intents_faileds; i++){
                    $('#part'+i).css('background','#ccc')
                }
                
            }
        }
        restart_intents = false

        $('.rest_intents').html(intents)

        if (intents == 0){
            setTimeout(function(){ $('.msg_game_over').fadeIn() }, 1600);
            show_word()
        }
    }

    //Este metodo trae al azar una palabra del arreglo words
    function random_word_init(){
        word_selected = words[Math.floor(Math.random() * words.length)];
        var cant_letters_word = word_selected.length;
        var separator = "";
        intents = 8
        

        array_word_selected = word_selected.split(separator)

        count_letters_on_word = cant_letters_word


        for(box=0; box < cant_letters_word; box++)
        {
            var individual_box = $('<div class="dinamic_box active_box letter_box_'+array_word_selected[box]+' "></div>')
            individual_box.attr('data-letter',array_word_selected[box])
            $('#interactive_word').append(individual_box)
        }

    }

    $('.active_word').click(function(){
        
        var letter_text = $(this).html();
        var letter = $(this);

        var box_with_letter = '<div class="box_with_letter">'+letter_text+'</div>'


        letter.addClass('disabled_word').removeClass('active_word')
        $('#interactive_word .dinamic_box').each(function(){
                        
            if($(this).hasClass('letter_box_'+letter_text)){

                $('.letter_box_'+letter_text).append(box_with_letter);
                $('.letter_box_'+letter_text).removeClass('active_box');
                restart_intents =  true;
                verify_user_win()
                
            }
        })
        update_game();
        
    });
});