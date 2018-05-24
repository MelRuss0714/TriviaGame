document.addEventListener("DOMContentLoaded", function () {


    newGame();
    //on ready function that gives directions and has a start game button
    function newGame() {
        var correct = 0;
        var incorrect = 0;
        var unanswered = 7;
        //writes all directions and button html to the DOM
        $("#mainDiv").html('<br><br><br><br><h2>Press "Start Game" to begin.</h2><br><h2>You will have 30 seconds to answer each question.</h2><br><button type="button" id="startBtn" class="btn btn-warning">Start Game</button>');

       

        function checkCorrect() {

            $("button").on("click", function () {
                unanswered--;
                var answer = ($(this).attr("answer"));
                if (answer === "true") {
                    correct++;
                }
                else if (answer === "false") {
                    incorrect++;
                }
            });


        }
        //on click newGame function when start button is pushed
        $("#startBtn").on("click", function () {
            // write 1st question and answers to Dom
            $("#mainDiv").html('<div class="list-group"><br><br>   <h2>Wellington is the capital city of which country?<h2><button type="button" answer="false" class="list-group-item list-group-item-action">Ireland</button> <button type="button" answer="true" class="list-group-item list-group-item-action">New Zealand</button> <button type="button" answer="false" class="list-group-item list-group-item-action">Aruba</button> <button type="button" answer="false" class="list-group-item list-group-item-action">Cameroon</button> </div>');
            //Timer starts for 30 secs
            var questionTime = setTimeout(firstAnswer, 1000 * 30);
            //if a answer is clicked else timer goes off and answer function runs
            $("button").on("click", function () {
                firstAnswer();
                clearTimeout(questionTime);
            });
            checkCorrect();
        });






        //First Answer Function
        //timer sets for 10 secs so that when it goes off the 2nd question function is triggered
        function firstAnswer() {
            $("#mainDiv").html('<br><img class="answerImg" src="assets/images/Wellington.png" alt="New Zealand"/><h2>New Zealand</h2><p>Wellington is the capital city and second most populous urban area of New Zealand, with 412,500 residents. It is located at the south-western tip of the North Island, between Cook Strait and the Rimutaka Range. Wellington is the major population centre of the southern North Island and is the administrative centre of the Wellington Region, which also includes the Kapiti Coast and Wairarapa.</p>');
            setTimeout(secondQuestion, 1000 * 10);


        };

        //2nd question function the same as 1st with 30 secs and if answered else timer goes off move to 2nd answer function
        function secondQuestion() {
            $("#mainDiv").html('<div class="list-group"><br><br>   <h2>How many lines does a Limerick have?</h2><button type="button" answer="false" class="list-group-item list-group-item-action">Three</button><button type="button" answer="true" class="list-group-item list-group-item-action">Five</button><button type="button" answer="false" class="list-group-item list-group-item-action">Seven</button><button type="button" answer="false" class="list-group-item list-group-item-action">Four</button></div>');
            var questionTime = setTimeout(secondAnswer, 1000 * 30);
            $("button").on("click", function () {
                secondAnswer();
                clearTimeout(questionTime);
            });
            checkCorrect();
        };

        //2nd answer function  same as 1st with changes for new answers
        function secondAnswer() {
            $("#mainDiv").html('<br><img class="answerImg" src="assets/images/limerick.png" alt="Limerick"/><h2>Five</h2><p>The standard form of a limerick is a stanza of five lines, with the first, second and fifth rhyming with one another and having three feet of three syllables each; and the shorter third and fourth lines also rhyming with each other, but having only two feet of three syllables.</p>');
            setTimeout(thirdQuestion, 1000 * 10);
            console.log(unanswered);
        };

        //3rd Question
        function thirdQuestion() {
            $("#mainDiv").html('<div class="list-group"><br><br>   <h2>During which decade did Elvis Presley die?</h2><button type="button" answer="true"class="list-group-item list-group-item-action">The 1970s</button><button type="button" answer="false" class="list-group-item list-group-item-action">The 1980s</button><button type="button" answer="false" class="list-group-item list-group-item-action">The 1990s</button><button type="button" answer="false" class="list-group-item list-group-item-action">The 1960s</button></div>');
            var questionTime = setTimeout(thirdAnswer, 1000 * 30);
            $("button").on("click", function () {
                thirdAnswer();
                clearTimeout(questionTime);
            });
            checkCorrect();
        };

        //3rd Answer
        function thirdAnswer() {
            $("#mainDiv").html('<br><img class="answerImg" src="assets/images/Elvis.png" alt="Elvis"/><h2>The 1970s</h2><p>Years of prescription drug abuse severely compromised his health, and Elvis Presley died suddenly in 1977 at his Graceland estate at the age of 42.</p>');
            setTimeout(fourthQuestion, 1000 * 10);
        };

        //4th Question
        function fourthQuestion() {
            $("#mainDiv").html('<div class="list-group"><br><br>   <h2>Which actor starred in: What Lies Beneath, Six Days and Seven Nights, and Air Force One?</h2><button type="button" answer="false" class="list-group-item list-group-item-action">Gary Oldman</button><button type="button" answer="false" class="list-group-item list-group-item-action">James Remar</button><button type="button" class="correct list-group-item list-group-item-action">Harrison Ford</button><button type="button" class="wrong list-group-item list-group-item-action">Liam Neeson</button></div>');
            var questionTime = setTimeout(fourthAnswer, 1000 * 30);
            $("button").on("click", function () {
                fourthAnswer();
                clearTimeout(questionTime);
            });
            checkCorrect();
        };

        //4th Answer
        function fourthAnswer() {
            $("#mainDiv").html('<br><img class="answerImg" src="assets/images/harrison.png" alt="Harrison Ford"/><h2>Harrison Ford</h2><p>Harrison Ford (born July 13, 1942) is an American actor and film producer. He gained worldwide fame for his starring roles as Han Solo in the Star Wars film series and as the title character of the Indiana Jones film series. Ford is also known for playing Rick Deckard in the neo-noir dystopian science fiction film Blade Runner (1982) and its sequel Blade Runner 2049 (2017);</p>');
            setTimeout(fifthQuestion, 1000 * 10);
        };

        //5th Question
        function fifthQuestion() {
            $("#mainDiv").html('<div class="list-group"><br><br>   <h2>What does the Olympic motto "Citius, Altius, Fortius" mean?</h2><button type="button" answer="false" class="list-group-item list-group-item-action">City Height Fortune</button><button type="button" answer="true" class="list-group-item list-group-item-action">Faster, Higher, Stronger</button><button type="button" answer="false" class="list-group-item list-group-item-action">Which City is Stronger</button><button type="button" answer="false" class="list-group-item list-group-item-action">Better, Higher, Stronger</button></div>');
            var questionTime = setTimeout(fifthAnswer, 1000 * 30);
            $("button").on("click", function () {
                fifthAnswer();
                clearTimeout(questionTime);
            });
            checkCorrect();
        };
        //5th Answer
        function fifthAnswer() {
            $("#mainDiv").html('<br><img class="answerImg" src="assets/images/olympic.png" alt="Olymipcs"/><h2>Citius, Altius, Fortius</h2><p>The Olympic motto is the hendiatris Citius, Altius, Fortius, which is Latin for "Faster, Higher, Stronger". It was proposed by Pierre de Coubertin upon the creation of the International Olympic Committee in 1894.</p>');
            setTimeout(sixthQuestion, 1000 * 10);
        };
        //6th Question
        function sixthQuestion() {
            $("#mainDiv").html('<div class="list-group"><br><br>   <h2>Which dog breed is believed to be the fastest?</h2><button type="button" answer="false" class="list-group-item list-group-item-action">German Shepard</button><button type="button" answer="false" class="list-group-item list-group-item-action">Dalmation</button><button type="button" answer="true" class="list-group-item list-group-item-action">Greyhound</button><button type="button" answer="false" class="list-group-item list-group-item-action">Afgan Hound</button></div>');
            var questionTime = setTimeout(sixthAnswer, 1000 * 30);
            $("button").on("click", function () {
                sixthAnswer();
                clearTimeout(questionTime);
            });
            checkCorrect();
        };

        //6th Answer
        function sixthAnswer() {
            $("#mainDiv").html('<br><img class="answerImg" src="assets/images/greyhound.png" alt="Greyhound"/><h2>Greyhound</h2><p>The champion sprinter of dogdom, the Greyhound is a gentle, noble, and sweet-tempered companion with an independent spirit. For thousands of years these graceful hounds have been an object of fascination for artists, poets, and kings.</p>');
            setTimeout(seventhQuestion, 1000 * 10);
        };
        //7th Question
        function seventhQuestion() {
            $("#mainDiv").html('<div class="list-group"><br><br>   <h2>Who released a hit song in the 80s called "99 Red Balloons"?</h2><button type="button" answer="false" class="list-group-item list-group-item-action">a-ha</button><button type="button" answer="false" class="list-group-item list-group-item-action">Culture Club</button><button type="button" answer="false" class="list-group-item list-group-item-action">Club Nouveau</button><button type="button" answer="true" class="list-group-item list-group-item-action">Nena</button></div>');
            var questionTime = setTimeout(seventhAnswer, 1000 * 30);
            $("button").on("click", function () {
                seventhAnswer();
                clearTimeout(questionTime);
            });
            checkCorrect();
        };
        //7th Answer runs for 10 seconds then runs end of game function
        function seventhAnswer() {
            $("#mainDiv").html('<br><img class="answerImg" src="assets/images/luft.png" alt="99 Luft Balloons"/><h2>Nena</h2><p>"99 Luftballons" (German: Neunundneunzig Luftballons, "99 balloons") is an anti-war protest song by the German band Nena from their 1983 self-titled album.</p>');
            setTimeout(endGame, 1000 * 10);
        };
        function endGame() {
            //end of game function displays corrects, incorrects, unanswered
            $("#mainDiv").html('<h2>Game Over.</h2><br><h2>You got ' + correct + ' correct!</h2><br><h2>You got ' + incorrect + ' incorrect!</h2><br><h2>You did not answer ' + unanswered + ' !</h2><br><button type="button" id="startBtn" class="btn btn-warning">Restart Game</button>');
            $("#startBtn").on("click", newGame);
        };
    };
    //displays 'You are' statement based on number correct




});


