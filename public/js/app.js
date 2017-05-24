"use strict";$(function(){function a(){W.removeClass("hidden").addClass("animated fadeIn"),P.addClass("hidden")}function e(){W.addClass("hidden").removeClass("animated fadeIn"),P.removeClass("hidden").addClass("animated fadeIn")}function t(){for(var a=0;a<N.length;a++){var e='\n      <div class="character" data-id='+a+'>\n      <img src="'+N[a].image+'">\n      <p class="underlined">'+N[a].name+"</p>\n      <p>Attack: "+N[a].attack+"</p>\n      <p>WarCry: "+N[a].warCry+"</p>\n      <p>Defend: "+N[a].defend+"</p>\n      <p>Accuracy: "+N[a].accuracy+"</p>\n      </div>\n      ";G.append(e)}}function c(){P.addClass("hidden"),B.removeClass("hidden").addClass("animated fadeIn"),t()}function n(){B.addClass("hidden"),L.removeClass("hidden").addClass("animated fadeIn")}function i(){L.addClass("hidden"),O.removeClass("hidden").addClass("animated fadeIn"),ca.text(z),setInterval(function(){o(),m(),u(),l()},500)}function r(){z=Y>z?Y:z,ca.text(z)}function s(){I=$(this).val(),0!==I.length&&Q.attr("disabled",!1).addClass("animated infinite pulse"),ua.text(I)}function d(){$(this).addClass("active").siblings().removeClass("active");var a=$(this).attr("data-id");a&&K.attr("disabled",!1).addClass("animated infinite pulse"),T=N[a],D=R[a],$(".chosen-character img, .player-img").attr("src",T.image),ha.attr("src",D.image),ya.text(D.name),Aa.text(D.attack)}function o(){ma.html(S),ka.html(E)}function u(){ga.text("Round "+X)}function l(){fa.text(T.currentAttack)}function m(){ta.html(Y)}function f(){Ca.text(""+M)}function h(){console.log(T.currentAccuracy),!0===H&&(Math.random()<T.currentAccuracy?(E-=T.currentAttack,Y+=T.currentAttack,M="You have hit him!",ha.addClass("animated shake"),na.play()):(ra.play(),M="Whooops! A miss..."),T.currentAttack=T.attack,f(),la.removeClass("animated shake"),H=!1,g(),C(),r(),setTimeout(function(){y()},3e3))}function y(){console.log(D.currentAccuracy),!1===H&&(Math.random()<D.currentAccuracy?(S-=D.attack,M="He hit you!",ia.play(),la.addClass("animated shake")):(sa.play(),M="You are safe!"),ha.removeClass("animated shake"),f(),C(),H=!0,setTimeout(function(){g()},1e3))}function k(){Ca.text("DEFEND!!!"),H=!1,g(),D.attack-=T.defend,setTimeout(function(){y(),D.attack+=T.defend},2e3)}function A(){Ca.text("AAAAAAAAAAAAAAAAAAAaaaaaaa!!!!"),H=!1,g(),T.currentAttack+=T.warCry,setTimeout(function(){y()},2e3)}function C(){S<=0&&(da.play(),v()),E<=0&&(E=0,pa.text("You won this round!!! Ta-da!!").css({color:"#C5D200","font-size":"28px"}),oa.play(),H=!0,setTimeout(function(){p()},2e3))}function g(){!1===H&&la.removeClass("img-active"),!0===H&&la.addClass("img-active")}function p(){T.currentAccuracy+=.01,D.currentAccuracy+=.05,X+=1,E=20,S=20+X,M="",pa.text(""),f(),g()}function v(){localStorage.setItem("highScore",z),O.addClass("hidden"),U.removeClass("hidden").addClass("animated fadeIn"),x()}function x(){M="",f(),S=20,E=20,X=1,Y=0,T.currentAttack=T.attack,T.currentAccuracy=T.accuracy,D.currentAccuracy=D.accuracy,H=!0,G.empty(),la.removeClass("animated shake"),K.removeClass("animated infinite pulse")}function b(){U.addClass("hidden"),i()}function w(){U.addClass("hidden"),P.removeClass("hidden").addClass("animated fadeIn")}var I=void 0,T=void 0,D=void 0,S=20,E=20,H=!0,M=void 0,X=1,Y=0,z=localStorage.getItem("highScore")||0,N=[{name:"Nick the Cat",image:"public/assets/images/player1.gif",attack:4,currentAttack:4,warCry:3,defend:4,accuracy:.5,currentAccuracy:.5},{name:"Ellen Ripley",image:"public/assets/images/player2.gif",attack:5,currentAttack:5,warCry:2,defend:5,accuracy:.5,currentAccuracy:.5},{name:"Catzilla",image:"public/assets/images/player3.gif",attack:4,currentAttack:4,warCry:5,defend:2,accuracy:.5,currentAccuracy:.5}],R=[{name:"Henry the Hoover",image:"public/assets/images/villian1.gif",attack:5,accuracy:.3,currentAccuracy:.3},{name:"Xenomorph XX121",image:"public/assets/images/villian2.gif",attack:5,accuracy:.3,currentAccuracy:.3},{name:"Pink Medusa",image:"public/assets/images/villian3.gif",attack:5,accuracy:.3,currentAccuracy:.3}],W=$(".instructions"),F=$("#instructions"),P=$(".welcome"),j=$("#back"),q=$("#play"),B=$(".character-screen"),G=$(".choices"),J=$(".name"),K=$("#start"),L=$(".chosen-character"),O=$(".game-window"),Q=$("#kick-off"),U=$(".game-over"),V=$("#attack"),Z=$("#warcry"),_=$("#defend"),aa=$("#new-game"),ea=$("#back-to-menu"),ta=$("#player-score"),ca=$(".high-score"),na=$("audio")[0],ia=$("audio")[1],ra=$("audio")[2],sa=$("audio")[3],da=$("audio")[4],oa=$("audio")[5],ua=$(".player-name"),la=$(".player-img"),ma=$("#player-life"),fa=$("#player-current-attack"),ha=$(".villian-img"),ya=$(".villian-name"),ka=$("#villian-life"),Aa=$("#villian-attack"),Ca=$("#turn-result"),ga=$("#round-no"),pa=$("#round-message");F.on("click",a),j.on("click",e),q.on("click",c),K.on("click",n),J.on("keyup",s),G.on("click",".character",d),Q.on("click",i),V.on("click",h),Z.on("click",A),_.on("click",k),aa.on("click",b),ea.on("click",w)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiJHdlbGNvbWUiLCIkaW5zdHJ1Y3Rpb25zIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNyZWF0ZUNob2ljZXMiLCJjb250ZW50IiwiJGNob2ljZXMiLCJhcHBlbmQiLCJnb1RvQ2hvaWNlU2NyZWVuIiwiY2hhcmFjdGVycyIsImxlbmd0aCIsImkiLCIkY2hhcmFjdGVyU2NyZWVuIiwiaW1hZ2UiLCJuYW1lIiwiYXR0YWNrIiwiJGNob3NlbkNoYXJhY3RlciIsIndhckNyeSIsImRlZmVuZCIsInN0YXJ0VGhlR2FtZSIsImFjY3VyYWN5IiwiJGhpZ2hTY29yZSIsInRleHQiLCJoaWdoU2NvcmUiLCJkaXNwbGF5U2NvcmUiLCJkaXNwbGF5Um91bmQiLCJkaXNwbGF5Q3VycmVudEF0dGFjayIsInVwZGF0ZUhpZ2hTY29yZSIsInNjb3JlIiwiZ2V0VGhlTmFtZSIsInBsYXllck5hbWUiLCIkZ2FtZVdpbmRvdyIsIiRraWNrT2ZmQnRuIiwiYXR0ciIsInNldEludGVydmFsIiwiJHBsYXllck5hbWUiLCIkc3RhcnRCdG4iLCJ2aWxsaWFuQ2hvc2VuIiwidGhpcyIsInZhbCIsIiR2aWxsaWFuSW1nIiwiJHZpbGxpYW5OYW1lIiwiJHZpbGxpYW5MaWZlIiwic2libGluZ3MiLCJpZCIsIiRyb3VuZE51bWJlciIsIiRwbGF5ZXJDdXJyZW50QXR0YWNrIiwicGxheWVyQ2hvc2VuIiwidmlsbGlhbnMiLCIkc2NvcmUiLCIkdmlsbGlhbkF0dGFjayIsInR1cm5SZXN1bHRUZXh0IiwiZGlzcGxheUhlYWx0aCIsIiRwbGF5ZXJMaWZlIiwiaHRtbCIsInBsYXllckxpZmUiLCJhdHRhY2tWaWxsaWFuIiwidHVybiIsInJhbmRvbSIsInJvdW5kVGV4dCIsImN1cnJlbnRBdHRhY2siLCIkc2xhcEF1ZGlvIiwiJHR1cm5SZXN1bHQiLCIkcGxheWVySW1nIiwiY3VycmVudEFjY3VyYWN5Iiwid2hvc2VUdXJuIiwiY2hlY2tGb3JXaW5uZXIiLCJzZXRUaW1lb3V0IiwiYXR0YWNrUGxheWVyIiwicGxheSIsIiRzd29vc2hBdWRpbyIsImNvbnNvbGUiLCIkcHVuY2hBdWRpbyIsIiRzd29vc2hBdWRpbzIiLCJNYXRoIiwiJGdhbWVPdmVyQXVkaW8iLCJnYW1lT3ZlciIsInZpbGxpYW5MaWZlIiwiJHJvdW5kTWVzc2FnZSIsIiRsZXZlbFVwQXVkaW8iLCJuZXh0Um91bmQiLCJjc3MiLCJjb2xvciIsImZvbnQtc2l6ZSIsInJvdW5kIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlc2V0RGF0YSIsImVtcHR5IiwiJGdhbWVPdmVyU2NyZWVuIiwiYmFja1RvTWVudSIsIiRpbnN0cnVjdGlvbnNCdG4iLCJoaWRlV2luZG93MSIsIiRiYWNrQnRuIiwiJHBsYXlCdG4iLCIkbmFtZSIsInNlbGVjdENoYXJhY3RlciIsIiR3YXJDcnkiLCJvbiIsIiRkZWZlbmQiLCIkbmV3R2FtZSIsImdldEl0ZW0iLCIkYXR0YWNrIiwiJGJhY2tUb01lbnUiLCJoaWRlV2luZG93MiIsInRvVGhlR2FtZSIsIm5ld0dhbWUiXSwibWFwcGluZ3MiOiJZQUFBQSxHQUFFLFdBZ0hFQyxRQUFBQSxLQUNEQyxFQUFBQyxZQUFBLFVBQUFDLFNBQUEsbUJBQ0RILEVBQVNJLFNBQUFBLFVBRUwsUUFBTUMsS0FVTkMsRUFBU0MsU0FBT0YsVUFBaEJILFlBQUEsbUJBQ0RGLEVBQUFFLFlBQUEsVUFBQUMsU0FBQSxtQkFFSCxRQUFTSyxLQUNQUixJQUFBQSxHQUFBQSxHQUFTRyxFQUFBQSxFQUFTTSxFQUFsQkMsT0FBQUMsSUFBQSxDQUNBQyxHQUFBQSxHQUFBQSwwQ0FDQVIsRUFEQVEsc0JBRURILEVBQUFFLEdBQUFFLE1BRkNELG1DQUdrQkgsRUFBQUUsR0FBQUcsS0FIbEJGLDBCQUlBQSxFQUEwQkQsR0FBQUksT0FKMUJILDBCQUtBSSxFQUFpQmQsR0FBWWUsT0FMN0JMLDBCQU1ESCxFQUFBRSxHQUFBTyxPQU5DTiw0QkFPT08sRUFBY1IsR0FBQVMsU0FQckJSLDRCQVVBUyxHQUFX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RCxHQUFnQnRELEVBQUEsU0FBQSxHQUNoQitDLEdBQUFBLEVBQUFBLFNBQXlCLEdBQ3pCTixHQUFnQnpDLEVBQUEsU0FBRixHQUNkMEMsR0FBaUIxQyxFQUFBLFNBQUEsR0FDakIyQyxHQUFlM0MsRUFBRSxnQkFDakJtRCxHQUFBQSxFQUFpQm5ELGVBQ2pCK0QsR0FBZ0IvRCxFQUFBLGdCQUNoQjhDLEdBQWlCOUMsRUFBQSwwQkFDakIrRSxHQUFnQi9FLEVBQUUsZ0JBTGxCMEMsR0FBZTFDLEVBQUUsaUJBT3ZCMkMsR0FBQTNDLEVBQXNCLGlCQUNwQkUsR0FBY0MsRUFBQUEsbUJBQ2RGLEdBQWtCRCxFQUFBLGdCQUNuQjhDLEdBQUE5QyxFQUFBLGFBQ0QrRSxHQUFBL0UsRUFBc0IsaUJBa050QjRGLEdBQWlCTyxHQUFHLFFBQVNOLEdBQzdCQyxFQUFTSyxHQUFHLFFBQVNNLEdBQ3JCVixFQUFTSSxHQUFHLFFBQVMxRixHQUNyQjRCLEVBQVU4RCxHQUFHLFFBQVNPLEdBQ3RCVixFQUFNRyxHQUFHLFFBQVNyRSxHQUNsQnZCLEVBQVM0RixHQUFHLFFBQVMsYUFBY0YsR0FDbkNoRSxFQUFZa0UsR0FBRyxRQUFTL0UsR0FDeEJtRixFQUFRSixHQUFHLFFBQVMxQyxHQUNwQnlDLEVBQVFDLEdBQUcsUUFBU2pGLEdBQ3BCa0YsRUFBUUQsR0FBRyxRQUFTaEYsR0FDcEJrRixHQUFTRixHQUFHLFFBQVNRLEdBQ3JCSCxHQUFZTCxHQUFHLFFBQVNSIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoKCkgPT4ge1xuICBsZXQgcGxheWVyTmFtZTtcbiAgbGV0IHBsYXllckNob3NlbjtcbiAgbGV0IHZpbGxpYW5DaG9zZW47XG4gIGxldCBwbGF5ZXJMaWZlID0gMjA7XG4gIGxldCB2aWxsaWFuTGlmZSA9IDIwO1xuICBsZXQgdHVybiA9IHRydWU7XG4gIGxldCByb3VuZFRleHQ7XG4gIGxldCByb3VuZCA9IDE7XG4gIGxldCBzY29yZSA9IDA7XG4gIGxldCBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaFNjb3JlJykgfHwgMDtcblxuICBjb25zdCBjaGFyYWN0ZXJzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdOaWNrIHRoZSBDYXQnLFxuICAgICAgaW1hZ2U6ICdwdWJsaWMvYXNzZXRzL2ltYWdlcy9wbGF5ZXIxLmdpZicsXG4gICAgICBhdHRhY2s6IDQsXG4gICAgICBjdXJyZW50QXR0YWNrOiA0LFxuICAgICAgd2FyQ3J5OiAzLFxuICAgICAgZGVmZW5kOiA0LFxuICAgICAgYWNjdXJhY3k6IDAuNSxcbiAgICAgIGN1cnJlbnRBY2N1cmFjeTogMC41XG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRWxsZW4gUmlwbGV5JyxcbiAgICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvcGxheWVyMi5naWYnLFxuICAgICAgYXR0YWNrOiA1LFxuICAgICAgY3VycmVudEF0dGFjazogNSxcbiAgICAgIHdhckNyeTogMixcbiAgICAgIGRlZmVuZDogNSxcbiAgICAgIGFjY3VyYWN5OiAwLjUsXG4gICAgICBjdXJyZW50QWNjdXJhY3k6IDAuNVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NhdHppbGxhJyxcbiAgICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvcGxheWVyMy5naWYnLFxuICAgICAgYXR0YWNrOiA0LFxuICAgICAgY3VycmVudEF0dGFjazogNCxcbiAgICAgIHdhckNyeTogNSxcbiAgICAgIGRlZmVuZDogMixcbiAgICAgIGFjY3VyYWN5OiAwLjUsXG4gICAgICBjdXJyZW50QWNjdXJhY3k6IDAuNVxuICAgIH1cbiAgXTtcbiAgY29uc3QgdmlsbGlhbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0hlbnJ5IHRoZSBIb292ZXInLFxuICAgICAgaW1hZ2U6ICdwdWJsaWMvYXNzZXRzL2ltYWdlcy92aWxsaWFuMS5naWYnLFxuICAgICAgYXR0YWNrOiA1LFxuICAgICAgYWNjdXJhY3k6IDAuMyxcbiAgICAgIGN1cnJlbnRBY2N1cmFjeTogMC4zXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnWGVub21vcnBoIFhYMTIxJyxcbiAgICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvdmlsbGlhbjIuZ2lmJyxcbiAgICAgIGF0dGFjazogNSxcbiAgICAgIGFjY3VyYWN5OiAwLjMsXG4gICAgICBjdXJyZW50QWNjdXJhY3k6IDAuM1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1BpbmsgTWVkdXNhJyxcbiAgICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9pbWFnZXMvdmlsbGlhbjMuZ2lmJyxcbiAgICAgIGF0dGFjazogNSxcbiAgICAgIGFjY3VyYWN5OiAwLjMsXG4gICAgICBjdXJyZW50QWNjdXJhY3k6IDAuM1xuICAgIH1cbiAgXTtcblxuICBjb25zdCAkaW5zdHJ1Y3Rpb25zID0gJCgnLmluc3RydWN0aW9ucycpO1xuICBjb25zdCAkaW5zdHJ1Y3Rpb25zQnRuID0gJCgnI2luc3RydWN0aW9ucycpO1xuICBjb25zdCAkd2VsY29tZSA9ICQoJy53ZWxjb21lJyk7XG4gIGNvbnN0ICRiYWNrQnRuID0gJCgnI2JhY2snKTtcbiAgY29uc3QgJHBsYXlCdG4gPSAkKCcjcGxheScpO1xuICBjb25zdCAkY2hhcmFjdGVyU2NyZWVuID0gJCgnLmNoYXJhY3Rlci1zY3JlZW4nKTtcbiAgY29uc3QgJGNob2ljZXMgPSAkKCcuY2hvaWNlcycpO1xuICBjb25zdCAkbmFtZSA9ICQoJy5uYW1lJyk7XG4gIGNvbnN0ICRzdGFydEJ0biA9ICQoJyNzdGFydCcpO1xuICBjb25zdCAkY2hvc2VuQ2hhcmFjdGVyID0gJCgnLmNob3Nlbi1jaGFyYWN0ZXInKTtcbiAgY29uc3QgJGdhbWVXaW5kb3cgPSAkKCcuZ2FtZS13aW5kb3cnKTtcbiAgY29uc3QgJGtpY2tPZmZCdG4gPSAkKCcja2ljay1vZmYnKTtcbiAgY29uc3QgJGdhbWVPdmVyU2NyZWVuID0gJCgnLmdhbWUtb3ZlcicpO1xuICBjb25zdCAkYXR0YWNrID0gJCgnI2F0dGFjaycpO1xuICBjb25zdCAkd2FyQ3J5ID0gJCgnI3dhcmNyeScpO1xuICBjb25zdCAkZGVmZW5kID0gJCgnI2RlZmVuZCcpO1xuICBjb25zdCAkbmV3R2FtZSA9ICQoJyNuZXctZ2FtZScpO1xuICBjb25zdCAkYmFja1RvTWVudSA9ICQoJyNiYWNrLXRvLW1lbnUnKTtcbiAgY29uc3QgJHNjb3JlID0gJCgnI3BsYXllci1zY29yZScpO1xuICBjb25zdCAkaGlnaFNjb3JlID0gJCgnLmhpZ2gtc2NvcmUnKTtcbiAgY29uc3QgJHNsYXBBdWRpbyA9ICQoJ2F1ZGlvJylbMF07XG4gIGNvbnN0ICRwdW5jaEF1ZGlvID0gJCgnYXVkaW8nKVsxXTtcbiAgY29uc3QgJHN3b29zaEF1ZGlvID0gJCgnYXVkaW8nKVsyXTtcbiAgY29uc3QgJHN3b29zaEF1ZGlvMiA9ICQoJ2F1ZGlvJylbM107XG4gIGNvbnN0ICRnYW1lT3ZlckF1ZGlvID0gJCgnYXVkaW8nKVs0XTtcbiAgY29uc3QgJGxldmVsVXBBdWRpbyA9ICQoJ2F1ZGlvJylbNV07XG4gIGNvbnN0ICRwbGF5ZXJOYW1lID0gJCgnLnBsYXllci1uYW1lJyk7XG4gIGNvbnN0ICRwbGF5ZXJJbWcgPSAkKCcucGxheWVyLWltZycpO1xuICBjb25zdCAkcGxheWVyTGlmZSA9ICQoJyNwbGF5ZXItbGlmZScpO1xuICBjb25zdCAkcGxheWVyQ3VycmVudEF0dGFjayA9ICQoJyNwbGF5ZXItY3VycmVudC1hdHRhY2snKTtcbiAgY29uc3QgJHZpbGxpYW5JbWcgPSAkKCcudmlsbGlhbi1pbWcnKTtcbiAgY29uc3QgJHZpbGxpYW5OYW1lID0gJCgnLnZpbGxpYW4tbmFtZScpO1xuICBjb25zdCAkdmlsbGlhbkxpZmUgPSAkKCcjdmlsbGlhbi1saWZlJyk7XG4gIGNvbnN0ICR2aWxsaWFuQXR0YWNrID0gJCgnI3ZpbGxpYW4tYXR0YWNrJyk7XG4gIGNvbnN0ICR0dXJuUmVzdWx0ID0gJCgnI3R1cm4tcmVzdWx0Jyk7XG4gIGNvbnN0ICRyb3VuZE51bWJlciA9ICQoJyNyb3VuZC1ubycpO1xuICBjb25zdCAkcm91bmRNZXNzYWdlID0gJCgnI3JvdW5kLW1lc3NhZ2UnKTtcblxuICBmdW5jdGlvbiBoaWRlV2luZG93MSgpe1xuICAgICRpbnN0cnVjdGlvbnMucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlSW4nKTtcbiAgICAkd2VsY29tZS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gIH1cbiAgZnVuY3Rpb24gaGlkZVdpbmRvdzIoKXtcbiAgICAkaW5zdHJ1Y3Rpb25zLmFkZENsYXNzKCdoaWRkZW4nKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgZmFkZUluJyk7XG4gICAgJHdlbGNvbWUucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlSW4nKTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVDaG9pY2VzKCl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNoYXJhY3RlcnMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgY29udGVudCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjaGFyYWN0ZXJcIiBkYXRhLWlkPSR7aX0+XG4gICAgICA8aW1nIHNyYz1cIiR7Y2hhcmFjdGVyc1tpXS5pbWFnZX1cIj5cbiAgICAgIDxwIGNsYXNzPVwidW5kZXJsaW5lZFwiPiR7Y2hhcmFjdGVyc1tpXS5uYW1lfTwvcD5cbiAgICAgIDxwPkF0dGFjazogJHtjaGFyYWN0ZXJzW2ldLmF0dGFja308L3A+XG4gICAgICA8cD5XYXJDcnk6ICR7Y2hhcmFjdGVyc1tpXS53YXJDcnl9PC9wPlxuICAgICAgPHA+RGVmZW5kOiAke2NoYXJhY3RlcnNbaV0uZGVmZW5kfTwvcD5cbiAgICAgIDxwPkFjY3VyYWN5OiAke2NoYXJhY3RlcnNbaV0uYWNjdXJhY3l9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgICAgJGNob2ljZXMuYXBwZW5kKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnb1RvQ2hvaWNlU2NyZWVuKCl7XG4gICAgJHdlbGNvbWUuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRjaGFyYWN0ZXJTY3JlZW4ucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlSW4nKTtcbiAgICBjcmVhdGVDaG9pY2VzKCk7XG4gIH1cbiAgZnVuY3Rpb24gdG9UaGVHYW1lKCl7XG4gICAgJGNoYXJhY3RlclNjcmVlbi5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJGNob3NlbkNoYXJhY3Rlci5yZW1vdmVDbGFzcygnaGlkZGVuJykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJbicpO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0VGhlR2FtZSgpe1xuICAgICRjaG9zZW5DaGFyYWN0ZXIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRnYW1lV2luZG93LnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluJyk7XG4gICAgJGhpZ2hTY29yZS50ZXh0KGhpZ2hTY29yZSk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgZGlzcGxheUhlYWx0aCgpO1xuICAgICAgZGlzcGxheVNjb3JlKCk7XG4gICAgICBkaXNwbGF5Um91bmQoKTtcbiAgICAgIGRpc3BsYXlDdXJyZW50QXR0YWNrKCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVIaWdoU2NvcmUoKXtcbiAgICBoaWdoU2NvcmUgPSBzY29yZSA+IGhpZ2hTY29yZSA/IHNjb3JlIDogaGlnaFNjb3JlO1xuICAgICRoaWdoU2NvcmUudGV4dChoaWdoU2NvcmUpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFRoZU5hbWUoKXtcbiAgICBwbGF5ZXJOYW1lID0gJCh0aGlzKS52YWwoKTtcbiAgICBpZiAocGxheWVyTmFtZS5sZW5ndGggIT09IDApe1xuICAgICAgJGtpY2tPZmZCdG4uYXR0cignZGlzYWJsZWQnLCBmYWxzZSkuYWRkQ2xhc3MoJ2FuaW1hdGVkIGluZmluaXRlIHB1bHNlJyk7XG4gICAgfVxuICAgICRwbGF5ZXJOYW1lLnRleHQocGxheWVyTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RDaGFyYWN0ZXIoKXtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBjb25zdCBpZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xuICAgIGlmKGlkKXtcbiAgICAgICRzdGFydEJ0bi5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKS5hZGRDbGFzcygnYW5pbWF0ZWQgaW5maW5pdGUgcHVsc2UnKTtcbiAgICB9XG4gICAgcGxheWVyQ2hvc2VuID0gY2hhcmFjdGVyc1tpZF07XG4gICAgdmlsbGlhbkNob3NlbiA9IHZpbGxpYW5zW2lkXTtcbiAgICAkKCcuY2hvc2VuLWNoYXJhY3RlciBpbWcsIC5wbGF5ZXItaW1nJykuYXR0cignc3JjJywgcGxheWVyQ2hvc2VuLmltYWdlKTtcbiAgICAkdmlsbGlhbkltZy5hdHRyKCdzcmMnLCB2aWxsaWFuQ2hvc2VuLmltYWdlKTtcbiAgICAkdmlsbGlhbk5hbWUudGV4dCh2aWxsaWFuQ2hvc2VuLm5hbWUpO1xuICAgICR2aWxsaWFuQXR0YWNrLnRleHQodmlsbGlhbkNob3Nlbi5hdHRhY2spO1xuICB9XG4gIGZ1bmN0aW9uIGRpc3BsYXlIZWFsdGgoKXtcbiAgICAkcGxheWVyTGlmZS5odG1sKHBsYXllckxpZmUpO1xuICAgICR2aWxsaWFuTGlmZS5odG1sKHZpbGxpYW5MaWZlKTtcbiAgfVxuICBmdW5jdGlvbiBkaXNwbGF5Um91bmQoKXtcbiAgICAkcm91bmROdW1iZXIudGV4dChgUm91bmQgJHtyb3VuZH1gKTtcbiAgfVxuICBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudEF0dGFjaygpe1xuICAgICRwbGF5ZXJDdXJyZW50QXR0YWNrLnRleHQocGxheWVyQ2hvc2VuLmN1cnJlbnRBdHRhY2spO1xuICB9XG4gIGZ1bmN0aW9uIGRpc3BsYXlTY29yZSgpe1xuICAgICRzY29yZS5odG1sKHNjb3JlKTtcbiAgfVxuICBmdW5jdGlvbiB0dXJuUmVzdWx0VGV4dCgpe1xuICAgICR0dXJuUmVzdWx0LnRleHQoYCR7cm91bmRUZXh0fWApO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNrVmlsbGlhbigpe1xuICAgIGNvbnNvbGUubG9nKHBsYXllckNob3Nlbi5jdXJyZW50QWNjdXJhY3kpO1xuICAgIGlmKHR1cm4gPT09IHRydWUpe1xuICAgICAgaWYoTWF0aC5yYW5kb20oKSA8IHBsYXllckNob3Nlbi5jdXJyZW50QWNjdXJhY3kpe1xuICAgICAgICB2aWxsaWFuTGlmZSAtPSBwbGF5ZXJDaG9zZW4uY3VycmVudEF0dGFjaztcbiAgICAgICAgc2NvcmUgKz0gcGxheWVyQ2hvc2VuLmN1cnJlbnRBdHRhY2s7XG4gICAgICAgIHJvdW5kVGV4dCA9ICdZb3UgaGF2ZSBoaXQgaGltISc7XG4gICAgICAgICR2aWxsaWFuSW1nLmFkZENsYXNzKCdhbmltYXRlZCBzaGFrZScpO1xuICAgICAgICAkc2xhcEF1ZGlvLnBsYXkoKTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgJHN3b29zaEF1ZGlvLnBsYXkoKTtcbiAgICAgICAgcm91bmRUZXh0ID0gJ1dob29vcHMhIEEgbWlzcy4uLic7XG4gICAgICB9XG4gICAgICBwbGF5ZXJDaG9zZW4uY3VycmVudEF0dGFjayA9IHBsYXllckNob3Nlbi5hdHRhY2s7XG4gICAgICB0dXJuUmVzdWx0VGV4dCgpO1xuICAgICAgJHBsYXllckltZy5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgc2hha2UnKTtcbiAgICAgIHR1cm4gPSBmYWxzZTtcbiAgICAgIHdob3NlVHVybigpO1xuICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAgIHVwZGF0ZUhpZ2hTY29yZSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGF0dGFja1BsYXllcigpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGF0dGFja1BsYXllcigpe1xuICAgIGNvbnNvbGUubG9nKHZpbGxpYW5DaG9zZW4uY3VycmVudEFjY3VyYWN5KTtcbiAgICBpZih0dXJuID09PSBmYWxzZSl7XG4gICAgICBpZihNYXRoLnJhbmRvbSgpIDwgdmlsbGlhbkNob3Nlbi5jdXJyZW50QWNjdXJhY3kpe1xuICAgICAgICBwbGF5ZXJMaWZlIC09IHZpbGxpYW5DaG9zZW4uYXR0YWNrO1xuICAgICAgICByb3VuZFRleHQgPSAnSGUgaGl0IHlvdSEnO1xuICAgICAgICAkcHVuY2hBdWRpby5wbGF5KCk7XG4gICAgICAgICRwbGF5ZXJJbWcuYWRkQ2xhc3MoJ2FuaW1hdGVkIHNoYWtlJyk7XG4gICAgICB9IGVsc2V7XG4gICAgICAgICRzd29vc2hBdWRpbzIucGxheSgpO1xuICAgICAgICByb3VuZFRleHQgPSAnWW91IGFyZSBzYWZlISc7XG4gICAgICB9XG4gICAgICAkdmlsbGlhbkltZy5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgc2hha2UnKTtcbiAgICAgIHR1cm5SZXN1bHRUZXh0KCk7XG4gICAgICBjaGVja0Zvcldpbm5lcigpO1xuICAgICAgdHVybiA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2hvc2VUdXJuKCk7XG4gICAgICB9LDEwMDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkZWZlbmQoKXtcbiAgICAkdHVyblJlc3VsdC50ZXh0KCdERUZFTkQhISEnKTtcbiAgICB0dXJuID0gZmFsc2U7XG4gICAgd2hvc2VUdXJuKCk7XG4gICAgdmlsbGlhbkNob3Nlbi5hdHRhY2sgLT0gcGxheWVyQ2hvc2VuLmRlZmVuZDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF0dGFja1BsYXllcigpO1xuICAgICAgdmlsbGlhbkNob3Nlbi5hdHRhY2sgKz0gcGxheWVyQ2hvc2VuLmRlZmVuZDtcbiAgICB9LCAyMDAwKTtcbiAgfVxuICBmdW5jdGlvbiB3YXJDcnkoKXtcbiAgICAkdHVyblJlc3VsdC50ZXh0KCdBQUFBQUFBQUFBQUFBQUFBQUFBYWFhYWFhYSEhISEnKTtcbiAgICB0dXJuID0gZmFsc2U7XG4gICAgd2hvc2VUdXJuKCk7XG4gICAgcGxheWVyQ2hvc2VuLmN1cnJlbnRBdHRhY2sgKz0gcGxheWVyQ2hvc2VuLndhckNyeTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF0dGFja1BsYXllcigpO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrRm9yV2lubmVyKCl7XG4gICAgaWYgKHBsYXllckxpZmUgPD0gMCl7XG4gICAgICAkZ2FtZU92ZXJBdWRpby5wbGF5KCk7XG4gICAgICBnYW1lT3ZlcigpO1xuICAgIH1cbiAgICBpZih2aWxsaWFuTGlmZSA8PSAwKXtcbiAgICAgIHZpbGxpYW5MaWZlID0gMDtcbiAgICAgICRyb3VuZE1lc3NhZ2UudGV4dCgnWW91IHdvbiB0aGlzIHJvdW5kISEhIFRhLWRhISEnKS5jc3Moeydjb2xvcic6ICcjQzVEMjAwJywgJ2ZvbnQtc2l6ZSc6ICcyOHB4J30pO1xuICAgICAgJGxldmVsVXBBdWRpby5wbGF5KCk7XG4gICAgICB0dXJuID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBuZXh0Um91bmQoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB3aG9zZVR1cm4oKXtcbiAgICBpZiAodHVybiA9PT0gZmFsc2Upe1xuICAgICAgJHBsYXllckltZy5yZW1vdmVDbGFzcygnaW1nLWFjdGl2ZScpO1xuICAgIH1cbiAgICBpZiAodHVybiA9PT0gdHJ1ZSl7XG4gICAgICAkcGxheWVySW1nLmFkZENsYXNzKCdpbWctYWN0aXZlJyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG5leHRSb3VuZCgpe1xuICAgIHBsYXllckNob3Nlbi5jdXJyZW50QWNjdXJhY3kgKz0gMC4wMTtcbiAgICB2aWxsaWFuQ2hvc2VuLmN1cnJlbnRBY2N1cmFjeSArPSAwLjA1O1xuICAgIHJvdW5kICs9IDE7XG4gICAgdmlsbGlhbkxpZmUgPSAyMDtcbiAgICBwbGF5ZXJMaWZlID0gMjAgICsgcm91bmQ7XG4gICAgcm91bmRUZXh0ID0gJyc7XG4gICAgJHJvdW5kTWVzc2FnZS50ZXh0KCcnKTtcbiAgICB0dXJuUmVzdWx0VGV4dCgpO1xuICAgIHdob3NlVHVybigpO1xuXG4gIH1cbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaFNjb3JlJywgaGlnaFNjb3JlKTtcbiAgICAkZ2FtZVdpbmRvdy5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJGdhbWVPdmVyU2NyZWVuLnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluJyk7XG4gICAgcmVzZXREYXRhKCk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXREYXRhKCl7XG4gICAgcm91bmRUZXh0ID0gJyc7XG4gICAgdHVyblJlc3VsdFRleHQoKTtcbiAgICBwbGF5ZXJMaWZlID0gMjA7XG4gICAgdmlsbGlhbkxpZmUgPSAyMDtcbiAgICByb3VuZCA9IDE7XG4gICAgc2NvcmUgPSAwO1xuICAgIHBsYXllckNob3Nlbi5jdXJyZW50QXR0YWNrID0gcGxheWVyQ2hvc2VuLmF0dGFjaztcbiAgICBwbGF5ZXJDaG9zZW4uY3VycmVudEFjY3VyYWN5ID0gcGxheWVyQ2hvc2VuLmFjY3VyYWN5O1xuICAgIHZpbGxpYW5DaG9zZW4uY3VycmVudEFjY3VyYWN5ID0gdmlsbGlhbkNob3Nlbi5hY2N1cmFjeTtcbiAgICB0dXJuID0gdHJ1ZTtcbiAgICAkY2hvaWNlcy5lbXB0eSgpO1xuICAgICgkdmlsbGlhbkltZywgJHBsYXllckltZykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIHNoYWtlJyk7XG4gICAgKCRraWNrT2ZmQnRuLCAkc3RhcnRCdG4pLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBpbmZpbml0ZSBwdWxzZScpO1xuICB9XG4gIGZ1bmN0aW9uIG5ld0dhbWUoKXtcbiAgICAkZ2FtZU92ZXJTY3JlZW4uYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIHN0YXJ0VGhlR2FtZSgpO1xuICB9XG4gIGZ1bmN0aW9uIGJhY2tUb01lbnUoKXtcbiAgICAkZ2FtZU92ZXJTY3JlZW4uYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICR3ZWxjb21lLnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluJyk7XG4gIH1cbiAgJGluc3RydWN0aW9uc0J0bi5vbignY2xpY2snLCBoaWRlV2luZG93MSk7XG4gICRiYWNrQnRuLm9uKCdjbGljaycsIGhpZGVXaW5kb3cyKTtcbiAgJHBsYXlCdG4ub24oJ2NsaWNrJywgZ29Ub0Nob2ljZVNjcmVlbik7XG4gICRzdGFydEJ0bi5vbignY2xpY2snLCB0b1RoZUdhbWUpO1xuICAkbmFtZS5vbigna2V5dXAnLCBnZXRUaGVOYW1lKTtcbiAgJGNob2ljZXMub24oJ2NsaWNrJywgJy5jaGFyYWN0ZXInLCBzZWxlY3RDaGFyYWN0ZXIpO1xuICAka2lja09mZkJ0bi5vbignY2xpY2snLCBzdGFydFRoZUdhbWUpO1xuICAkYXR0YWNrLm9uKCdjbGljaycsIGF0dGFja1ZpbGxpYW4pO1xuICAkd2FyQ3J5Lm9uKCdjbGljaycsIHdhckNyeSk7XG4gICRkZWZlbmQub24oJ2NsaWNrJywgZGVmZW5kKTtcbiAgJG5ld0dhbWUub24oJ2NsaWNrJywgbmV3R2FtZSk7XG4gICRiYWNrVG9NZW51Lm9uKCdjbGljaycsIGJhY2tUb01lbnUpO1xufSk7XG4iXX0=
