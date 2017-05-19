"use strict";var playerName=void 0,playerChosen=void 0,villianChosen=void 0,playerScore=10,playerHighscore=void 0,villianScore=10,characters={one:{name:"No1",image:"public/assets/images/gingerkitten.jpg"},two:{name:"No2",image:"public/assets/images/gingerkitten.jpg"},three:{name:"No3",image:"public/assets/images/gingerkitten.jpg"}},villians={one:{name:"Villian No1",image:"public/assets/images/villian.jpg"},two:{name:"Villian No2",image:"public/assets/images/villian.jpg"},three:{name:"Villian No3",image:"public/assets/images/villian.jpg"}},questions=[{question:"What is 3 + 2?",answer:"5"},{question:"What is the capital city of the UK?",answer:"London"}];$(function(){function e(){$(".welcome").addClass("hidden"),$(".instructions").removeClass("hidden")}function i(){$(".instructions").addClass("hidden"),$(".welcome").removeClass("hidden")}function a(){$(".welcome").addClass("hidden"),$(".character").removeClass("hidden")}function n(){$(".character").addClass("hidden"),$(".chosen-character").removeClass("hidden")}function s(){playerName=$(this).val(),$("#name").text("Hello "+playerName+"!"),$(".player1-name").text(playerName)}function l(){$(this).toggleClass("active").siblings().removeClass("active");var e=$(this).attr("id");playerChosen=characters[e],$(".chosen-character img, .player1").attr("src",playerChosen.image),villianChosen=villians[e],$(".villian").attr("src",villianChosen.image),$(".villian-name").text(villianChosen.name)}function o(){$(".chosen-character").addClass("hidden"),$(".game-window").removeClass("hidden"),t(),c()}function t(){$("#player1-score").html(playerScore),$("#villian-score").html(villianScore)}function c(){console.log(questions[0].question),$("#question-place").text(questions[0].question)}$("#instructions").on("click",e),$("#back").on("click",i),$("#play").on("click",a),$("#start").on("click",n),$(".name").on("keyup",s),$(".person").on("click",l),$("#kick-off").on("click",o)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJwbGF5ZXJOYW1lIiwicGxheWVyQ2hvc2VuIiwidmlsbGlhbkNob3NlbiIsInBsYXllclNjb3JlIiwicGxheWVySGlnaHNjb3JlIiwib25lIiwiY2hhcmFjdGVycyIsImltYWdlIiwibmFtZSIsInR3byIsInRocmVlIiwidmlsbGlhbnMiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImFuc3dlciIsIiQiLCJoaWRlV2luZG93MSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoaWRlV2luZG93MiIsImdvVG9QbGF5U2NyZWVuIiwidG9UaGVHYW1lIiwidGV4dCIsInRoaXMiLCJ2YWwiLCJzZWxlY3RDaGFyYWN0ZXIiLCJpZCIsImF0dHIiLCJzaWJsaW5ncyIsInN0YXJ0VGhlR2FtZSIsImRpc3BsYXlTY29yZSIsInNob3dRdWVzdGlvbiIsImh0bWwiLCJ2aWxsaWFuU2NvcmUiLCJjb25zb2xlIiwibG9nIiwib24iLCJnZXRUaGVOYW1lIl0sIm1hcHBpbmdzIjoiWUF1REEsSUFBSUEsZ0JBQUFBLEdBQ0FDLGlCQUFBQSxHQURBRCxrQkFBQUEsR0FDQUMsWUFBQUEsR0FDQUMsb0JBQUFBLEdBQ0FDLGFBQWMsR0FDZEMsWUFDSkMsS0FDTUMsS0FBQUEsTUFDSkQsTUFBSyx5Q0FFSEUsS0FIZUMsS0FBQSxNQUtqQkMsTUFBSyx5Q0FFSEYsT0FQZUMsS0FBQSxNQVNqQkUsTUFBTywwQ0FBQUMsVUFUVE4sS0FjTU0sS0FBQUEsY0FDSk4sTUFBSyxvQ0FFSEUsS0FIYUMsS0FBQSxjQUtmQyxNQUFLLG9DQUVIRixPQVBhQyxLQUFBLGNBU2ZFLE1BQU8scUNBQUFFLFlBS0hBLFNBQUFBLGlCQUVGQyxPQUFVLE1BSVZBLFNBQVUsc0NBQ1ZDLE9BQVEsVUFLVkMsR0FBQSxXQUNFQSxRQUFFQyxLQUNGRCxFQUFFLFlBQUFFLFNBQWlCQyxVQUNwQkgsRUFBQSxpQkFBQUcsWUFBQSxVQUVDSCxRQUFFSSxLQUNGSixFQUFFLGlCQUFZRyxTQUFZLFVBQzNCSCxFQUFBLFlBQUFHLFlBQUEsVUFFQ0gsUUFBRUssS0FDRkwsRUFBRSxZQUFGRSxTQUFnQkMsVUFDakJILEVBQUEsY0FBQUcsWUFBQSxVQUVDSCxRQUFFTSxLQUNGTixFQUFFLGNBQUFFLFNBQXFCQyxVQUN4QkgsRUFBQSxxQkFBQUcsWUFBQSxVQUVDbEIsUUFBQUEsS0FDQWUsV0FBV08sRUFBWEMsTUFBQUMsTUFDQVQsRUFBRSxTQUFBTyxLQUFGUCxTQUF3QmYsV0FBeEJlLEtBQ0RBLEVBQUEsaUJBQUFPLEtBQUF0QixZQUdDZSxRQUFBVSxLQUNBVixFQUFBUSxNQUFNRyxZQUFhQyxVQUFuQkMsV0FBQVYsWUFBQSxTQUNBakIsSUFBQUEsR0FBQUEsRUFBQUEsTUFBZUssS0FBQUEsS0FDZlMsY0FBRVQsV0FBQW9CLEdBQ0Z4QixFQUFBQSxtQ0FBQXlCLEtBQUEsTUFBQTFCLGFBQUFNLE9BQ0FRLGNBQWNZLFNBQWRELEdBQ0FYLEVBQUUsWUFBQVksS0FBaUJMLE1BQUtwQixjQUFjTSxPQUN2Q08sRUFBQSxpQkFBQU8sS0FBQXBCLGNBQUFNLE1BRUNPLFFBQUVjLEtBQ0ZkLEVBQUUscUJBQWdCRyxTQUFZLFVBQzlCWSxFQUFBQSxnQkFBQUEsWUFBQUEsVUFDQUMsSUFDREEsSUFFQ2hCLFFBQUVlLEtBQ0ZmLEVBQUUsa0JBQWtCaUIsS0FBS0MsYUFDMUJsQixFQUFBLGtCQUFBaUIsS0FBQUMsY0FFQ0MsUUFBQUEsS0FDQW5CLFFBQUVvQixJQUFBdkIsVUFBbUJVLEdBQXJCVCxVQUNERSxFQUFBLG1CQUFBTyxLQUFBVixVQUFBLEdBQUFDLFVBR0RFLEVBQUUsaUJBQVlxQixHQUFkLFFBQXVCakIsR0FDdkJKLEVBQUUsU0FBU3FCLEdBQUcsUUFBU2hCLEdBQ3ZCTCxFQUFFLFNBQUZxQixHQUFBLFFBQUFoQixHQUNBTCxFQUFFLFVBQVNxQixHQUFHLFFBQVNDLEdBQ3ZCdEIsRUFBRSxTQUFGcUIsR0FBYUEsUUFBYkMsR0FDQXRCLEVBQUUsV0FBRnFCLEdBQWVBLFFBQWZYLEdBckRGVixFQUFBLGFBQUFxQixHQUFBLFFBQUFQIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQkFUVExFIEdBTUVcbnVzZXIgam91cm5leTpcbjEpaW50aXRpYWwgc2NyZWVuIHdpdGggMiBvcHRpb25zOiBpbnN0cnVjdGlvbnMgYW5kIHBsYXlcbjIpaWYgdXNlciBjaG9vc2VzIGluc3RydWN0aW9ucyA9PiBkaXNwbGF5IGluc3RyXG51Y3Rpb25zICh3aXRoIGFuIG9wdGlvbiB0byBnbyBiYWNrKVxuMylpZiB1c2VyIGNob29zZXMgdG8gcGxheSA9PiBkaXNwbGF5IHRoZSBnYW1lIGl0c2VsZlxuNCl1c2VyIGNob29zZXMgYSBjaGFyYWN0ZXIgKDMgb3B0aW9ucykgYW5kIGluc2VydHMgdGhlIG5hbWVcbjUpd2hlbiB0aGUgYWJvdmUgaXMgZG9uZSwgYnJpbmcgdGhlIHVzZXIgdG8gdGhlIGJhdHRsZSAoY29tbWVuY2UgdGhlIGJhdHRsZSkgc2NyZWVuXG5CQVRUTEUgTE9HSUMgVEhBVCBJIEhBVkUgTk8gQ0xVRSBIT1cgVE8gRklHVVJFIE9VVFxuUExTIEhFTFBcbihwZXJoYXBzIHRoZSBxdWl6IGlkZWE/KVxuXG5jaGFyYWN0ZXIgYW5kIG9wcG9uZW50IGhhdmUgYm90aCAxMCBwb2ludHMgb2YgbGlmZSBlYWNoLlxuaW4gb3JkZXIgdG8gaGF2ZSBhIGNoYW5jZSB0byBtYWtlIGRhbWFnZSB0byBvcHBvbmVudCwgdGhlIHVzZXIgbXVzdCBhbnN3ZXIgdGhlIHF1ZXN0aW9uICh0aGF0IHBvcHMgdXAgb24gdGhlIHNjcmVlbikgY29ycmVjdGx5LCB3aXRoaW4gZ2l2ZW4gdGltZWZyYW1lIChsZXQncyBzYXkgMTAgc2VjKS4gSWYgYW5zd2VyZWQgY29ycmVjdGx5LCB1c2VyIG1ha2VzIGRhbWFnZSB0byBvcHBvbmVudCAoLTEgcG9pbnQpLlxuSWYgdGhlIHF1ZXN0aW9uIGlzIGFuc3dlcmVkIG5vdCBjb3JyZWN0bHksIHRoZSBvcHBvbmVudCBtYWtlcyB0aGUgZGFtYWdlIHRvIHRoZSB1c2VyICgtMSkuXG5UaGUgZ2FtZSBpcyBmaW5pc2hlZCB3aGVuIHVzZXIgb3IgdGhlIG9wcG9uZW50IGhpdHMgMCBsaWZlIHBvaW50cy5cblxuKGRvZXMgaXQgbWVldCB0aGUgcmVxdWlyZW1lbnQgZm9yIDIgcGxheWVycz8gdGhlIG9wcG9uZW50IGNhbiBzdGlsbCBraWxsIHlvdSlcbjYpc29tZW9uZSB3aW5zISB0aGUgd2lubmVyIGFuZCBzY29yZSBpcyBkaXNwbGF5ZWRcbjcpSWYgbmVjZXNzYXJ5IC0gdXBkYXRlIHRoZSBoaWdoc2NvcmVcbjgpdXNlciBhc2tlZCBpZiB3YW50cyB0byBwbGF5IGFnYWluXG5cbm5lZWQgdG8gY3JlYXRlIHRoZSBmb2xsb3dpbmcgZ2xvYmFsIHZhcmlhYmxlczpcbmNob2ljZSBvZiBjaGFyYWN0ZXJzIC0gYXJyYXlcbnN0b3JlIHRoZSBuYW1lIG9mIHRoZSBwbGF5ZXIgLSBsZXQgcGxheWVyTmFtZVxuc2NvcmVcbmhpZ2hzY29yZVxuc3RvcmUgcXVlc3N0aW9ucyBhbmQgYW5zd2VycyAtIG9iamVjdCBvciBtdWx0aWRpbWVuc2lvbmFsIGFycmF5P1xuc3RvcmUgc29tZSBodG1sIGVsZW1lbnRzIGZvciBsYXRlclxuXG5GVU5DVElPTlNcbjEpd2hlbiB1c2VyIGNsaWNrcyBvbiBpbnN0cnVjdGlvbnMgLSBoaWRlIHRoZSBtYWluIHNjcmVlbiBhbmQgZGlzcGxheSBpbnN0cnVjdGlvbnMuIHdoZW4gY2xpY2tzIG9uIGJhY2sgaW4gaW5zdHJ1Y3Rpb25zLCBpdCBicmluZ3MgdGhlIHVzZXIgYmFjayB0byB0aGUgaW5pdGlhbCBzY3JlZW5cblxuMikgd2hlbiBjbGlja2luZyBvbiBwbGF5IC0gaGlkZSB0aGUgaW5pdGlhbCBzY3JlZW4sIGRpc3BsYXkgdGhlIHNjcmVlbiB3aXRoIHRoZSBjaGFyYWN0ZXIgY2hvaWNlIGZpZWxkIGFuZCBpbnB1dCB0aGUgbmFtZS4gaWYgbmFtZSBhbmQvb3IgY2hhcmFjdGVyIGlzIG5vdCBpbnB1dCwgYWxlcnQgdXNlciB0aGF0IHRoaXMgbXVzdCBiZSBjb21wbGV0ZWQuXG5cbjMpIGNvbW1lbmNlIHRoZSBiYXR0bGUgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgLSBicmluZ3MgdGhlIHVzZXIgdG8gdGhlIGJhdHRsZSBzY3JlZW4uIGRpc3BsYXkgdGhlIHVzZXIncyBjaGFyYWN0ZXIgb24gdGhlIGxlZnQgYW5kIHRoZSBvcHBvbmVudCAoYXV0b21hdGlhY2FsbHkgY2hvc2VuKSBvbiB0aGUgcmlnaHQuXG5cbnx8XG58fFxuXFwgIC9cblxcL1xuZnVuY3Rpb24gdG8gcHVsbCB0aGUgcXVlc3Rpb24gKGZvcm0/KS4gc2V0SW50ZXJ2YWwgdG8gbWVhc3VyZSB0aGUgdGltZSBmb3IgYW5zd2VyLiBpZiB0aGUgc3RyaW5nIGlucHV0IGJ5IHRoZSB1c2VyIG1hdGNoZXMgdGhlIGNvcnJlY3QgYW5zd2VyLCBzdWJzdHJhY3QgMSBmcm9tIG9wcG9uZW50J3MgbGlmZSBwb2ludHMuIGVsc2UgLSBzdWJzdHJhY3QgMSBmcm9tIHBsYXllcidzIGxpZmUgcG9pbnRzLlxuUmVwZWF0IHRoaXMgdW50aWwgdXNlciBvciBvcHBvbmVudCBydW4gb3V0IG9mIGxpZmUgcG9pbnRzLlxuXG5cbjQpIEZ1bmN0aW9uIHRvIHN0b3AgdGhlIGdhbWUgd2hlbiBzb21lb25lIHJlYWNoZXMgMCBwb2ludHMgb2YgbGlmZS4gUHVsbCB0aGUgbmFtZS9waWMgb2YgdGhlIHdpbm5lciBvbiB0aGUgcGFnZS4gKGFub3RoZXIgZGl2PylcblxuNSkgSWYgbmVjZXNzYXJ5IC0gdXBkYXRlIHRoZSBoaWdoc2NvcmVcblxuNilBc2sgdXNlciBpZiB3YW50cyB0byBwbGF5IGFnYWluLiBJZiBjb25maXJtcywgc3RhcnQgdGhlIGdhbWUgYWdhaW4uXG5cblxuV2hhdCBJIHN0aWxsIG5lZWQgdG8gZG8gLSB0aGluayBhYm91dCBob3cgdGhlIHNjb3JlIGlzIGNhbGN1bGF0ZWQuXG4qL1xuXG5sZXQgcGxheWVyTmFtZTtcbmxldCBwbGF5ZXJDaG9zZW47XG5sZXQgdmlsbGlhbkNob3NlbjtcbmxldCBwbGF5ZXJTY29yZSA9IDEwO1xubGV0IHBsYXllckhpZ2hzY29yZTtcbmxldCB2aWxsaWFuU2NvcmUgPSAxMDtcbmNvbnN0IGNoYXJhY3RlcnMgPSB7XG4gIG9uZToge1xuICAgIG5hbWU6ICdObzEnLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvZ2luZ2Vya2l0dGVuLmpwZydcbiAgfSxcbiAgdHdvOiB7XG4gICAgbmFtZTogJ05vMicsXG4gICAgaW1hZ2U6ICdwdWJsaWMvYXNzZXRzL2ltYWdlcy9naW5nZXJraXR0ZW4uanBnJ1xuICB9LFxuICB0aHJlZToge1xuICAgIG5hbWU6ICdObzMnLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvZ2luZ2Vya2l0dGVuLmpwZydcbiAgfVxufTtcbmNvbnN0IHZpbGxpYW5zID0ge1xuICBvbmU6IHtcbiAgICBuYW1lOiAnVmlsbGlhbiBObzEnLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvdmlsbGlhbi5qcGcnXG4gIH0sXG4gIHR3bzoge1xuICAgIG5hbWU6ICdWaWxsaWFuIE5vMicsXG4gICAgaW1hZ2U6ICdwdWJsaWMvYXNzZXRzL2ltYWdlcy92aWxsaWFuLmpwZydcbiAgfSxcbiAgdGhyZWU6IHtcbiAgICBuYW1lOiAnVmlsbGlhbiBObzMnLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvdmlsbGlhbi5qcGcnXG4gIH1cbn07XG5jb25zdCBxdWVzdGlvbnMgPSBbXG4gIHtcbiAgICBxdWVzdGlvbjogJ1doYXQgaXMgMyArIDI/JyxcbiAgICBhbnN3ZXI6ICc1J1xuICB9LFxuICB7XG4gICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBjYXBpdGFsIGNpdHkgb2YgdGhlIFVLPycsXG4gICAgYW5zd2VyOiAnTG9uZG9uJ1xuICB9XG5dO1xuXG4kKCgpID0+IHtcbiAgZnVuY3Rpb24gaGlkZVdpbmRvdzEoKXtcbiAgICAkKCcud2VsY29tZScpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuaW5zdHJ1Y3Rpb25zJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9XG4gIGZ1bmN0aW9uIGhpZGVXaW5kb3cyKCl7XG4gICAgJCgnLmluc3RydWN0aW9ucycpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcud2VsY29tZScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxuICBmdW5jdGlvbiBnb1RvUGxheVNjcmVlbigpe1xuICAgICQoJy53ZWxjb21lJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5jaGFyYWN0ZXInKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gIH1cbiAgZnVuY3Rpb24gdG9UaGVHYW1lKCl7XG4gICAgJCgnLmNoYXJhY3RlcicpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkKCcuY2hvc2VuLWNoYXJhY3RlcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRUaGVOYW1lKCl7XG4gICAgcGxheWVyTmFtZSA9ICQodGhpcykudmFsKCk7XG4gICAgJCgnI25hbWUnKS50ZXh0KGBIZWxsbyAke3BsYXllck5hbWV9IWApO1xuICAgICQoJy5wbGF5ZXIxLW5hbWUnKS50ZXh0KHBsYXllck5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0Q2hhcmFjdGVyKCl7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgY29uc3QgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgcGxheWVyQ2hvc2VuID0gY2hhcmFjdGVyc1tpZF07XG4gICAgJCgnLmNob3Nlbi1jaGFyYWN0ZXIgaW1nLCAucGxheWVyMScpLmF0dHIoJ3NyYycsIHBsYXllckNob3Nlbi5pbWFnZSk7XG4gICAgdmlsbGlhbkNob3NlbiA9IHZpbGxpYW5zW2lkXTtcbiAgICAkKCcudmlsbGlhbicpLmF0dHIoJ3NyYycsIHZpbGxpYW5DaG9zZW4uaW1hZ2UpO1xuICAgICQoJy52aWxsaWFuLW5hbWUnKS50ZXh0KHZpbGxpYW5DaG9zZW4ubmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRUaGVHYW1lKCl7XG4gICAgJCgnLmNob3Nlbi1jaGFyYWN0ZXInKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmdhbWUtd2luZG93JykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIGRpc3BsYXlTY29yZSgpO1xuICAgIHNob3dRdWVzdGlvbigpO1xuICB9XG4gIGZ1bmN0aW9uIGRpc3BsYXlTY29yZSgpe1xuICAgICQoJyNwbGF5ZXIxLXNjb3JlJykuaHRtbChwbGF5ZXJTY29yZSk7XG4gICAgJCgnI3ZpbGxpYW4tc2NvcmUnKS5odG1sKHZpbGxpYW5TY29yZSk7XG4gIH1cbiAgZnVuY3Rpb24gc2hvd1F1ZXN0aW9uKCl7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25zWzBdLnF1ZXN0aW9uKTtcbiAgICAkKCcjcXVlc3Rpb24tcGxhY2UnKS50ZXh0KHF1ZXN0aW9uc1swXS5xdWVzdGlvbik7XG4gIH1cblxuICAkKCcjaW5zdHJ1Y3Rpb25zJykub24oJ2NsaWNrJywgaGlkZVdpbmRvdzEpO1xuICAkKCcjYmFjaycpLm9uKCdjbGljaycsIGhpZGVXaW5kb3cyKTtcbiAgJCgnI3BsYXknKS5vbignY2xpY2snLCBnb1RvUGxheVNjcmVlbik7XG4gICQoJyNzdGFydCcpLm9uKCdjbGljaycsIHRvVGhlR2FtZSk7XG4gICQoJy5uYW1lJykub24oJ2tleXVwJywgZ2V0VGhlTmFtZSk7XG4gICQoJy5wZXJzb24nKS5vbignY2xpY2snLCBzZWxlY3RDaGFyYWN0ZXIpO1xuICAkKCcja2ljay1vZmYnKS5vbignY2xpY2snLCBzdGFydFRoZUdhbWUpO1xuXG59KTtcbiJdfQ==
