console.log('hello!')

var controller= new ScrollMagic.Controller();

var animacionB = new ScrollMagic.Scene({triggerElement: '#tb'}).setTween('#b',2.0, {opacity:1}).addTo(controller)