$(document).ready(function() {
    $('#loader').modal('show')
    $('.container').hide()
    $('.navbar').hide()
    $('.carrossel').hide()
    $('.rodape').hide()


    setTimeout(function() {
        $('#loader').modal('hide')
        $('.container').fadeToggle(2000)
        $('.navbar').fadeToggle(2000)
        $('.carrossel').fadeToggle(2000)
        $('.rodape').fadeToggle(2000)



    }, 3000)
})