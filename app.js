function main(){
    "use strict";

    var acct1 = {user: "acct1", pass: "pass1"};
    var accts = [];

    accts.push(acct1);


    $(".submit").on("click", function(){
        //template for tweet objects
        var $tweet = $("<div>").addClass("tweet-obj"),
            text = $(".tweet").val(),
            $text = $("<span>").text(text),
            $upvote = $("<button>Yes</button>"),        
            $downvote = $("<button>No</button>");


        $upvote.click(upvoteClick);
        //build tweet object
        $tweet.append($text);
        $tweet.append($upvote);
        $tweet.append($downvote);


        $(".vote-queue").append($tweet);
    });

    var upvoteClick = function(){
        var $tweet = $(this).parent(),
            text = $tweet.find("span").text();

        
        alert(text);
        $tweet.remove();
    };

    var downvoteClick = function(){
        alert("You voted no");
    };

    function createTweet(text){
        var tweet = {text: text, ballot: []};
            accts.forEach(function(user){
            vote.ballot.push(2);
        });
        return tweet;       
    }
}

$(document).ready(main);