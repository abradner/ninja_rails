// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  drawNinja();
});

function drawNinja() {
  var canvas = document.getElementById('canvas-ninja');
  var context = canvas.getContext('2d');

  // begin custom shape
  context.beginPath();
  context.moveTo(250, 75);
  context.lineTo(170, 80);

  context.lineTo(70, 100);
  context.lineTo(60, 150);
  context.lineTo(70, 200);

  context.lineTo(140, 220);
  context.lineTo(250, 230);
  context.lineTo(360, 220);

  context.lineTo(430, 200);
  context.lineTo(440, 150);
  context.lineTo(430, 100);

  context.lineTo(330, 80);

  // complete custom shape
  context.closePath();

  // add linear gradient
  var grd = context.createLinearGradient(70, 100, 430, 200);
  // light blue
  grd.addColorStop(0, '#222233');
  // dark blue
  grd.addColorStop(1, '#223');
  context.fillStyle = grd;
  context.fill();


  var eye = canvas.getContext('2d');

  // begin custom shape
  eye.beginPath();
  eye.moveTo(160, 100);
  eye.lineTo(120, 150);
  eye.lineTo(160, 200);
  eye.lineTo(200, 150);

  // complete custom shape
  eye.closePath();

  var grd = context.createLinearGradient(120, 100, 200, 200);
  // light blue
  grd.addColorStop(0, '#556');
  // dark blue
  grd.addColorStop(1, '#223');
  eye.fillStyle = grd;
  eye.fill();

  // begin custom shape
  eye.beginPath();
  eye.moveTo(340, 100);
  eye.lineTo(300, 150);
  eye.lineTo(340, 200);
  eye.lineTo(380, 150);

  // complete custom shape
  eye.closePath();

  var grd = context.createLinearGradient(300, 100, 380, 200);
  // light blue
  grd.addColorStop(0, '#556');
  // dark blue
  grd.addColorStop(1, '#223');
  eye.fillStyle = grd;
  eye.fill();



  var swordCanvas = document.getElementById('canvas-sword');
  var sword = swordCanvas.getContext('2d');

  // sword outer
  sword.beginPath();
  sword.moveTo(10, 0);
  sword.lineTo(0,20);
  sword.lineTo(60,400);
  sword.lineTo(100,400);


  // sword.moveTo(100, 0);
  // sword.lineTo(110,20);
  // sword.lineTo(40,400);
  // sword.lineTo(10,400);

  sword.fillStyle = '#445';
  sword.fill();

  sword.closePath();
  

  // sword inner
  sword.beginPath();
  sword.moveTo(12, 9);
  sword.lineTo(6,25);
  sword.lineTo(75,400);
  sword.lineTo(100,400);

  // sword.moveTo(99, 10);
  // sword.lineTo(103,20);
  // sword.lineTo(25,400);
  // sword.lineTo(10,400);

  sword.fillStyle = '#556';
  sword.fill();

  sword.closePath();

};