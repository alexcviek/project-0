"use strict";var playerName=void 0,playerChosen=void 0,villianChosen=void 0,playerLife=20,villianLife=20,turn=!0,characters={one:{name:"Nick",image:"public/assets/images/player1.gif",attack:4,warCry:2,defend:4,accuracy:.4},two:{name:"Ellen",image:"public/assets/images/player2.gif",attack:5,warCry:2,defend:5,accuracy:.5},three:{name:"No3",image:"public/assets/images/player3.jpg",attack:6,warCry:1,defend:2,accuracy:.5}},villians={one:{name:"Henry",image:"public/assets/images/villian3.jpg",attack:5,accuracy:.5},two:{name:"Xenomorph",image:"public/assets/images/villian2.gif",attack:6,accuracy:.6},three:{name:"Henry",image:"public/assets/images/villian3.jpg",attack:4,accuracy:.56}};$(function(){function e(){$(".instructions").removeClass("hidden"),$(".welcome").addClass("hidden")}function a(){$(".instructions").addClass("hidden"),$(".welcome").removeClass("hidden")}function n(){$(".welcome").addClass("hidden"),$(".character").removeClass("hidden")}function t(){$(".character").addClass("hidden"),$(".chosen-character").removeClass("hidden")}function i(){$(".chosen-character").fadeOut("slow").addClass("hidden"),$(".game-window").fadeIn("slow").removeClass("hidden"),c()}function l(){playerName=$(this).val(),$("#name").text("Hello "+playerName+"!"),$(".player1-name").text(playerName)}function o(){$(this).addClass("active").siblings().removeClass("active");var e=$(this).attr("id");e&&$("#start").attr("disabled",!1),playerChosen=characters[e],villianChosen=villians[e],$(".chosen-character img, .player1").attr("src",playerChosen.image),$(".villian").attr("src",villianChosen.image),$(".villian-name").text(villianChosen.name)}function c(){setInterval(function(){$("#player1-score").html(playerLife),$("#villian-score").html(villianLife)},500)}function s(){!0===turn&&(Math.random()<playerChosen.accuracy?(villianLife-=playerChosen.attack,$("#battle-text").text("You have hit him!")):$("#battle-text").text("Whooops! A miss..."),turn=!1,console.log(turn),u(),setTimeout(function(){r()},2e3))}function r(){!1===turn&&(Math.random()<villianChosen.accuracy?(playerLife-=villianChosen.attack,$("#battle-text").text("Crap! He hit you!")):$("#battle-text").text("Lucky u! This time it is a miss and you are safe!"),u(),turn=!0,console.log(turn))}function u(){playerLife<=0&&(console.log("You looser!"),$("#winner").text("He killed you :(").css({color:"red","font-size":"30px"}),turn=!0),villianLife<=0&&(console.log("You won!"),$("#winner").text("You won!!! Ta-da!!").css({color:"red","font-size":"30px"}),turn=!0)}function h(){turn=!1,console.log(villianChosen.attack),villianChosen.attack-=playerChosen.defend,console.log(villianChosen.attack),setTimeout(function(){r(),villianChosen.attack+=playerChosen.defend,console.log(villianChosen.attack)},2e3)}function d(){turn=!1,console.log(playerChosen.attack),playerChosen.attack+=playerChosen.warCry,console.log(playerChosen.attack),setTimeout(function(){r()},2e3),setTimeout(function(){s(),playerChosen.attack-=playerChosen.warCry,console.log(playerChosen.attack)},3e3)}$("#instructions").on("click",e),$("#back").on("click",a),$("#play").on("click",n),$("#start").on("click",t),$(".name").on("keyup",l),$(".person").on("click",o),$("#kick-off").on("click",i),$("#attack").on("click",s),$("#warcry").on("click",d),$("#defend").on("click",h)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJwbGF5ZXJOYW1lIiwicGxheWVyQ2hvc2VuIiwidmlsbGlhbkNob3NlbiIsInBsYXllckxpZmUiLCJ2aWxsaWFuTGlmZSIsIm9uZSIsImNoYXJhY3RlcnMiLCJuYW1lIiwiaW1hZ2UiLCJhdHRhY2siLCJ3YXJDcnkiLCJhY2N1cmFjeSIsInR3byIsInRocmVlIiwidmlsbGlhbnMiLCIkIiwiaGlkZVdpbmRvdzEiLCJyZW1vdmVDbGFzcyIsImhpZGVXaW5kb3cyIiwiYWRkQ2xhc3MiLCJnb1RvUGxheVNjcmVlbiIsInRvVGhlR2FtZSIsInN0YXJ0VGhlR2FtZSIsImZhZGVPdXQiLCJkaXNwbGF5SGVhbHRoIiwidGhpcyIsInZhbCIsImdldFRoZU5hbWUiLCJ0ZXh0Iiwic2VsZWN0Q2hhcmFjdGVyIiwic2libGluZ3MiLCJpZCIsImF0dHIiLCJzZXRJbnRlcnZhbCIsImh0bWwiLCJhdHRhY2tWaWxsaWFuIiwidHVybiIsIk1hdGgiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tGb3JXaW5uZXIiLCJzZXRUaW1lb3V0IiwiYXR0YWNrUGxheWVyIiwiY3NzIiwiY29sb3IiLCJmb250LXNpemUiLCJkZWZlbmQiLCJvbiJdLCJtYXBwaW5ncyI6IllBQUEsSUFBSUEsZ0JBQUFBLEdBQ0FDLGlCQUFBQSxHQURBRCxrQkFBQUEsR0FDQUMsV0FBQUEsR0FDQUMsWUFBQUEsR0FDQUMsTUFBQUEsRUFDQUMsWUFDSkMsS0FDTUMsS0FBQUEsT0FDSkQsTUFBSyxtQ0FDSEUsT0FBTSxFQUNOQyxPQUFPLEVBQ1BDLE9BQVEsRUFDUkMsU0FKRyxJQU1IQyxLQVBlSixLQUFBLFFBU2pCSyxNQUFLLG1DQUNITCxPQUFNLEVBQ05DLE9BQU8sRUFDUEMsT0FBUSxFQUNSQyxTQUpHLElBTUhDLE9BZmVKLEtBQUEsTUFpQmpCTSxNQUFPLG1DQUNMTixPQUFNLEVBQ05DLE9BQU8sRUFDUEMsT0FBUSxFQUNSQyxTQUpLLEtBQUFJLFVBakJUVCxLQTBCTVMsS0FB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QUFBLFdBREZQLElBR0FNLGFBQVdoQyxRQUFNUixhQUFBUyxPQUNmeUIsUUFBQUEsSUFBQUEsYUFBQUEsU0FDQWxDLEtBRURjLEVBQUEsaUJBSkRnQyxHQUFBLFFBQUEvQixHQUtERCxFQUFBLFNBQUFnQyxHQUFBLFFBQUE3QixHQUNESCxFQUFFLFNBQUFnQyxHQUFBLFFBQW9CM0IsR0FDdEJMLEVBQUUsVUFBU2dDLEdBQUcsUUFBUzdCLEdBQ3ZCSCxFQUFFLFNBQVNnQyxHQUFHLFFBQVMzQixHQUN2QkwsRUFBRSxXQUFVZ0MsR0FBRyxRQUFTMUIsR0FDeEJOLEVBQUUsYUFBWWdDLEdBQUEsUUFBU3BCLEdBQ3ZCWixFQUFFLFdBQVdnQyxHQUFHLFFBQVNsQixHQUN6QmQsRUFBRSxXQUFGZ0MsR0FBZUEsUUFBZnJDLEdBQ0FLLEVBQUUsV0FBV2dDLEdBQUcsUUFBU1oiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHBsYXllck5hbWU7XG5sZXQgcGxheWVyQ2hvc2VuO1xubGV0IHZpbGxpYW5DaG9zZW47XG5sZXQgcGxheWVyTGlmZSA9IDIwO1xubGV0IHZpbGxpYW5MaWZlID0gMjA7XG5sZXQgdHVybiA9IHRydWU7XG5jb25zdCBjaGFyYWN0ZXJzID0ge1xuICBvbmU6IHtcbiAgICBuYW1lOiAnTmljaycsXG4gICAgaW1hZ2U6ICdwdWJsaWMvYXNzZXRzL2ltYWdlcy9wbGF5ZXIxLmdpZicsXG4gICAgYXR0YWNrOiA0LFxuICAgIHdhckNyeTogMixcbiAgICBkZWZlbmQ6IDQsXG4gICAgYWNjdXJhY3k6IDAuNFxuICB9LFxuICB0d286IHtcbiAgICBuYW1lOiAnRWxsZW4nLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvcGxheWVyMi5naWYnLFxuICAgIGF0dGFjazogNSxcbiAgICB3YXJDcnk6IDIsXG4gICAgZGVmZW5kOiA1LFxuICAgIGFjY3VyYWN5OiAwLjVcbiAgfSxcbiAgdGhyZWU6IHtcbiAgICBuYW1lOiAnTm8zJyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BsYXllcjMuanBnJyxcbiAgICBhdHRhY2s6IDYsXG4gICAgd2FyQ3J5OiAxLFxuICAgIGRlZmVuZDogMixcbiAgICBhY2N1cmFjeTogMC41XG4gIH1cbn07XG5jb25zdCB2aWxsaWFucyA9IHtcbiAgb25lOiB7XG4gICAgbmFtZTogJ0hlbnJ5JyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL3ZpbGxpYW4zLmpwZycsXG4gICAgYXR0YWNrOiA1LFxuICAgIGFjY3VyYWN5OiAwLjVcbiAgfSxcbiAgdHdvOiB7XG4gICAgbmFtZTogJ1hlbm9tb3JwaCcsXG4gICAgaW1hZ2U6ICdwdWJsaWMvYXNzZXRzL2ltYWdlcy92aWxsaWFuMi5naWYnLFxuICAgIGF0dGFjazogNixcbiAgICBhY2N1cmFjeTogMC42XG4gIH0sXG4gIHRocmVlOiB7XG4gICAgbmFtZTogJ0hlbnJ5JyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL3ZpbGxpYW4zLmpwZycsXG4gICAgYXR0YWNrOiA0LFxuICAgIGFjY3VyYWN5OiAwLjU2XG4gIH1cbn07XG4kKCgpID0+IHtcbiAgZnVuY3Rpb24gaGlkZVdpbmRvdzEoKXtcbiAgICAkKCcuaW5zdHJ1Y3Rpb25zJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy53ZWxjb21lJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICB9XG4gIGZ1bmN0aW9uIGhpZGVXaW5kb3cyKCl7XG4gICAgJCgnLmluc3RydWN0aW9ucycpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcud2VsY29tZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxuICBmdW5jdGlvbiBnb1RvUGxheVNjcmVlbigpe1xuICAgICQoJy53ZWxjb21lJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5jaGFyYWN0ZXInKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gIH1cbiAgZnVuY3Rpb24gdG9UaGVHYW1lKCl7XG4gICAgJCgnLmNoYXJhY3RlcicpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuY2hvc2VuLWNoYXJhY3RlcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFRoZUdhbWUoKXtcbiAgICAkKCcuY2hvc2VuLWNoYXJhY3RlcicpLmZhZGVPdXQoJ3Nsb3cnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmdhbWUtd2luZG93JykuZmFkZUluKCdzbG93JykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIGRpc3BsYXlIZWFsdGgoKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRUaGVOYW1lKCl7XG4gICAgcGxheWVyTmFtZSA9ICQodGhpcykudmFsKCk7XG4gICAgJCgnI25hbWUnKS50ZXh0KGBIZWxsbyAke3BsYXllck5hbWV9IWApO1xuICAgICQoJy5wbGF5ZXIxLW5hbWUnKS50ZXh0KHBsYXllck5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0Q2hhcmFjdGVyKCl7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgY29uc3QgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgaWYoaWQpe1xuICAgICAgJCgnI3N0YXJ0JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfVxuICAgIHBsYXllckNob3NlbiA9IGNoYXJhY3RlcnNbaWRdO1xuICAgIHZpbGxpYW5DaG9zZW4gPSB2aWxsaWFuc1tpZF07XG4gICAgJCgnLmNob3Nlbi1jaGFyYWN0ZXIgaW1nLCAucGxheWVyMScpLmF0dHIoJ3NyYycsIHBsYXllckNob3Nlbi5pbWFnZSk7XG4gICAgJCgnLnZpbGxpYW4nKS5hdHRyKCdzcmMnLCB2aWxsaWFuQ2hvc2VuLmltYWdlKTtcbiAgICAkKCcudmlsbGlhbi1uYW1lJykudGV4dCh2aWxsaWFuQ2hvc2VuLm5hbWUpO1xuICB9XG4gIGZ1bmN0aW9uIGRpc3BsYXlIZWFsdGgoKXtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAkKCcjcGxheWVyMS1zY29yZScpLmh0bWwocGxheWVyTGlmZSk7XG4gICAgICAkKCcjdmlsbGlhbi1zY29yZScpLmh0bWwodmlsbGlhbkxpZmUpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2tWaWxsaWFuKCl7XG4gICAgaWYodHVybiA9PT0gdHJ1ZSl7XG4gICAgICBpZihNYXRoLnJhbmRvbSgpIDwgcGxheWVyQ2hvc2VuLmFjY3VyYWN5KXtcbiAgICAgICAgdmlsbGlhbkxpZmUgLT0gcGxheWVyQ2hvc2VuLmF0dGFjaztcbiAgICAgICAgJCgnI2JhdHRsZS10ZXh0JykudGV4dCgnWW91IGhhdmUgaGl0IGhpbSEnKTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgJCgnI2JhdHRsZS10ZXh0JykudGV4dCgnV2hvb29wcyEgQSBtaXNzLi4uJyk7XG4gICAgICB9XG4gICAgICB0dXJuID0gZmFsc2U7XG4gICAgICBjb25zb2xlLmxvZyh0dXJuKTtcbiAgICAgIGNoZWNrRm9yV2lubmVyKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXR0YWNrUGxheWVyKCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYXR0YWNrUGxheWVyKCl7XG4gICAgaWYodHVybiA9PT0gZmFsc2Upe1xuICAgICAgaWYoTWF0aC5yYW5kb20oKSA8IHZpbGxpYW5DaG9zZW4uYWNjdXJhY3kpe1xuICAgICAgICBwbGF5ZXJMaWZlIC09IHZpbGxpYW5DaG9zZW4uYXR0YWNrO1xuICAgICAgICAkKCcjYmF0dGxlLXRleHQnKS50ZXh0KCdDcmFwISBIZSBoaXQgeW91IScpO1xuICAgICAgfSBlbHNle1xuICAgICAgICAkKCcjYmF0dGxlLXRleHQnKS50ZXh0KCdMdWNreSB1ISBUaGlzIHRpbWUgaXQgaXMgYSBtaXNzIGFuZCB5b3UgYXJlIHNhZmUhJyk7XG4gICAgICB9XG4gICAgICBjaGVja0Zvcldpbm5lcigpO1xuICAgICAgdHVybiA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyh0dXJuKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tGb3JXaW5uZXIoKXtcbiAgICBpZiAocGxheWVyTGlmZSA8PSAwKXtcbiAgICAgIGNvbnNvbGUubG9nKCdZb3UgbG9vc2VyIScpO1xuICAgICAgJCgnI3dpbm5lcicpLnRleHQoJ0hlIGtpbGxlZCB5b3UgOignKS5jc3Moeydjb2xvcic6ICdyZWQnLCAnZm9udC1zaXplJzogJzMwcHgnfSk7XG4gICAgICB0dXJuID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYodmlsbGlhbkxpZmUgPD0gMCl7XG4gICAgICBjb25zb2xlLmxvZygnWW91IHdvbiEnKTtcbiAgICAgICQoJyN3aW5uZXInKS50ZXh0KCdZb3Ugd29uISEhIFRhLWRhISEnKS5jc3Moeydjb2xvcic6ICdyZWQnLCAnZm9udC1zaXplJzogJzMwcHgnfSk7XG4gICAgICB0dXJuID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVmZW5kKCl7XG4gICAgdHVybiA9IGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKHZpbGxpYW5DaG9zZW4uYXR0YWNrKTtcbiAgICB2aWxsaWFuQ2hvc2VuLmF0dGFjayAtPSBwbGF5ZXJDaG9zZW4uZGVmZW5kO1xuICAgIGNvbnNvbGUubG9nKHZpbGxpYW5DaG9zZW4uYXR0YWNrKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF0dGFja1BsYXllcigpO1xuICAgICAgdmlsbGlhbkNob3Nlbi5hdHRhY2sgKz0gcGxheWVyQ2hvc2VuLmRlZmVuZDtcbiAgICAgIGNvbnNvbGUubG9nKHZpbGxpYW5DaG9zZW4uYXR0YWNrKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuICBmdW5jdGlvbiB3YXJDcnkoKXtcbiAgICB0dXJuID0gZmFsc2U7XG4gICAgY29uc29sZS5sb2cocGxheWVyQ2hvc2VuLmF0dGFjayk7XG4gICAgcGxheWVyQ2hvc2VuLmF0dGFjayArPSBwbGF5ZXJDaG9zZW4ud2FyQ3J5O1xuICAgIGNvbnNvbGUubG9nKHBsYXllckNob3Nlbi5hdHRhY2spO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXR0YWNrUGxheWVyKCk7XG4gICAgfSwgMjAwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhdHRhY2tWaWxsaWFuKCk7XG4gICAgICBwbGF5ZXJDaG9zZW4uYXR0YWNrIC09IHBsYXllckNob3Nlbi53YXJDcnk7XG4gICAgICBjb25zb2xlLmxvZyhwbGF5ZXJDaG9zZW4uYXR0YWNrKTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuICAkKCcjaW5zdHJ1Y3Rpb25zJykub24oJ2NsaWNrJywgaGlkZVdpbmRvdzEpO1xuICAkKCcjYmFjaycpLm9uKCdjbGljaycsIGhpZGVXaW5kb3cyKTtcbiAgJCgnI3BsYXknKS5vbignY2xpY2snLCBnb1RvUGxheVNjcmVlbik7XG4gICQoJyNzdGFydCcpLm9uKCdjbGljaycsIHRvVGhlR2FtZSk7XG4gICQoJy5uYW1lJykub24oJ2tleXVwJywgZ2V0VGhlTmFtZSk7XG4gICQoJy5wZXJzb24nKS5vbignY2xpY2snLCBzZWxlY3RDaGFyYWN0ZXIpO1xuICAkKCcja2ljay1vZmYnKS5vbignY2xpY2snLCBzdGFydFRoZUdhbWUpO1xuICAkKCcjYXR0YWNrJykub24oJ2NsaWNrJywgYXR0YWNrVmlsbGlhbik7XG4gICQoJyN3YXJjcnknKS5vbignY2xpY2snLCB3YXJDcnkpO1xuICAkKCcjZGVmZW5kJykub24oJ2NsaWNrJywgZGVmZW5kKTtcbn0pO1xuIl19
