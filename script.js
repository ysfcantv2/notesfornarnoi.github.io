var countDownDate = new Date("June 18, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("count").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
}, 1000);

console.log("Burayı açmayı düşündüysen daha site açılmadan ufak bir not bırakmış olayım.Gerçekten hayatımdaki özel insanlardan birisin ve bunun kolay kolay değişeceğini hiç sanmıyorum.Her koşulda ve her zaman etrafımda bulunmanı her şeyden çok isteyeceğim birisin.Lütfen kendini hiçbir şey için üzmemeye çalış olur da üzülürsen de hayatında ne olursa olsun saat zaman farketmez saniyesinde yanında olacağımı bil ve kendine lütfen çok dikkat et");