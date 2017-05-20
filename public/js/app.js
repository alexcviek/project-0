"use strict";var playerName=void 0,playerChosen=void 0,villianChosen=void 0,playerLife=20,villianLife=20,turn=!0,roundResultText=void 0,characters={one:{name:"Nick",image:"public/assets/images/player1.gif",attack:4,warCry:2,defend:4,accuracy:.4},two:{name:"Ellen",image:"public/assets/images/player2.gif",attack:5,warCry:2,defend:5,accuracy:.5},three:{name:"No3",image:"public/assets/images/player3.jpg",attack:6,warCry:1,defend:2,accuracy:.5}},villians={one:{name:"Henry",image:"public/assets/images/villian3.jpg",attack:5,accuracy:.5},two:{name:"Xenomorph",image:"public/assets/images/villian2.gif",attack:6,accuracy:.6},three:{name:"Henry",image:"public/assets/images/villian3.jpg",attack:4,accuracy:.56}};$(function(){function e(){$(".instructions").removeClass("hidden"),$(".welcome").addClass("hidden")}function a(){$(".instructions").addClass("hidden"),$(".welcome").removeClass("hidden")}function n(){$(".welcome").addClass("hidden"),$(".character").removeClass("hidden")}function t(){$(".character").addClass("hidden"),$(".chosen-character").removeClass("hidden")}function i(){$(".chosen-character").fadeOut("slow").addClass("hidden"),$(".game-window").fadeIn("slow").removeClass("hidden"),s()}function l(){playerName=$(this).val(),0===playerName.length&&(playerName=playerChosen.name),$("#name").text("Hello "+playerName+"!"),$(".player1-name").text(playerName)}function o(){$(this).addClass("active").siblings().removeClass("active");var e=$(this).attr("id");e&&$("#start").attr("disabled",!1),playerChosen=characters[e],villianChosen=villians[e],$(".chosen-character img, .player1").attr("src",playerChosen.image),$(".villian").attr("src",villianChosen.image),$(".villian-name").text(villianChosen.name)}function s(){setInterval(function(){$("#player1-score").html(playerLife),$("#villian-score").html(villianLife)},500)}function c(){!0===turn&&(Math.random()<playerChosen.accuracy?(villianLife-=playerChosen.attack,roundResultText="You have hit him!"):roundResultText="Whooops! A miss...",$("#battle-text").text(""+roundResultText),turn=!1,console.log(turn),u(),setTimeout(function(){r()},2e3))}function r(){d(),!1===turn&&(Math.random()<villianChosen.accuracy?(playerLife-=villianChosen.attack,roundResultText="Crap! He hit you!"):roundResultText="Lucky u! This time it is a miss and you are safe!",$("#battle-text").text(""+roundResultText),u(),turn=!0,console.log(turn),d())}function u(){playerLife<=0&&($("#winner").text("He killed you :(").css({color:"red","font-size":"30px"}),turn=!0),villianLife<=0&&($("#winner").text("You won!!! Ta-da!!").css({color:"red","font-size":"30px"}),turn=!0)}function d(){!1===turn?console.log("not your turn"):console.log("your turn babe")}function h(){turn=!1,console.log(villianChosen.attack),villianChosen.attack-=playerChosen.defend,console.log(villianChosen.attack),setTimeout(function(){r(),villianChosen.attack+=playerChosen.defend,console.log(villianChosen.attack)},2e3)}function m(){turn=!1,console.log(playerChosen.attack),playerChosen.attack+=playerChosen.warCry,console.log(playerChosen.attack),setTimeout(function(){r()},2e3),setTimeout(function(){c(),playerChosen.attack-=playerChosen.warCry,console.log(playerChosen.attack)},3e3)}$("#instructions").on("click",e),$("#back").on("click",a),$("#play").on("click",n),$("#start").on("click",t),$(".name").on("keyup",l),$(".person").on("click",o),$("#kick-off").on("click",i),$("#attack").on("click",c),$("#warcry").on("click",m),$("#defend").on("click",h)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJwbGF5ZXJOYW1lIiwicGxheWVyQ2hvc2VuIiwidmlsbGlhbkNob3NlbiIsInBsYXllckxpZmUiLCJ2aWxsaWFuTGlmZSIsInJvdW5kUmVzdWx0VGV4dCIsIm9uZSIsImNoYXJhY3RlcnMiLCJuYW1lIiwiaW1hZ2UiLCJhdHRhY2siLCJ3YXJDcnkiLCJhY2N1cmFjeSIsInR3byIsInRocmVlIiwidmlsbGlhbnMiLCIkIiwiaGlkZVdpbmRvdzEiLCJyZW1vdmVDbGFzcyIsImhpZGVXaW5kb3cyIiwiYWRkQ2xhc3MiLCJnb1RvUGxheVNjcmVlbiIsInRvVGhlR2FtZSIsInN0YXJ0VGhlR2FtZSIsImZhZGVPdXQiLCJkaXNwbGF5SGVhbHRoIiwidGhpcyIsInZhbCIsImdldFRoZU5hbWUiLCJ0ZXh0Iiwic2VsZWN0Q2hhcmFjdGVyIiwic2libGluZ3MiLCJpZCIsImF0dHIiLCJzZXRJbnRlcnZhbCIsImh0bWwiLCJhdHRhY2tWaWxsaWFuIiwidHVybiIsIk1hdGgiLCJsb2ciLCJjb25zb2xlIiwiY2hlY2tGb3JXaW5uZXIiLCJzZXRUaW1lb3V0IiwiYXR0YWNrUGxheWVyIiwid2hvc2VUdXJuIiwiY3NzIiwiY29sb3IiLCJmb250LXNpemUiLCJkZWZlbmQiLCJvbiJdLCJtYXBwaW5ncyI6IllBQUEsSUFBSUEsZ0JBQUFBLEdBQ0FDLGlCQUFBQSxHQURBRCxrQkFBQUEsR0FDQUMsV0FBQUEsR0FDQUMsWUFBQUEsR0FDQUMsTUFBQUEsRUFDQUMsb0JBQUFBLEdBRUFDLFlBR0ZDLEtBRElDLEtBQUFBLE9BQ0pELE1BQUssbUNBQ0hFLE9BQU0sRUFDTkMsT0FBTyxFQUNQQyxPQUFRLEVBQ1JDLFNBSkcsSUFNSEMsS0FQZUosS0FBQSxRQVNqQkssTUFBSyxtQ0FDSEwsT0FBTSxFQUNOQyxPQUFPLEVBQ1BDLE9BQVEsRUFDUkMsU0FKRyxJQU1IQyxPQWZlSixLQUFBLE1BaUJqQk0sTUFBTyxtQ0FDTE4sT0FBTSxFQUNOQyxPQUFPLEVBQ1BDLE9BQVEsRUFDUkMsU0FKSyxLQUFBSSxVQWpCVFQsS0EwQk1TLEtBQUFBLFFBQ0pULE1BQUssb0NBQ0hFLE9BQU0sRUFDTkMsU0FBTyxJQUVQRyxLQUxhSixLQUFBLFlBT2ZLLE1BQUssb0NBQ0hMLE9BQU0sRUFDTkMsU0FBTyxJQUVQRyxPQVhhSixLQUFBLFFBYWZNLE1BQU8sb0NBQ0xOLE9BQU0sRUFDTkMsU0FBTyxLQUZGTyxHQUFBLFdBYlQsUUFBQUMsS0FvQkVELEVBQUEsaUJBQU1FLFlBQUEsVUFDTkYsRUFBQSxZQUFTQyxTQUFhLFVBRXBCRCxRQUFFRyxLQUNISCxFQUFBLGlCQUFBSSxTQUFBLFVBQ0RKLEVBQUEsWUFBU0csWUFBYSxVQUVwQkgsUUFBRUssS0FDSEwsRUFBQSxZQUFBSSxTQUFBLFVBQ0RKLEVBQUEsY0FBU0ssWUFBZ0IsVUFFdkJMLFFBQUVNLEtBQ0hOLEVBQUEsY0FBQUksU0FBQSxVQUNESixFQUFBLHFCQUFvQkUsWUFBQSxVQUVsQkYsUUFBRU8sS0FDSFAsRUFBQSxxQkFBQVEsUUFBQSxRQUFBSixTQUFBLFVBQ0RKLEVBQUEsZ0JBQVNPLE9BQWMsUUFBQUwsWUFBQSxVQUNyQkYsSUFFQVMsUUFBQUEsS0FDRHpCLFdBQUFnQixFQUFBVSxNQUFBQyxNQUNvQixJQUFyQjNCLFdBQVM0QixTQUNQNUIsV0FBZUMsYUFBZk8sTUFFRVIsRUFBQUEsU0FBQUEsS0FBQUEsU0FBYUMsV0FBYkQsS0FDRGdCLEVBQUEsaUJBQUFhLEtBQUE3QixZQUdGLFFBQUE4QixLQUdDZCxFQUFFVSxNQUFNTixTQUFTLFVBQVVXLFdBQVdiLFlBQVksU0FEcEQsSUFBQWMsR0FBU0YsRUFBQUEsTUFBQUEsS0FBVCxLQUNJRSxJQUNGaEIsRUFBTWdCLFVBQU9DLEtBQU1BLFlBQW5CLEdBRUVqQixhQUFZaUIsV0FBS0QsR0FDbEI5QixjQUFBYSxTQUFBaUIsR0FDRC9CLEVBQUFBLG1DQUFBZ0MsS0FBQSxNQUFBaEMsYUFBQVEsT0FDQVAsRUFBQUEsWUFBQUEsS0FBZ0JhLE1BQVNpQixjQUF6QnZCLE9BQ0FPLEVBQUUsaUJBQUFhLEtBQUEzQixjQUFtQytCLE1BRXJDakIsUUFBRVMsS0FDSFMsWUFBQSxXQUNEbEIsRUFBQSxrQkFBQW1CLEtBQXdCaEMsWUFDdEIrQixFQUFBQSxrQkFBWUMsS0FBTS9CLGNBQ2hCWSxLQUdILFFBQUFvQixNQUdhLElBQVRDLE9BRExDLEtBQVNGLFNBQVRuQyxhQUF3QlcsVUFDbkJ5QixhQUFjcEMsYUFBQVMsT0FDZkwsZ0JBQW1CSixxQkFFakJJLGdCQUFrQixxQkFFbEJBLEVBQUFBLGdCQUFBQSxLQUFBQSxHQUFrQkEsaUJBQ25CZ0MsTUFBQSxFQUNEckIsUUFBRXVCLElBQUFGLE1BQ0ZBLElBQ0FHLFdBQUEsV0FDQUMsS0FDQUMsTUFHRCxRQUFBQyxLQUNGQyxLQUNRRCxJQUFUTixPQUNFTyxLQUFBQSxTQUFBQSxjQUFBQSxVQUNHUCxZQUFIbkMsY0FBa0JRLE9BQ2hCTCxnQkFBbUJILHFCQUVqQkcsZ0JBQWtCLG9EQUVsQkEsRUFBQUEsZ0JBQUFBLEtBQUFBLEdBQWtCQSxpQkFDbkJvQyxJQUNEekIsTUFBRSxFQUNGeUIsUUFBQUEsSUFBQUEsTUFDQUosS0FHRCxRQUFBSSxLQUNGdEMsWUFBQSxJQUNEYSxFQUFBLFdBQVN5QixLQUFBQSxvQkFBZ0JJLEtBQUFDLE1BQUEsTUFBQUMsWUFBQSxTQUN2QlYsTUFBSWxDLEdBRUZrQyxhQUFBLElBQ0RyQixFQUFBLFdBQUFhLEtBQUEsc0JBQUFnQixLQUFBQyxNQUFBLE1BQUFDLFlBQUEsU0FDRFYsTUFBR2pDLEdBR0YsUUFBQXdDLE1BQ0YsSUFBQVAsS0FDREcsUUFBU0ksSUFBQUEsaUJBRUxKLFFBQVFELElBQUksa0JBR2IsUUFBQVMsS0FDRlgsTUFBQSxFQUNERyxRQUFTUSxJQUFBQSxjQUFRdEMsUUFDZjJCLGNBQUEzQixRQUFBVCxhQUFBK0MsT0FDQVIsUUFBUUQsSUFBSXJDLGNBQWNRLFFBQzFCUixXQUFBQSxXQUNBc0MsSUFDQUUsY0FBV2hDLFFBQU1ULGFBQUErQyxPQUNmTCxRQUFBQSxJQUFBQSxjQUFBQSxTQUNBekMsS0FFRCxRQUpEUyxLQUtEMEIsTUFBQSxFQUNERyxRQUFTN0IsSUFBQUEsYUFBUUQsUUFDZjJCLGFBQUEzQixRQUFBVCxhQUFBVSxPQUNBNkIsUUFBUUQsSUFBSXRDLGFBQWFTLFFBQ3pCVCxXQUFBQSxXQUNBdUMsS0FDQUUsS0FDRUMsV0FBQUEsV0FERlAsSUFHQU0sYUFBV2hDLFFBQU1ULGFBQUFVLE9BQ2Z5QixRQUFBQSxJQUFBQSxhQUFBQSxTQUNBbkMsS0FFRGUsRUFBQSxpQkFKRGlDLEdBQUEsUUFBQWhDLEdBS0RELEVBQUEsU0FBQWlDLEdBQUEsUUFBQTlCLEdBQ0RILEVBQUUsU0FBQWlDLEdBQUEsUUFBb0I1QixHQUN0QkwsRUFBRSxVQUFTaUMsR0FBRyxRQUFTOUIsR0FDdkJILEVBQUUsU0FBU2lDLEdBQUcsUUFBUzVCLEdBQ3ZCTCxFQUFFLFdBQVVpQyxHQUFHLFFBQVMzQixHQUN4Qk4sRUFBRSxhQUFZaUMsR0FBQSxRQUFTckIsR0FDdkJaLEVBQUUsV0FBV2lDLEdBQUcsUUFBU25CLEdBQ3pCZCxFQUFFLFdBQUZpQyxHQUFlQSxRQUFmdEMsR0FDQUssRUFBRSxXQUFXaUMsR0FBRyxRQUFTYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcGxheWVyTmFtZTtcbmxldCBwbGF5ZXJDaG9zZW47XG5sZXQgdmlsbGlhbkNob3NlbjtcbmxldCBwbGF5ZXJMaWZlID0gMjA7XG5sZXQgdmlsbGlhbkxpZmUgPSAyMDtcbmxldCB0dXJuID0gdHJ1ZTtcbmxldCByb3VuZFJlc3VsdFRleHQ7XG5cbmNvbnN0IGNoYXJhY3RlcnMgPSB7XG4gIG9uZToge1xuICAgIG5hbWU6ICdOaWNrJyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL3BsYXllcjEuZ2lmJyxcbiAgICBhdHRhY2s6IDQsXG4gICAgd2FyQ3J5OiAyLFxuICAgIGRlZmVuZDogNCxcbiAgICBhY2N1cmFjeTogMC40XG4gIH0sXG4gIHR3bzoge1xuICAgIG5hbWU6ICdFbGxlbicsXG4gICAgaW1hZ2U6ICdwdWJsaWMvYXNzZXRzL2ltYWdlcy9wbGF5ZXIyLmdpZicsXG4gICAgYXR0YWNrOiA1LFxuICAgIHdhckNyeTogMixcbiAgICBkZWZlbmQ6IDUsXG4gICAgYWNjdXJhY3k6IDAuNVxuICB9LFxuICB0aHJlZToge1xuICAgIG5hbWU6ICdObzMnLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvcGxheWVyMy5qcGcnLFxuICAgIGF0dGFjazogNixcbiAgICB3YXJDcnk6IDEsXG4gICAgZGVmZW5kOiAyLFxuICAgIGFjY3VyYWN5OiAwLjVcbiAgfVxufTtcbmNvbnN0IHZpbGxpYW5zID0ge1xuICBvbmU6IHtcbiAgICBuYW1lOiAnSGVucnknLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvdmlsbGlhbjMuanBnJyxcbiAgICBhdHRhY2s6IDUsXG4gICAgYWNjdXJhY3k6IDAuNVxuICB9LFxuICB0d286IHtcbiAgICBuYW1lOiAnWGVub21vcnBoJyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL3ZpbGxpYW4yLmdpZicsXG4gICAgYXR0YWNrOiA2LFxuICAgIGFjY3VyYWN5OiAwLjZcbiAgfSxcbiAgdGhyZWU6IHtcbiAgICBuYW1lOiAnSGVucnknLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvdmlsbGlhbjMuanBnJyxcbiAgICBhdHRhY2s6IDQsXG4gICAgYWNjdXJhY3k6IDAuNTZcbiAgfVxufTtcbiQoKCkgPT4ge1xuICBmdW5jdGlvbiBoaWRlV2luZG93MSgpe1xuICAgICQoJy5pbnN0cnVjdGlvbnMnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLndlbGNvbWUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gIH1cbiAgZnVuY3Rpb24gaGlkZVdpbmRvdzIoKXtcbiAgICAkKCcuaW5zdHJ1Y3Rpb25zJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy53ZWxjb21lJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9XG4gIGZ1bmN0aW9uIGdvVG9QbGF5U2NyZWVuKCl7XG4gICAgJCgnLndlbGNvbWUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmNoYXJhY3RlcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxuICBmdW5jdGlvbiB0b1RoZUdhbWUoKXtcbiAgICAkKCcuY2hhcmFjdGVyJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5jaG9zZW4tY2hhcmFjdGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0VGhlR2FtZSgpe1xuICAgICQoJy5jaG9zZW4tY2hhcmFjdGVyJykuZmFkZU91dCgnc2xvdycpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuZ2FtZS13aW5kb3cnKS5mYWRlSW4oJ3Nsb3cnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgZGlzcGxheUhlYWx0aCgpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFRoZU5hbWUoKXtcbiAgICBwbGF5ZXJOYW1lID0gJCh0aGlzKS52YWwoKTtcbiAgICBpZiAocGxheWVyTmFtZS5sZW5ndGggPT09IDApe1xuICAgICAgcGxheWVyTmFtZSA9IHBsYXllckNob3Nlbi5uYW1lO1xuICAgIH1cbiAgICAkKCcjbmFtZScpLnRleHQoYEhlbGxvICR7cGxheWVyTmFtZX0hYCk7XG4gICAgJCgnLnBsYXllcjEtbmFtZScpLnRleHQocGxheWVyTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RDaGFyYWN0ZXIoKXtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBjb25zdCBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICBpZihpZCl7XG4gICAgICAkKCcjc3RhcnQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB9XG4gICAgcGxheWVyQ2hvc2VuID0gY2hhcmFjdGVyc1tpZF07XG4gICAgdmlsbGlhbkNob3NlbiA9IHZpbGxpYW5zW2lkXTtcbiAgICAkKCcuY2hvc2VuLWNoYXJhY3RlciBpbWcsIC5wbGF5ZXIxJykuYXR0cignc3JjJywgcGxheWVyQ2hvc2VuLmltYWdlKTtcbiAgICAkKCcudmlsbGlhbicpLmF0dHIoJ3NyYycsIHZpbGxpYW5DaG9zZW4uaW1hZ2UpO1xuICAgICQoJy52aWxsaWFuLW5hbWUnKS50ZXh0KHZpbGxpYW5DaG9zZW4ubmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheUhlYWx0aCgpe1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICQoJyNwbGF5ZXIxLXNjb3JlJykuaHRtbChwbGF5ZXJMaWZlKTtcbiAgICAgICQoJyN2aWxsaWFuLXNjb3JlJykuaHRtbCh2aWxsaWFuTGlmZSk7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFja1ZpbGxpYW4oKXtcbiAgICBpZih0dXJuID09PSB0cnVlKXtcbiAgICAgIGlmKE1hdGgucmFuZG9tKCkgPCBwbGF5ZXJDaG9zZW4uYWNjdXJhY3kpe1xuICAgICAgICB2aWxsaWFuTGlmZSAtPSBwbGF5ZXJDaG9zZW4uYXR0YWNrO1xuICAgICAgICByb3VuZFJlc3VsdFRleHQgPSAnWW91IGhhdmUgaGl0IGhpbSEnO1xuICAgICAgfSBlbHNle1xuICAgICAgICByb3VuZFJlc3VsdFRleHQgPSAnV2hvb29wcyEgQSBtaXNzLi4uJztcbiAgICAgIH1cbiAgICAgICQoJyNiYXR0bGUtdGV4dCcpLnRleHQoYCR7cm91bmRSZXN1bHRUZXh0fWApO1xuICAgICAgdHVybiA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2codHVybik7XG4gICAgICBjaGVja0Zvcldpbm5lcigpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF0dGFja1BsYXllcigpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGF0dGFja1BsYXllcigpe1xuICAgIHdob3NlVHVybigpO1xuICAgIGlmKHR1cm4gPT09IGZhbHNlKXtcbiAgICAgIGlmKE1hdGgucmFuZG9tKCkgPCB2aWxsaWFuQ2hvc2VuLmFjY3VyYWN5KXtcbiAgICAgICAgcGxheWVyTGlmZSAtPSB2aWxsaWFuQ2hvc2VuLmF0dGFjaztcbiAgICAgICAgcm91bmRSZXN1bHRUZXh0ID0gJ0NyYXAhIEhlIGhpdCB5b3UhJztcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgcm91bmRSZXN1bHRUZXh0ID0gJ0x1Y2t5IHUhIFRoaXMgdGltZSBpdCBpcyBhIG1pc3MgYW5kIHlvdSBhcmUgc2FmZSEnO1xuICAgICAgfVxuICAgICAgJCgnI2JhdHRsZS10ZXh0JykudGV4dChgJHtyb3VuZFJlc3VsdFRleHR9YCk7XG4gICAgICBjaGVja0Zvcldpbm5lcigpO1xuICAgICAgdHVybiA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyh0dXJuKTtcbiAgICAgIHdob3NlVHVybigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjaGVja0Zvcldpbm5lcigpe1xuICAgIGlmIChwbGF5ZXJMaWZlIDw9IDApe1xuICAgICAgJCgnI3dpbm5lcicpLnRleHQoJ0hlIGtpbGxlZCB5b3UgOignKS5jc3Moeydjb2xvcic6ICdyZWQnLCAnZm9udC1zaXplJzogJzMwcHgnfSk7XG4gICAgICB0dXJuID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYodmlsbGlhbkxpZmUgPD0gMCl7XG4gICAgICAkKCcjd2lubmVyJykudGV4dCgnWW91IHdvbiEhISBUYS1kYSEhJykuY3NzKHsnY29sb3InOiAncmVkJywgJ2ZvbnQtc2l6ZSc6ICczMHB4J30pO1xuICAgICAgdHVybiA9IHRydWU7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHdob3NlVHVybigpe1xuICAgIGlmICh0dXJuID09PSBmYWxzZSl7XG4gICAgICBjb25zb2xlLmxvZygnbm90IHlvdXIgdHVybicpO1xuICAgIH0gZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCd5b3VyIHR1cm4gYmFiZScpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkZWZlbmQoKXtcbiAgICB0dXJuID0gZmFsc2U7XG4gICAgY29uc29sZS5sb2codmlsbGlhbkNob3Nlbi5hdHRhY2spO1xuICAgIHZpbGxpYW5DaG9zZW4uYXR0YWNrIC09IHBsYXllckNob3Nlbi5kZWZlbmQ7XG4gICAgY29uc29sZS5sb2codmlsbGlhbkNob3Nlbi5hdHRhY2spO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXR0YWNrUGxheWVyKCk7XG4gICAgICB2aWxsaWFuQ2hvc2VuLmF0dGFjayArPSBwbGF5ZXJDaG9zZW4uZGVmZW5kO1xuICAgICAgY29uc29sZS5sb2codmlsbGlhbkNob3Nlbi5hdHRhY2spO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIGZ1bmN0aW9uIHdhckNyeSgpe1xuICAgIHR1cm4gPSBmYWxzZTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJDaG9zZW4uYXR0YWNrKTtcbiAgICBwbGF5ZXJDaG9zZW4uYXR0YWNrICs9IHBsYXllckNob3Nlbi53YXJDcnk7XG4gICAgY29uc29sZS5sb2cocGxheWVyQ2hvc2VuLmF0dGFjayk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhdHRhY2tQbGF5ZXIoKTtcbiAgICB9LCAyMDAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF0dGFja1ZpbGxpYW4oKTtcbiAgICAgIHBsYXllckNob3Nlbi5hdHRhY2sgLT0gcGxheWVyQ2hvc2VuLndhckNyeTtcbiAgICAgIGNvbnNvbGUubG9nKHBsYXllckNob3Nlbi5hdHRhY2spO1xuICAgIH0sIDMwMDApO1xuICB9XG4gICQoJyNpbnN0cnVjdGlvbnMnKS5vbignY2xpY2snLCBoaWRlV2luZG93MSk7XG4gICQoJyNiYWNrJykub24oJ2NsaWNrJywgaGlkZVdpbmRvdzIpO1xuICAkKCcjcGxheScpLm9uKCdjbGljaycsIGdvVG9QbGF5U2NyZWVuKTtcbiAgJCgnI3N0YXJ0Jykub24oJ2NsaWNrJywgdG9UaGVHYW1lKTtcbiAgJCgnLm5hbWUnKS5vbigna2V5dXAnLCBnZXRUaGVOYW1lKTtcbiAgJCgnLnBlcnNvbicpLm9uKCdjbGljaycsIHNlbGVjdENoYXJhY3Rlcik7XG4gICQoJyNraWNrLW9mZicpLm9uKCdjbGljaycsIHN0YXJ0VGhlR2FtZSk7XG4gICQoJyNhdHRhY2snKS5vbignY2xpY2snLCBhdHRhY2tWaWxsaWFuKTtcbiAgJCgnI3dhcmNyeScpLm9uKCdjbGljaycsIHdhckNyeSk7XG4gICQoJyNkZWZlbmQnKS5vbignY2xpY2snLCBkZWZlbmQpO1xufSk7XG4iXX0=
