function main(){
    "use strict";

    var acct1 = {user: "acct1", pass: "pass1", voted: [], toVote: []};
    var accts = [];
    var acctNum = 0;

    accts.push(acct1);
    createTweet("Hello");
    createTweet("Other tweet");

    $(".submit").on("click", function(){
        var text = $(".tweet");
        createTweet(text);
    });

    //Event handler for yes votes
    var upvoteClick = function(){
        var $tweet = $(this).parent(),
            text = $tweet.find("span").text(),
            toVote = accts[acctNum].toVote,
            voted = accts[acctNum].voted,
            index = getIndexOfTweet(text,toVote),
            tweet = toVote[index];

        toVote.splice(index, 1);
        voted.push(tweet);
        $(".voted").append($("<p>").text(text));
        $tweet.remove();
        alert(voted[voted.length-1].text);
    };

    //Event handler for no votes
    var downvoteClick = function(){
        var $tweet = $(this).parent(),
            text = $tweet.find("span").text();

        $(".voted").append($("<p>").text(text));
        $tweet.remove();
    };

    //Creates tweet object and puts it in each users vote queue
    function createTweet(text){
        var tweet = {text: text, ballot: []};
            accts.forEach(function(acct){
                tweet.ballot.push(2);
                acct.toVote.push(tweet);
            });
    }

    //Prepares and return a tweet html object
    function createTweetHTML(text){
        var $tweet = $("<div>").addClass("tweet-obj"),
            $text = $("<span>").text(text),
            $upvote = $("<button>Yes</button>"),        
            $downvote = $("<button>No</button>");

        //initialize buttons
        $upvote.click(upvoteClick);
        $downvote.click(downvoteClick);

        //build tweet object
        $tweet.append($text);
        $tweet.append($upvote);
        $tweet.append($downvote);

        return $tweet; 
    }

    //returns the index of the tweet with the given text in the given array
    function getIndexOfTweet(text, voteStack){
        var i,
            index = -1;
        for(i=0;i<voteStack.length;i++){
            if(voteStack[i].text === text){
                index = i;
            }
        }
        return index;
    }

    //populates the page with tweets this user neeeds to vote on
    (function(acct){
        acct = acct1;
        var toVote = acct.toVote;

        toVote.forEach(function(tweet){
            $(".vote-queue").append(createTweetHTML(tweet.text));
        });
    })(acct1);
}

$(document).ready(main);