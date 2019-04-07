$(document).ready(function () {
    $('#home_image').show()
    $('#about_card').hide()
    $('#pitches_grid').hide()

    $('#click_home').click(function () {
        $('#home_image').show()
        $('#about_card').hide()
        $('#pitches_grid').hide()
    })

    $('#click_about').click(function () {
        $('#about_card').show()
        $('#home_image').hide()
        $('#pitches_grid').hide()
    })

    $('#click_pitches').click(function () {
        $('#pitches_grid').show()
        $('#about_card').hide()
        $('#home_image').hide()
    })
})