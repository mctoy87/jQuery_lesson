const headerSign = $('.header__sign');


const elem = $('.navigation__city');

headerSign.addClass('header__sign_active');


const modalBtn = $('.present__btn');
const modalClose = $('.modal-order__close');
const modalOrder = $('.modal-order');
const modalOrderTitle = $('.modal-order__title');
const modalOrderInput = $('.modal-order__input');
const burgerBtn = $('.header__burger');
const burgerClose =  $('.navigation__close');
const navigation =  $('.navigation');
const modalWrapper =  $('.modal-order__wrapper');





modalBtn.on('click', function() {
  modalOrder.show(500);
});

modalClose.click(function() {
  modalOrder.hide(500);
});

$('.modal-order__form').submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success: function(data) {
      modalOrderTitle.text('Спасибо ваша заявка принята, номер заявки ' + data.id);
      $('.modal-order__form').slideUp(300);
    },
    error() {
      modalOrderTitle.text('Что-то пошло не так попробуйте позже');
    }
  });
});

modalOrderInput.focus(function() {
  modalOrderTitle
  .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`);
});


modalOrderInput.blur(function() {
  modalOrderTitle
  .text('Заполните форму');
});


burgerBtn.on('click', function() {
  navigation.animate({
    left: 0,
  }, 500, function() {
    burgerClose.animate({
      opacity: 1,
    }, 300, 'swing')
  })
});


$(document).on('click', function(event) {
  if(navigation.parents().is(event.target) || (event.target.closest('.navigation__close'))) {
    navigation.animate({
      left: -400,
    }, 500);
  }
});