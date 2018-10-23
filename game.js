 var gen = Math.floor((Math.random()*100)+1);
                    var attempts = 15;
                    document.getElementById("attemptstext").innerHTML = "Attempts : "+attempts; 

                    function generate(){
                    gen = Math.floor((Math.random()*10)+1);
                    attempts = 3;
                    document.getElementById("msg").innerHTML = "A new number has been generated.";
                    document.getElementById("attemptstext").innerHTML = "Attempts remaining: "+attempts;
                    document.getElementById("guessfunc").enabled = true;
                  
                    }

                    function guessfunc() {
                        if (attempts>0){
                        var guess = document.getElementById("myText").value;
                        if (guess > gen){
                        document.getElementById("msg").innerHTML = "Your guess is too high.";
                        } else if (guess < gen) {
                            document.getElementById("msg").innerHTML = "Your guess is too low.";
                         } else {
                            document.getElementById("msg").innerHTML = "You guessed right. The number was "+gen;
                            document.getElementById("guessfunc").disabled = true;
                         }
                         attempts--;
                         document.getElementById("attemptstext").innerHTML = "Attempts remaining: "+attempts;
                        } else {
                         document.getElementById("attemptstext").innerHTML = "You lose. No attempts remaining";
                         document.getElementById("guessfunc").disabled = true;
                        }

                        
                    }