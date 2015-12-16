var stabMove = 1;
			var numClicks = 0;
			var message = "";
			var atk = 0;
			var def = 0;
			var movePower = 0;
			var lv = 0;
			
			
			function  calcular() {
			
				
			
				var form = document.getElementById('form');
				atk = form.ataque.value * form.setUp.value;
				def = form.defesa.value * form.setUpDef.value;
				movePower = form.movePower.value;
				lv = form.level.value;
				var weak = form.InputWeak.value;
				
				var random = function (start,end){
				return Math.floor(Math.random()*(end-start+1)+start);
				}
				rand = (random(85,100));
								
				
				var dano = (((( 2 * lv / 5 + 2 ) * atk * movePower / def) / 50 ) + 2) * stabMove * weak * rand / 100
				if (!dano){
					dano = 0;
				}
				
				
				
				alert("Damage: " + parseInt(dano) + " pts");
				message = (" <strong>Last damage: </strong>" + parseInt(dano) + " pts of HP");
				
				
				//deixa o ultimo resultado impresso na tela
				document.getElementById("screenText").innerHTML = message;
				
			
			}
			
			function stabCheck() {
		
				numClicks = numClicks + 1;
				
				if (numClicks % 2 == 0) {
					stabMove = 1;
				}
				else { 
					stabMove = 1.5;
					}
				
			}

			
			function showHelp(){
				
				alert("This app is for damage calculating between two pokemon. This app doesn't considerates IV's and EV's stats, just the Pokemon base stats. For bug reporting please send email to brunolcarli@gmail.com");
				
			}
