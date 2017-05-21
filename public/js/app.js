"use strict";var playerName=void 0,playerChosen=void 0,villianChosen=void 0,playerLife=20,villianLife=20,turn=!0,roundResultText=void 0,round=1,characters={one:{name:"Nick",image:"public/assets/images/player1.gif",attack:4,warCry:2,defend:4,accuracy:.4},two:{name:"Ellen",image:"public/assets/images/player2.gif",attack:7,warCry:2,defend:5,accuracy:.5},three:{name:"No3",image:"public/assets/images/player3.jpg",attack:6,warCry:1,defend:2,accuracy:.5}},villians={one:{name:"Henry",image:"public/assets/images/villian3.jpg",attack:5,accuracy:.5},two:{name:"Xenomorph",image:"public/assets/images/villian2.gif",attack:1,accuracy:.6},three:{name:"Henry",image:"public/assets/images/villian3.jpg",attack:4,accuracy:.56}};$(function(){function e(){$(".instructions").removeClass("hidden"),$(".welcome").addClass("hidden")}function a(){$(".instructions").addClass("hidden"),$(".welcome").removeClass("hidden")}function n(){$(".welcome").addClass("hidden"),$(".character").removeClass("hidden")}function t(){$(".character").addClass("hidden"),$(".chosen-character").removeClass("hidden")}function i(){$(".chosen-character").fadeOut("slow").addClass("hidden"),$(".game-window").fadeIn("slow").removeClass("hidden"),s()}function o(){playerName=$(this).val(),0===playerName.length&&(playerName=playerChosen.name),$("#name").text("Hello "+playerName+"!"),$(".player1-name").text(playerName)}function l(){$(this).addClass("active").siblings().removeClass("active");var e=$(this).attr("id");e&&$("#start").attr("disabled",!1),playerChosen=characters[e],villianChosen=villians[e],$(".chosen-character img, .player1").attr("src",playerChosen.image),$(".villian").attr("src",villianChosen.image),$(".villian-name").text(villianChosen.name)}function s(){setInterval(function(){$("#player1-score").html(playerLife),$("#villian-score").html(villianLife),$("h1").text("Round "+round)},500)}function c(){!0===turn&&(Math.random()<playerChosen.accuracy?(villianLife-=playerChosen.attack,roundResultText="You have hit him!"):roundResultText="Whooops! A miss...",$("#battle-text").text(""+roundResultText),turn=!1,console.log(turn),u(),setTimeout(function(){r()},2e3))}function r(){d(),!1===turn&&(Math.random()<villianChosen.accuracy?(playerLife-=villianChosen.attack,roundResultText="Crap! He hit you!"):roundResultText="Lucky u! This time it is a miss and you are safe!",$("#battle-text").text(""+roundResultText),u(),turn=!0,console.log(turn),d())}function u(){playerLife<=0&&($("#winner").text("GAME OVER. He killed you :(").css({color:"red","font-size":"30px"}),$("#attack, #warcry, #defend").attr("disabled",!0),turn=!0),villianLife<=0&&($("#winner").text("You won this round!!! Ta-da!!").css({color:"red","font-size":"30px"}),turn=!0,setTimeout(function(){h()},2e3))}function d(){!1===turn?console.log("not your turn"):console.log("your turn babe")}function h(){console.log("Round 2!"),round+=1,villianLife=25*round,playerLife=20*round,$("#winner").text("")}function m(){turn=!1,console.log(villianChosen.attack),villianChosen.attack-=playerChosen.defend,console.log(villianChosen.attack),setTimeout(function(){r(),villianChosen.attack+=playerChosen.defend,console.log(villianChosen.attack)},2e3)}function y(){turn=!1,console.log(playerChosen.attack),playerChosen.attack+=playerChosen.warCry,console.log(playerChosen.attack),setTimeout(function(){r()},2e3),setTimeout(function(){c(),playerChosen.attack-=playerChosen.warCry,console.log(playerChosen.attack)},3e3)}$("#instructions").on("click",e),$("#back").on("click",a),$("#play").on("click",n),$("#start").on("click",t),$(".name").on("keyup",o),$(".person").on("click",l),$("#kick-off").on("click",i),$("#attack").on("click",c),$("#warcry").on("click",y),$("#defend").on("click",m)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJwbGF5ZXJOYW1lIiwicGxheWVyQ2hvc2VuIiwidmlsbGlhbkNob3NlbiIsInBsYXllckxpZmUiLCJ2aWxsaWFuTGlmZSIsInR1cm4iLCJyb3VuZCIsIm9uZSIsImNoYXJhY3RlcnMiLCJuYW1lIiwiaW1hZ2UiLCJhdHRhY2siLCJ3YXJDcnkiLCJhY2N1cmFjeSIsInR3byIsInRocmVlIiwidmlsbGlhbnMiLCIkIiwiaGlkZVdpbmRvdzEiLCJyZW1vdmVDbGFzcyIsImhpZGVXaW5kb3cyIiwiYWRkQ2xhc3MiLCJnb1RvUGxheVNjcmVlbiIsInRvVGhlR2FtZSIsInN0YXJ0VGhlR2FtZSIsImZhZGVPdXQiLCJkaXNwbGF5SGVhbHRoIiwidGhpcyIsInZhbCIsImdldFRoZU5hbWUiLCJ0ZXh0Iiwic2VsZWN0Q2hhcmFjdGVyIiwic2libGluZ3MiLCJpZCIsImF0dHIiLCJzZXRJbnRlcnZhbCIsImh0bWwiLCJhdHRhY2tWaWxsaWFuIiwiTWF0aCIsInJvdW5kUmVzdWx0VGV4dCIsImxvZyIsImNvbnNvbGUiLCJjaGVja0Zvcldpbm5lciIsInNldFRpbWVvdXQiLCJhdHRhY2tQbGF5ZXIiLCJ3aG9zZVR1cm4iLCJjc3MiLCJjb2xvciIsImZvbnQtc2l6ZSIsIm5leHRSb3VuZCIsImRlZmVuZCIsIm9uIl0sIm1hcHBpbmdzIjoiWUFBQSxJQUFJQSxnQkFBQUEsR0FDQUMsaUJBQUFBLEdBREFELGtCQUFBQSxHQUNBQyxXQUFBQSxHQUNBQyxZQUFBQSxHQUNBQyxNQUFBQSxFQUNBQyxvQkFBQUEsR0FDQUMsTUFBTyxFQUVQQyxZQUdGQyxLQURJQyxLQUFBQSxPQUNKRCxNQUFLLG1DQUNIRSxPQUFNLEVBQ05DLE9BQU8sRUFDUEMsT0FBUSxFQUNSQyxTQUpHLElBTUhDLEtBUGVKLEtBQUEsUUFTakJLLE1BQUssbUNBQ0hMLE9BQU0sRUFDTkMsT0FBTyxFQUNQQyxPQUFRLEVBQ1JDLFNBSkcsSUFNSEMsT0FmZUosS0FBQSxNQWlCakJN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Q1BSLFlBQVksR0FBQW5DLE1BQ1pBLFdBQUEsR0FBQUEsTUFDQUYsRUFBQUEsV0FBQUEsS0FBYyxJQUVkYSxRQUFFaUMsS0FDSDdDLE1BQUEsRUFDRG9DLFFBQVNTLElBQUFBLGNBQVF2QyxRQUNmTixjQUFBTSxRQUFBVixhQUFBaUQsT0FDQVQsUUFBUUQsSUFBSXRDLGNBQWNTLFFBQzFCVCxXQUFBQSxXQUNBdUMsSUFDQUUsY0FBV2hDLFFBQU1WLGFBQUFpRCxPQUNmTixRQUFBQSxJQUFBQSxjQUFBQSxTQUNBMUMsS0FFRCxRQUpEVSxLQUtEUCxNQUFBLEVBQ0RvQyxRQUFTN0IsSUFBQUEsYUFBUUQsUUFDZk4sYUFBQU0sUUFBQVYsYUFBQVcsT0FDQTZCLFFBQVFELElBQUl2QyxhQUFhVSxRQUN6QlYsV0FBQUEsV0FDQXdDLEtBQ0FFLEtBQ0VDLFdBQUFBLFdBREZQLElBR0FNLGFBQVdoQyxRQUFNVixhQUFBVyxPQUNmeUIsUUFBQUEsSUFBQUEsYUFBQUEsU0FDQXBDLEtBRURnQixFQUFBLGlCQUpEa0MsR0FBQSxRQUFBakMsR0FLREQsRUFBQSxTQUFBa0MsR0FBQSxRQUFBL0IsR0FDREgsRUFBRSxTQUFBa0MsR0FBQSxRQUFvQjdCLEdBQ3RCTCxFQUFFLFVBQVNrQyxHQUFHLFFBQVMvQixHQUN2QkgsRUFBRSxTQUFTa0MsR0FBRyxRQUFTN0IsR0FDdkJMLEVBQUUsV0FBVWtDLEdBQUcsUUFBUzVCLEdBQ3hCTixFQUFFLGFBQVlrQyxHQUFBLFFBQVN0QixHQUN2QlosRUFBRSxXQUFXa0MsR0FBRyxRQUFTcEIsR0FDekJkLEVBQUUsV0FBRmtDLEdBQWVBLFFBQWZ2QyxHQUNBSyxFQUFFLFdBQVdrQyxHQUFHLFFBQVNkIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBwbGF5ZXJOYW1lO1xubGV0IHBsYXllckNob3NlbjtcbmxldCB2aWxsaWFuQ2hvc2VuO1xubGV0IHBsYXllckxpZmUgPSAyMDtcbmxldCB2aWxsaWFuTGlmZSA9IDIwO1xubGV0IHR1cm4gPSB0cnVlO1xubGV0IHJvdW5kUmVzdWx0VGV4dDtcbmxldCByb3VuZCA9IDE7XG5cbmNvbnN0IGNoYXJhY3RlcnMgPSB7XG4gIG9uZToge1xuICAgIG5hbWU6ICdOaWNrJyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BsYXllcjEuZ2lmJyxcbiAgICBhdHRhY2s6IDQsXG4gICAgd2FyQ3J5OiAyLFxuICAgIGRlZmVuZDogNCxcbiAgICBhY2N1cmFjeTogMC40XG4gIH0sXG4gIHR3bzoge1xuICAgIG5hbWU6ICdFbGxlbicsXG4gICAgaW1hZ2U6ICdwdWJsaWMvYXNzZXRzL2ltYWdlcy9wbGF5ZXIyLmdpZicsXG4gICAgYXR0YWNrOiA3LFxuICAgIHdhckNyeTogMixcbiAgICBkZWZlbmQ6IDUsXG4gICAgYWNjdXJhY3k6IDAuNVxuICB9LFxuICB0aHJlZToge1xuICAgIG5hbWU6ICdObzMnLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvcGxheWVyMy5qcGcnLFxuICAgIGF0dGFjazogNixcbiAgICB3YXJDcnk6IDEsXG4gICAgZGVmZW5kOiAyLFxuICAgIGFjY3VyYWN5OiAwLjVcbiAgfVxufTtcbmNvbnN0IHZpbGxpYW5zID0ge1xuICBvbmU6IHtcbiAgICBuYW1lOiAnSGVucnknLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvdmlsbGlhbjMuanBnJyxcbiAgICBhdHRhY2s6IDUsXG4gICAgYWNjdXJhY3k6IDAuNVxuICB9LFxuICB0d286IHtcbiAgICBuYW1lOiAnWGVub21vcnBoJyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL3ZpbGxpYW4yLmdpZicsXG4gICAgYXR0YWNrOiAxLFxuICAgIGFjY3VyYWN5OiAwLjZcbiAgfSxcbiAgdGhyZWU6IHtcbiAgICBuYW1lOiAnSGVucnknLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvdmlsbGlhbjMuanBnJyxcbiAgICBhdHRhY2s6IDQsXG4gICAgYWNjdXJhY3k6IDAuNTZcbiAgfVxufTtcbiQoKCkgPT4ge1xuICBmdW5jdGlvbiBoaWRlV2luZG93MSgpe1xuICAgICQoJy5pbnN0cnVjdGlvbnMnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLndlbGNvbWUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gIH1cbiAgZnVuY3Rpb24gaGlkZVdpbmRvdzIoKXtcbiAgICAkKCcuaW5zdHJ1Y3Rpb25zJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy53ZWxjb21lJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9XG4gIGZ1bmN0aW9uIGdvVG9QbGF5U2NyZWVuKCl7XG4gICAgJCgnLndlbGNvbWUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmNoYXJhY3RlcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxuICBmdW5jdGlvbiB0b1RoZUdhbWUoKXtcbiAgICAkKCcuY2hhcmFjdGVyJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5jaG9zZW4tY2hhcmFjdGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0VGhlR2FtZSgpe1xuICAgICQoJy5jaG9zZW4tY2hhcmFjdGVyJykuZmFkZU91dCgnc2xvdycpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuZ2FtZS13aW5kb3cnKS5mYWRlSW4oJ3Nsb3cnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgZGlzcGxheUhlYWx0aCgpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFRoZU5hbWUoKXtcbiAgICBwbGF5ZXJOYW1lID0gJCh0aGlzKS52YWwoKTtcbiAgICBpZiAocGxheWVyTmFtZS5sZW5ndGggPT09IDApe1xuICAgICAgcGxheWVyTmFtZSA9IHBsYXllckNob3Nlbi5uYW1lO1xuICAgIH1cbiAgICAkKCcjbmFtZScpLnRleHQoYEhlbGxvICR7cGxheWVyTmFtZX0hYCk7XG4gICAgJCgnLnBsYXllcjEtbmFtZScpLnRleHQocGxheWVyTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RDaGFyYWN0ZXIoKXtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBjb25zdCBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICBpZihpZCl7XG4gICAgICAkKCcjc3RhcnQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB9XG4gICAgcGxheWVyQ2hvc2VuID0gY2hhcmFjdGVyc1tpZF07XG4gICAgdmlsbGlhbkNob3NlbiA9IHZpbGxpYW5zW2lkXTtcbiAgICAkKCcuY2hvc2VuLWNoYXJhY3RlciBpbWcsIC5wbGF5ZXIxJykuYXR0cignc3JjJywgcGxheWVyQ2hvc2VuLmltYWdlKTtcbiAgICAkKCcudmlsbGlhbicpLmF0dHIoJ3NyYycsIHZpbGxpYW5DaG9zZW4uaW1hZ2UpO1xuICAgICQoJy52aWxsaWFuLW5hbWUnKS50ZXh0KHZpbGxpYW5DaG9zZW4ubmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheUhlYWx0aCgpe1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICQoJyNwbGF5ZXIxLXNjb3JlJykuaHRtbChwbGF5ZXJMaWZlKTtcbiAgICAgICQoJyN2aWxsaWFuLXNjb3JlJykuaHRtbCh2aWxsaWFuTGlmZSk7XG4gICAgICAkKCdoMScpLnRleHQoYFJvdW5kICR7cm91bmR9YCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFja1ZpbGxpYW4oKXtcbiAgICBpZih0dXJuID09PSB0cnVlKXtcbiAgICAgIGlmKE1hdGgucmFuZG9tKCkgPCBwbGF5ZXJDaG9zZW4uYWNjdXJhY3kpe1xuICAgICAgICB2aWxsaWFuTGlmZSAtPSBwbGF5ZXJDaG9zZW4uYXR0YWNrO1xuICAgICAgICByb3VuZFJlc3VsdFRleHQgPSAnWW91IGhhdmUgaGl0IGhpbSEnO1xuICAgICAgfSBlbHNle1xuICAgICAgICByb3VuZFJlc3VsdFRleHQgPSAnV2hvb29wcyEgQSBtaXNzLi4uJztcbiAgICAgIH1cbiAgICAgICQoJyNiYXR0bGUtdGV4dCcpLnRleHQoYCR7cm91bmRSZXN1bHRUZXh0fWApO1xuICAgICAgdHVybiA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2codHVybik7XG4gICAgICBjaGVja0Zvcldpbm5lcigpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF0dGFja1BsYXllcigpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGF0dGFja1BsYXllcigpe1xuICAgIHdob3NlVHVybigpO1xuICAgIGlmKHR1cm4gPT09IGZhbHNlKXtcbiAgICAgIGlmKE1hdGgucmFuZG9tKCkgPCB2aWxsaWFuQ2hvc2VuLmFjY3VyYWN5KXtcbiAgICAgICAgcGxheWVyTGlmZSAtPSB2aWxsaWFuQ2hvc2VuLmF0dGFjaztcbiAgICAgICAgcm91bmRSZXN1bHRUZXh0ID0gJ0NyYXAhIEhlIGhpdCB5b3UhJztcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgcm91bmRSZXN1bHRUZXh0ID0gJ0x1Y2t5IHUhIFRoaXMgdGltZSBpdCBpcyBhIG1pc3MgYW5kIHlvdSBhcmUgc2FmZSEnO1xuICAgICAgfVxuICAgICAgJCgnI2JhdHRsZS10ZXh0JykudGV4dChgJHtyb3VuZFJlc3VsdFRleHR9YCk7XG4gICAgICBjaGVja0Zvcldpbm5lcigpO1xuICAgICAgdHVybiA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyh0dXJuKTtcbiAgICAgIHdob3NlVHVybigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjaGVja0Zvcldpbm5lcigpe1xuICAgIGlmIChwbGF5ZXJMaWZlIDw9IDApe1xuICAgICAgJCgnI3dpbm5lcicpLnRleHQoJ0dBTUUgT1ZFUi4gSGUga2lsbGVkIHlvdSA6KCcpLmNzcyh7J2NvbG9yJzogJ3JlZCcsICdmb250LXNpemUnOiAnMzBweCd9KTtcbiAgICAgICQoJyNhdHRhY2ssICN3YXJjcnksICNkZWZlbmQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgdHVybiA9IHRydWU7XG4gICAgfVxuICAgIGlmKHZpbGxpYW5MaWZlIDw9IDApe1xuICAgICAgJCgnI3dpbm5lcicpLnRleHQoJ1lvdSB3b24gdGhpcyByb3VuZCEhISBUYS1kYSEhJykuY3NzKHsnY29sb3InOiAncmVkJywgJ2ZvbnQtc2l6ZSc6ICczMHB4J30pO1xuICAgICAgdHVybiA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbmV4dFJvdW5kKCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gd2hvc2VUdXJuKCl7XG4gICAgaWYgKHR1cm4gPT09IGZhbHNlKXtcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgeW91ciB0dXJuJyk7XG4gICAgICAvLyAkKCcucGxheWVyLWNvcm5lciBpbWcnKS5yZW1vdmVDbGFzcygnaW1nLWFjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygneW91ciB0dXJuIGJhYmUnKTtcbiAgICAgIC8vICQoJy5wbGF5ZXItY29ybmVyJykuYXBwZW5kKCc8cD5Zb3VyIHR1cm48L3A+Jyk7XG4gICAgICAvLyAkKCcucGxheWVyLWNvcm5lciBpbWcnKS5hZGRDbGFzcygnaW1nLWFjdGl2ZScpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBuZXh0Um91bmQoKXtcbiAgICBjb25zb2xlLmxvZygnUm91bmQgMiEnKTtcbiAgICByb3VuZCArPSAxO1xuICAgIHZpbGxpYW5MaWZlID0gMjUgKiByb3VuZDtcbiAgICBwbGF5ZXJMaWZlID0gMjAgICogcm91bmQ7XG4gICAgJCgnI3dpbm5lcicpLnRleHQoJycpO1xuICB9XG4gIGZ1bmN0aW9uIGRlZmVuZCgpe1xuICAgIHR1cm4gPSBmYWxzZTtcbiAgICBjb25zb2xlLmxvZyh2aWxsaWFuQ2hvc2VuLmF0dGFjayk7XG4gICAgdmlsbGlhbkNob3Nlbi5hdHRhY2sgLT0gcGxheWVyQ2hvc2VuLmRlZmVuZDtcbiAgICBjb25zb2xlLmxvZyh2aWxsaWFuQ2hvc2VuLmF0dGFjayk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhdHRhY2tQbGF5ZXIoKTtcbiAgICAgIHZpbGxpYW5DaG9zZW4uYXR0YWNrICs9IHBsYXllckNob3Nlbi5kZWZlbmQ7XG4gICAgICBjb25zb2xlLmxvZyh2aWxsaWFuQ2hvc2VuLmF0dGFjayk7XG4gICAgfSwgMjAwMCk7XG4gIH1cbiAgZnVuY3Rpb24gd2FyQ3J5KCl7XG4gICAgdHVybiA9IGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKHBsYXllckNob3Nlbi5hdHRhY2spO1xuICAgIHBsYXllckNob3Nlbi5hdHRhY2sgKz0gcGxheWVyQ2hvc2VuLndhckNyeTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJDaG9zZW4uYXR0YWNrKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF0dGFja1BsYXllcigpO1xuICAgIH0sIDIwMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXR0YWNrVmlsbGlhbigpO1xuICAgICAgcGxheWVyQ2hvc2VuLmF0dGFjayAtPSBwbGF5ZXJDaG9zZW4ud2FyQ3J5O1xuICAgICAgY29uc29sZS5sb2cocGxheWVyQ2hvc2VuLmF0dGFjayk7XG4gICAgfSwgMzAwMCk7XG4gIH1cbiAgJCgnI2luc3RydWN0aW9ucycpLm9uKCdjbGljaycsIGhpZGVXaW5kb3cxKTtcbiAgJCgnI2JhY2snKS5vbignY2xpY2snLCBoaWRlV2luZG93Mik7XG4gICQoJyNwbGF5Jykub24oJ2NsaWNrJywgZ29Ub1BsYXlTY3JlZW4pO1xuICAkKCcjc3RhcnQnKS5vbignY2xpY2snLCB0b1RoZUdhbWUpO1xuICAkKCcubmFtZScpLm9uKCdrZXl1cCcsIGdldFRoZU5hbWUpO1xuICAkKCcucGVyc29uJykub24oJ2NsaWNrJywgc2VsZWN0Q2hhcmFjdGVyKTtcbiAgJCgnI2tpY2stb2ZmJykub24oJ2NsaWNrJywgc3RhcnRUaGVHYW1lKTtcbiAgJCgnI2F0dGFjaycpLm9uKCdjbGljaycsIGF0dGFja1ZpbGxpYW4pO1xuICAkKCcjd2FyY3J5Jykub24oJ2NsaWNrJywgd2FyQ3J5KTtcbiAgJCgnI2RlZmVuZCcpLm9uKCdjbGljaycsIGRlZmVuZCk7XG59KTtcbiJdfQ==
