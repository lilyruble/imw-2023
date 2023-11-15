// Initialized API Constants
const APIKEY = "92eed99fbd3f4cae8055a9e24a0f0c23";
const URL = "https://api.worldnewsapi.com/search-news";

//Initialized Scope Variables
var pageWidth;
var currentBatch = 0;
var batchHeight;
var batchSize = [
    1,
    5,
    10,
    15,
    20,
    30,
    35,
    40,
    45,
    50,
]

var sentiments = [
    0.9,
    0.8,
    0.7,
    0.6,
    0.5,
    0.4,
    0.3,
    0.2,
    0.1,
    -0.1,
    -0.2,
    -0.8,
    -0.9,
]

// ON first page load create the first batch of news articles
$(document).ready(function () {
    pageWidth = $(document).width();
    batchHeight = $(window).height();

    var headlineParams = {
        "minHeight": 300,
        "maxHeight": 600,
        "minWidth": 300,
        "maxWidth": 500,
        "minX": -200,
        "maxX": pageWidth + 200,
        "minY": batchHeight * (currentBatch + 1),
        "maxY": batchHeight * (currentBatch + 2),
    }

    GenerateHeadlines(headlineParams)
})

// When bottom of page (within 2000px) is reached generate next batch of New articles
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 2000) {
        currentBatch++;
        var headlineParams = {
            "minHeight": 300,
            "maxHeight": 600,
            "minWidth": 300,
            "maxWidth": 500,
            "minX": -200,
            "maxX": pageWidth + 200,
            "minY": batchHeight * (currentBatch + 1),
            "maxY": batchHeight * (currentBatch + 2),
        }

        GenerateHeadlines(headlineParams)
    }
});

// Retrieve data for articles

async function GetArticles(callback) {
    if (currentBatch < batchSize.length) {
        var size = batchSize[currentBatch];
    } else {
        var size = batchSize[batchSize.length - 1];
    }

    // Sentiment Range (from happy to sad)
    if (currentBatch < sentiments.length) {
        var minSentiment = sentiments[currentBatch] - 0.05;
        var maxSentiment = sentiments[currentBatch] + 0.05;
    } else {
        var minSentiment = sentiments[batchSize.length - 1] - 0.05;
        var maxSentiment = sentiments[batchSize.length - 1] + 0.05;
    }

    // TO USE REAL NEWS DATA
    $.ajax({
        url: URL + "?max-sentiment=" + maxSentiment + "&min-sentiment=" + minSentiment + "&source-countries=us,uk,ca,fr&number=" + size + "&api-key=" + APIKEY,
        type: 'GET',
        dataType: 'json',
        success: callback
    })

    // TO USE DUMMY DATA
    // var result = { "news": [] }
    // for (var i = 0; i < size; i++) {
    //     result["news"].push({})
    //     result["news"][i].title = "Dummy title";
    //     result["news"][i].text = "Dummy text!!!!!!!!!!!!";
    // }

    callback(result)
};


// Function to add and increase articles as user scrolls
async function GenerateHeadlines(headlineParams) {
    GetArticles((articles) => {
        console.log(articles)
        articles["news"].forEach(article => {
            var height = Math.random() * (headlineParams.maxHeight - headlineParams.minHeight) + headlineParams.minHeight;
            var width = Math.random() * (headlineParams.maxWidth - headlineParams.minWidth) + headlineParams.minWidth;
            var x = Math.random() * (headlineParams.maxX - headlineParams.minX) + headlineParams.minX;
            var y = Math.random() * (headlineParams.maxY - headlineParams.minY) + headlineParams.minY;


            $("body").append(
                `
        <div class="headline" 
        style="height:${height}px;width:${width}px; top: ${y}px; left: ${x}px;">
        <h3>${article.title}</h3>
        <p>${article.text}
        </p>
        </div>
        `
            )
        });
    });
};