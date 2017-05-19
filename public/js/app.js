"use strict";var playerName=void 0,playerChosen=void 0,villianChosen=void 0,playerLife=10,playerHighscore=void 0,villianLife=10,answer=void 0,characters={one:{name:"No1",image:"public/assets/images/gingerkitten.jpg"},two:{name:"No2",image:"public/assets/images/gingerkitten.jpg"},three:{name:"No3",image:"public/assets/images/gingerkitten.jpg"}},villians={one:{name:"Villian No1",image:"public/assets/images/villian.jpg"},two:{name:"Villian No2",image:"public/assets/images/villian.jpg"},three:{name:"Villian No3",image:"public/assets/images/villian.jpg"}},questions=[{question:"What is 3 + 2?",answer:"5"},{question:"What is the capital city of the UK?",answer:"London"},{question:"Are doplhins mammals?",answer:"Yes"}];$(function(){function e(){$(".welcome").addClass("hidden"),$(".instructions").removeClass("hidden")}function a(){$(".instructions").addClass("hidden"),$(".welcome").removeClass("hidden")}function i(){$(".welcome").addClass("hidden"),$(".character").removeClass("hidden")}function n(){$(".character").addClass("hidden"),$(".chosen-character").removeClass("hidden")}function s(){playerName=$(this).val(),0===playerName.length&&alert("test"),$("#name").text("Hello "+playerName+"!"),$(".player1-name").text(playerName)}function l(){$(this).toggleClass("active").siblings().removeClass("active");var e=$(this).attr("id");e&&$("#start").attr("disabled",!1),playerChosen=characters[e],$(".chosen-character img, .player1").attr("src",playerChosen.image),villianChosen=villians[e],$(".villian").attr("src",villianChosen.image),$(".villian-name").text(villianChosen.name)}function t(){$(".chosen-character").addClass("hidden"),$(".game-window").removeClass("hidden"),o(),r()}function o(){$("#player1-score").html(playerLife),$("#villian-score").html(villianLife)}function r(){console.log(questions[m].question),$("#question-place").text(questions[m].question)}function c(){answer=$(this).val(),console.log(answer),answer===questions[m].answer&&(console.log("haha!"),villianLife-=1,playerLife+=1,m+=1,answer=$(this).val(""),console.log(m),r(),o()),playerLife-=1,r(),o()}var m=0;$("#instructions").on("click",e),$("#back").on("click",a),$("#play").on("click",i),$("#start").on("click",n),$(".name").on("keyup",s),$(".person").on("click",l),$("#kick-off").on("click",t),$("#answer").on("keyup",c)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJwbGF5ZXJOYW1lIiwicGxheWVyQ2hvc2VuIiwidmlsbGlhbkNob3NlbiIsInBsYXllckxpZmUiLCJwbGF5ZXJIaWdoc2NvcmUiLCJ2aWxsaWFuTGlmZSIsIm9uZSIsImNoYXJhY3RlcnMiLCJpbWFnZSIsIm5hbWUiLCJ0d28iLCJ0aHJlZSIsInZpbGxpYW5zIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCIkIiwiaGlkZVdpbmRvdzEiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlkZVdpbmRvdzIiLCJnb1RvUGxheVNjcmVlbiIsInRvVGhlR2FtZSIsImFsZXJ0IiwidGhpcyIsInZhbCIsImxlbmd0aCIsInRleHQiLCJpZCIsInRvZ2dsZUNsYXNzIiwic2libGluZ3MiLCJhdHRyIiwic3RhcnRUaGVHYW1lIiwiZGlzcGxheVNjb3JlIiwic2hvd1F1ZXN0aW9uIiwiaHRtbCIsImN1cnJlbnRRdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImdldFRoZU5hbWUiLCJzZWxlY3RDaGFyYWN0ZXIiLCJnZXRBbnN3ZXIiXSwibWFwcGluZ3MiOiJZQXVEQSxJQUFJQSxnQkFBQUEsR0FDQUMsaUJBQUFBLEdBREFELGtCQUFBQSxHQUNBQyxXQUFBQSxHQUNBQyxvQkFBQUEsR0FDQUMsWUFBYSxHQUNiQyxXQUFBQSxHQUNBQyxZQUNKQyxLQUNNQyxLQUFBQSxNQUNKRCxNQUFLLHlDQUVIRSxLQUhlQyxLQUFBLE1BS2pCQyxNQUFLLHlDQUVIRixPQVBlQyxLQUFBLE1BU2pCRSxNQUFPLDBDQUFBQyxVQVRUTixLQWNNTSxLQUFBQSxjQUNKTixNQUFLLG9DQUVIRSxLQUhhQyxLQUFBLGNBS2ZDLE1BQUssb0NBRUhGLE9BUGFDLEtBQUEsY0FTZkUsTUFBTyxxQ0FBQUUsWUFLSEEsU0FBQUEsaUJBRUZDLE9BQVUsTUFJVkEsU0FBVSxzQ0FDVkMsT0FBUSxXQUlSQSxTQUFRLHdCQVhaQSxPQUFBLE9BaUJJQyxHQUFBQSxXQUNBQSxRQUFFQyxLQUNIRCxFQUFBLFlBQUFFLFNBQUEsVUFDREYsRUFBQSxpQkFBQUcsWUFBc0IsVUFFcEJILFFBQUVJLEtBQ0hKLEVBQUEsaUJBQUFFLFNBQUEsVUFDREYsRUFBQSxZQUFTSyxZQUFnQixVQUV2QkwsUUFBRUssS0FDSEwsRUFBQSxZQUFBRSxTQUFBLFVBQ0RGLEVBQUEsY0FBQUcsWUFBb0IsVUFFbEJILFFBQUVNLEtBQ0hOLEVBQUEsY0FBQUUsU0FBQSxVQUNERixFQUFBLHFCQUFxQkcsWUFBQSxVQUVuQixRQUFJbkIsS0FDRnVCLFdBQU1QLEVBQU5RLE1BQUFDLE1BQ0QsSUFBQXpCLFdBQUEwQixRQUNDSCxNQUFBLFFBRUhQLEVBQUEsU0FBQVcsS0FBQSxTQUFBM0IsV0FBQSxLQURDZ0IsRUFBRSxpQkFBaUJXLEtBQUszQixZQUt4QixRQUFNNEIsS0FDTlosRUFBQVEsTUFBTUssWUFBQSxVQUFBQyxXQUFBWCxZQUFBLFNBQ0pILElBQUVZLEdBQUFaLEVBQUZRLE1BQWlCTyxLQUFBLEtBQ2xCSCxJQUNEM0IsRUFBQUEsVUFBQUEsS0FBZU0sWUFBZixHQUVBTCxhQUFBQSxXQUF5QjBCLEdBQ3pCWixFQUFFLG1DQUF3QmQsS0FBY00sTUFBeENQLGFBQUFPLE9BQ0FRLGNBQUVKLFNBQXNCVixHQUN6QmMsRUFBQSxZQUFBZSxLQUFBLE1BQUE3QixjQUFBTSxPQUNEUSxFQUFBLGlCQUFBVyxLQUF1QnpCLGNBQUFPLE1BRXJCTyxRQUFFZ0IsS0FDRkMsRUFBQUEscUJBQUFBLFNBQUFBLFVBQ0FDLEVBQUFBLGdCQUFBQSxZQUFBQSxVQUNERCxJQUNEQyxJQUVFbEIsUUFBRWlCLEtBQ0hqQixFQUFBLGtCQUFBbUIsS0FBQWhDLFlBQ0RhLEVBQUlvQixrQkFBa0JELEtBQXRCOUIsYUFHRVcsUUFBRWtCLEtBQ0hHLFFBQUFDLElBQUF6QixVQUFBdUIsR0FBQXRCLFVBQ0RFLEVBQUEsbUJBQW9CVyxLQUFBZCxVQUFBdUIsR0FBQXRCLFVBRWxCdUIsUUFBQUEsS0FDQXRCLE9BQUlBLEVBQUFBLE1BQVdGLE1BQ2J3QixRQUFBQSxJQUFRQyxRQUNSakMsU0FBQUEsVUFBQStCLEdBQUFyQixTQUNBWixRQUFBQSxJQUFBQSxTQUNBaUMsYUFBQUEsRUFDQXJCLFlBQVcsRUFDWHNCLEdBQVlELEVBQ1pGLE9BQUFBLEVBQUFBLE1BQUFBLElBQUFBLElBQ0FELFFBQUFBLElBQUFBLEdBUkZDLElBV0EvQixLQUdEQSxZQUFBLEVBRkMrQixJQUlBRCxJQXRCQUksR0FBQUEsR0FBWXhCLENBeUJkRyxHQUFFLGlCQUFhdUIsR0FBZixRQUF3QmpCLEdBQ3hCTixFQUFFLFNBQVN1QixHQUFHLFFBQVNDLEdBQ3ZCeEIsRUFBRSxTQUFGdUIsR0FBYUEsUUFBYmxCLEdBQ0FMLEVBQUUsVUFBQXVCLEdBQWFBLFFBQUdqQixHQUNsQk4sRUFBRSxTQUFGdUIsR0FBYUEsUUFBYkMsR0EvRUZ4QixFQUFBLFdBQUF1QixHQUFBLFFBQUFFLEdBOEVFekIsRUFBRSxhQUFhdUIsR0FBRyxRQUFTUCxHQUMzQmhCLEVBQUUsV0FBV3VCLEdBQUcsUUFBU0ciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypCQVRUTEUgR0FNRVxudXNlciBqb3VybmV5OlxuMSlpbnRpdGlhbCBzY3JlZW4gd2l0aCAyIG9wdGlvbnM6IGluc3RydWN0aW9ucyBhbmQgcGxheVxuMilpZiB1c2VyIGNob29zZXMgaW5zdHJ1Y3Rpb25zID0+IGRpc3BsYXkgaW5zdHJcbnVjdGlvbnMgKHdpdGggYW4gb3B0aW9uIHRvIGdvIGJhY2spXG4zKWlmIHVzZXIgY2hvb3NlcyB0byBwbGF5ID0+IGRpc3BsYXkgdGhlIGdhbWUgaXRzZWxmXG40KXVzZXIgY2hvb3NlcyBhIGNoYXJhY3RlciAoMyBvcHRpb25zKSBhbmQgaW5zZXJ0cyB0aGUgbmFtZVxuNSl3aGVuIHRoZSBhYm92ZSBpcyBkb25lLCBicmluZyB0aGUgdXNlciB0byB0aGUgYmF0dGxlIChjb21tZW5jZSB0aGUgYmF0dGxlKSBzY3JlZW5cbkJBVFRMRSBMT0dJQyBUSEFUIEkgSEFWRSBOTyBDTFVFIEhPVyBUTyBGSUdVUkUgT1VUXG5QTFMgSEVMUFxuKHBlcmhhcHMgdGhlIHF1aXogaWRlYT8pXG5cbmNoYXJhY3RlciBhbmQgb3Bwb25lbnQgaGF2ZSBib3RoIDEwIHBvaW50cyBvZiBsaWZlIGVhY2guXG5pbiBvcmRlciB0byBoYXZlIGEgY2hhbmNlIHRvIG1ha2UgZGFtYWdlIHRvIG9wcG9uZW50LCB0aGUgdXNlciBtdXN0IGFuc3dlciB0aGUgcXVlc3Rpb24gKHRoYXQgcG9wcyB1cCBvbiB0aGUgc2NyZWVuKSBjb3JyZWN0bHksIHdpdGhpbiBnaXZlbiB0aW1lZnJhbWUgKGxldCdzIHNheSAxMCBzZWMpLiBJZiBhbnN3ZXJlZCBjb3JyZWN0bHksIHVzZXIgbWFrZXMgZGFtYWdlIHRvIG9wcG9uZW50ICgtMSBwb2ludCkuXG5JZiB0aGUgcXVlc3Rpb24gaXMgYW5zd2VyZWQgbm90IGNvcnJlY3RseSwgdGhlIG9wcG9uZW50IG1ha2VzIHRoZSBkYW1hZ2UgdG8gdGhlIHVzZXIgKC0xKS5cblRoZSBnYW1lIGlzIGZpbmlzaGVkIHdoZW4gdXNlciBvciB0aGUgb3Bwb25lbnQgaGl0cyAwIGxpZmUgcG9pbnRzLlxuXG4oZG9lcyBpdCBtZWV0IHRoZSByZXF1aXJlbWVudCBmb3IgMiBwbGF5ZXJzPyB0aGUgb3Bwb25lbnQgY2FuIHN0aWxsIGtpbGwgeW91KVxuNilzb21lb25lIHdpbnMhIHRoZSB3aW5uZXIgYW5kIHNjb3JlIGlzIGRpc3BsYXllZFxuNylJZiBuZWNlc3NhcnkgLSB1cGRhdGUgdGhlIGhpZ2hzY29yZVxuOCl1c2VyIGFza2VkIGlmIHdhbnRzIHRvIHBsYXkgYWdhaW5cblxubmVlZCB0byBjcmVhdGUgdGhlIGZvbGxvd2luZyBnbG9iYWwgdmFyaWFibGVzOlxuY2hvaWNlIG9mIGNoYXJhY3RlcnMgLSBhcnJheVxuc3RvcmUgdGhlIG5hbWUgb2YgdGhlIHBsYXllciAtIGxldCBwbGF5ZXJOYW1lXG5zY29yZVxuaGlnaHNjb3JlXG5zdG9yZSBxdWVzc3Rpb25zIGFuZCBhbnN3ZXJzIC0gb2JqZWN0IG9yIG11bHRpZGltZW5zaW9uYWwgYXJyYXk/XG5zdG9yZSBzb21lIGh0bWwgZWxlbWVudHMgZm9yIGxhdGVyXG5cbkZVTkNUSU9OU1xuMSl3aGVuIHVzZXIgY2xpY2tzIG9uIGluc3RydWN0aW9ucyAtIGhpZGUgdGhlIG1haW4gc2NyZWVuIGFuZCBkaXNwbGF5IGluc3RydWN0aW9ucy4gd2hlbiBjbGlja3Mgb24gYmFjayBpbiBpbnN0cnVjdGlvbnMsIGl0IGJyaW5ncyB0aGUgdXNlciBiYWNrIHRvIHRoZSBpbml0aWFsIHNjcmVlblxuXG4yKSB3aGVuIGNsaWNraW5nIG9uIHBsYXkgLSBoaWRlIHRoZSBpbml0aWFsIHNjcmVlbiwgZGlzcGxheSB0aGUgc2NyZWVuIHdpdGggdGhlIGNoYXJhY3RlciBjaG9pY2UgZmllbGQgYW5kIGlucHV0IHRoZSBuYW1lLiBpZiBuYW1lIGFuZC9vciBjaGFyYWN0ZXIgaXMgbm90IGlucHV0LCBhbGVydCB1c2VyIHRoYXQgdGhpcyBtdXN0IGJlIGNvbXBsZXRlZC5cblxuMykgY29tbWVuY2UgdGhlIGJhdHRsZSB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCAtIGJyaW5ncyB0aGUgdXNlciB0byB0aGUgYmF0dGxlIHNjcmVlbi4gZGlzcGxheSB0aGUgdXNlcidzIGNoYXJhY3RlciBvbiB0aGUgbGVmdCBhbmQgdGhlIG9wcG9uZW50IChhdXRvbWF0aWFjYWxseSBjaG9zZW4pIG9uIHRoZSByaWdodC5cblxufHxcbnx8XG5cXCAgL1xuXFwvXG5mdW5jdGlvbiB0byBwdWxsIHRoZSBxdWVzdGlvbiAoZm9ybT8pLiBzZXRJbnRlcnZhbCB0byBtZWFzdXJlIHRoZSB0aW1lIGZvciBhbnN3ZXIuIGlmIHRoZSBzdHJpbmcgaW5wdXQgYnkgdGhlIHVzZXIgbWF0Y2hlcyB0aGUgY29ycmVjdCBhbnN3ZXIsIHN1YnN0cmFjdCAxIGZyb20gb3Bwb25lbnQncyBsaWZlIHBvaW50cy4gZWxzZSAtIHN1YnN0cmFjdCAxIGZyb20gcGxheWVyJ3MgbGlmZSBwb2ludHMuXG5SZXBlYXQgdGhpcyB1bnRpbCB1c2VyIG9yIG9wcG9uZW50IHJ1biBvdXQgb2YgbGlmZSBwb2ludHMuXG5cblxuNCkgRnVuY3Rpb24gdG8gc3RvcCB0aGUgZ2FtZSB3aGVuIHNvbWVvbmUgcmVhY2hlcyAwIHBvaW50cyBvZiBsaWZlLiBQdWxsIHRoZSBuYW1lL3BpYyBvZiB0aGUgd2lubmVyIG9uIHRoZSBwYWdlLiAoYW5vdGhlciBkaXY/KVxuXG41KSBJZiBuZWNlc3NhcnkgLSB1cGRhdGUgdGhlIGhpZ2hzY29yZVxuXG42KUFzayB1c2VyIGlmIHdhbnRzIHRvIHBsYXkgYWdhaW4uIElmIGNvbmZpcm1zLCBzdGFydCB0aGUgZ2FtZSBhZ2Fpbi5cblxuXG5XaGF0IEkgc3RpbGwgbmVlZCB0byBkbyAtIHRoaW5rIGFib3V0IGhvdyB0aGUgc2NvcmUgaXMgY2FsY3VsYXRlZC5cbiovXG5cbmxldCBwbGF5ZXJOYW1lO1xubGV0IHBsYXllckNob3NlbjtcbmxldCB2aWxsaWFuQ2hvc2VuO1xubGV0IHBsYXllckxpZmUgPSAxMDtcbmxldCBwbGF5ZXJIaWdoc2NvcmU7XG5sZXQgdmlsbGlhbkxpZmUgPSAxMDtcbmxldCBhbnN3ZXI7XG5jb25zdCBjaGFyYWN0ZXJzID0ge1xuICBvbmU6IHtcbiAgICBuYW1lOiAnTm8xJyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL2dpbmdlcmtpdHRlbi5qcGcnXG4gIH0sXG4gIHR3bzoge1xuICAgIG5hbWU6ICdObzInLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvZ2luZ2Vya2l0dGVuLmpwZydcbiAgfSxcbiAgdGhyZWU6IHtcbiAgICBuYW1lOiAnTm8zJyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL2dpbmdlcmtpdHRlbi5qcGcnXG4gIH1cbn07XG5jb25zdCB2aWxsaWFucyA9IHtcbiAgb25lOiB7XG4gICAgbmFtZTogJ1ZpbGxpYW4gTm8xJyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL3ZpbGxpYW4uanBnJ1xuICB9LFxuICB0d286IHtcbiAgICBuYW1lOiAnVmlsbGlhbiBObzInLFxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvdmlsbGlhbi5qcGcnXG4gIH0sXG4gIHRocmVlOiB7XG4gICAgbmFtZTogJ1ZpbGxpYW4gTm8zJyxcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvaW1hZ2VzL3ZpbGxpYW4uanBnJ1xuICB9XG59O1xuY29uc3QgcXVlc3Rpb25zID0gW1xuICB7XG4gICAgcXVlc3Rpb246ICdXaGF0IGlzIDMgKyAyPycsXG4gICAgYW5zd2VyOiAnNSdcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgY2FwaXRhbCBjaXR5IG9mIHRoZSBVSz8nLFxuICAgIGFuc3dlcjogJ0xvbmRvbidcbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOiAnQXJlIGRvcGxoaW5zIG1hbW1hbHM/JyxcbiAgICBhbnN3ZXI6ICdZZXMnXG4gIH1cbl07XG5cbiQoKCkgPT4ge1xuICBmdW5jdGlvbiBoaWRlV2luZG93MSgpe1xuICAgICQoJy53ZWxjb21lJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5pbnN0cnVjdGlvbnMnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gIH1cbiAgZnVuY3Rpb24gaGlkZVdpbmRvdzIoKXtcbiAgICAkKCcuaW5zdHJ1Y3Rpb25zJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy53ZWxjb21lJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9XG4gIGZ1bmN0aW9uIGdvVG9QbGF5U2NyZWVuKCl7XG4gICAgJCgnLndlbGNvbWUnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnLmNoYXJhY3RlcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfVxuICBmdW5jdGlvbiB0b1RoZUdhbWUoKXtcbiAgICAkKCcuY2hhcmFjdGVyJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5jaG9zZW4tY2hhcmFjdGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFRoZU5hbWUoKXtcbiAgICBwbGF5ZXJOYW1lID0gJCh0aGlzKS52YWwoKTtcbiAgICBpZiAocGxheWVyTmFtZS5sZW5ndGggPT09IDApe1xuICAgICAgYWxlcnQoJ3Rlc3QnKTtcbiAgICB9XG4gICAgJCgnI25hbWUnKS50ZXh0KGBIZWxsbyAke3BsYXllck5hbWV9IWApO1xuICAgICQoJy5wbGF5ZXIxLW5hbWUnKS50ZXh0KHBsYXllck5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0Q2hhcmFjdGVyKCl7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgY29uc3QgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgaWYoaWQpe1xuICAgICAgJCgnI3N0YXJ0JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfVxuICAgIHBsYXllckNob3NlbiA9IGNoYXJhY3RlcnNbaWRdO1xuICAgICQoJy5jaG9zZW4tY2hhcmFjdGVyIGltZywgLnBsYXllcjEnKS5hdHRyKCdzcmMnLCBwbGF5ZXJDaG9zZW4uaW1hZ2UpO1xuICAgIHZpbGxpYW5DaG9zZW4gPSB2aWxsaWFuc1tpZF07XG4gICAgJCgnLnZpbGxpYW4nKS5hdHRyKCdzcmMnLCB2aWxsaWFuQ2hvc2VuLmltYWdlKTtcbiAgICAkKCcudmlsbGlhbi1uYW1lJykudGV4dCh2aWxsaWFuQ2hvc2VuLm5hbWUpO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0VGhlR2FtZSgpe1xuICAgICQoJy5jaG9zZW4tY2hhcmFjdGVyJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICQoJy5nYW1lLXdpbmRvdycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICBkaXNwbGF5U2NvcmUoKTtcbiAgICBzaG93UXVlc3Rpb24oKTtcbiAgfVxuICBmdW5jdGlvbiBkaXNwbGF5U2NvcmUoKXtcbiAgICAkKCcjcGxheWVyMS1zY29yZScpLmh0bWwocGxheWVyTGlmZSk7XG4gICAgJCgnI3ZpbGxpYW4tc2NvcmUnKS5odG1sKHZpbGxpYW5MaWZlKTtcbiAgfVxuICBsZXQgY3VycmVudFF1ZXN0aW9uID0gMFxuICBmdW5jdGlvbiBzaG93UXVlc3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbik7XG4gICAgJCgnI3F1ZXN0aW9uLXBsYWNlJykudGV4dChxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbik7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0QW5zd2VyKCl7XG4gICAgYW5zd2VyID0gJCh0aGlzKS52YWwoKTtcbiAgICBjb25zb2xlLmxvZyhhbnN3ZXIpO1xuICAgIGlmIChhbnN3ZXIgPT09IHF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmFuc3dlcil7XG4gICAgICBjb25zb2xlLmxvZygnaGFoYSEnKTtcbiAgICAgIHZpbGxpYW5MaWZlIC09IDE7XG4gICAgICBwbGF5ZXJMaWZlICs9IDE7XG4gICAgICBjdXJyZW50UXVlc3Rpb24gKz0gMTtcbiAgICAgIGFuc3dlciA9ICQodGhpcykudmFsKCcnKTtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRRdWVzdGlvbik7XG4gICAgICBzaG93UXVlc3Rpb24oKTtcbiAgICAgIGRpc3BsYXlTY29yZSgpO1xuICAgIH1cbiAgICBlbHNlKCdmYWlsJyk7XG4gICAgcGxheWVyTGlmZSAtPSAxO1xuICAgIHNob3dRdWVzdGlvbigpO1xuICAgIGRpc3BsYXlTY29yZSgpO1xuICB9XG5cbiAgJCgnI2luc3RydWN0aW9ucycpLm9uKCdjbGljaycsIGhpZGVXaW5kb3cxKTtcbiAgJCgnI2JhY2snKS5vbignY2xpY2snLCBoaWRlV2luZG93Mik7XG4gICQoJyNwbGF5Jykub24oJ2NsaWNrJywgZ29Ub1BsYXlTY3JlZW4pO1xuICAkKCcjc3RhcnQnKS5vbignY2xpY2snLCB0b1RoZUdhbWUpO1xuICAkKCcubmFtZScpLm9uKCdrZXl1cCcsIGdldFRoZU5hbWUpO1xuICAkKCcucGVyc29uJykub24oJ2NsaWNrJywgc2VsZWN0Q2hhcmFjdGVyKTtcbiAgJCgnI2tpY2stb2ZmJykub24oJ2NsaWNrJywgc3RhcnRUaGVHYW1lKTtcbiAgJCgnI2Fuc3dlcicpLm9uKCdrZXl1cCcsIGdldEFuc3dlcik7XG59KTtcbiJdfQ==
