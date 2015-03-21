function main(){
    "use strict";

    var acct1 = {user: "acct1", pass: "pass1"};
    var accts = [];

    accts.push(acct1);


    $(".submit").on("click", function(){
        //template for tweet objects
        var $tweet = $("<div>").addClass("tweet-obj"),
            text = $(".tweet").val(),
            $upvote = $("<button>Yes</button>"),        
            $downvote = $("<button>No</button>");


        $upvote.click(upvoteClick);
        //build tweet object
        $tweet.text(text);
        $tweet.append($upvote);
        $tweet.append($downvote);


        $(".vote-queue").append($tweet);
    });

    var upvoteClick = function(){
        //alert("You voted yes");
        alert($(this).parent().val());
        $(".voted").append($(this).parent().val());
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