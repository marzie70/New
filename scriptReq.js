var requestURL = 'https://picsum.photos/v2/list?page=1&limit=100';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();
request.onload = function () {
    var items = request.response;
    // console.log(items);
    for (var key in items) {
        console.log(items[key]);
        var download = items[key]['download_url'];
        // var image = document.createElement("img");
        // var images = document.getElementsByTagName('img');
        // images[key].src = download;


        // var node = document.createElement("LI");                 // Create a <li> node
        // var textnode = document.createTextNode("Water");         // Create a text node
        // node.appendChild(textnode);                              // Append the text to <li>
        // document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList" 

        // document.querySelector('#update').appendChild(image);

        // for (var key in items) {
        //     var download = items[key]['download_url'];

        let item = document.createElement("div");
        item.className = 'card card2';
        item.id = `marzie${key}`;

        let item1 = document.createElement("img");
        item1.className = 'card-img-top loading';
        item1.src = download;

        document.querySelector(".card-columns").appendChild(item);
        document.querySelector(`#marzie${key}`).appendChild(item1);

        let toolbar = document.createElement("div");
        let linkDownload = document.createElement("a");
        linkDownload.className = 'Download';
        linkDownload.href = download ;

        let linkShare = document.createElement("a");
        linkShare.className = 'Share';
        // linkShare.src = download ; 

        let linkLike = document.createElement("button");
        linkLike.className = 'Like';

        item.appendChild(toolbar);
        toolbar.appendChild(linkDownload);
        toolbar.appendChild(linkShare);
        toolbar.appendChild(linkLike);

        let iconDownload = document.createElement("i");
        iconDownload.className = 'fas fa-download';

        let iconShare = document.createElement("i");
        iconShare.className = 'fas fa-share-alt';

        let iconLike = document.createElement("i");
        iconLike.className = 'far fa-heart';
        iconLike.onclick = function(){functionLike(this)};

        linkDownload.appendChild(iconDownload);
        linkShare.appendChild(iconShare);
        linkLike.appendChild(iconLike);
        

        //     let item2 = document.createElement('div');
        //     item2.className = 'btn-group toolbar';

        //     let B1 = document.createElement('btn');
        //     B1.className = 'btn btn-secondary';

        //     let B2 = document.createElement('btn');
        //     B2.className = 'btn btn-secondary';

        //     let B3 = document.createElement('btn');
        //     B3.className = 'btn btn-secondary';


        //     document.getElementsByClassName('card-columns').appendChild(item);
        //     document.getElementById("div").appendChild(item1);
        //     document.getElementById("div").appendChild(item2);
        //     document.getElementById("div2").appendChild(B1);
        //     document.getElementById("div2").appendChild(B2);
        //     document.getElementById("div2").appendChild(B3);

        //     document.getElementsByClassName('card-columns').appendChild(item);
        // }


    }
    var numberOfItems = $("#loop .card").length;
    var limitPerPage = 15;
    $("#loop .card:gt(" + (limitPerPage - 1) + ")").hide();
    var totalPages = Math.round(numberOfItems / limitPerPage);
    $(".pagination").append("<li class='page-item current-page active'><a class='page-link' href='#'>" + 1 + "</a></li>");
    for (var i = 2; i <= totalPages; i++) {
        $(".pagination").append("<li class='page-item current-page'><a class='page-link' href='#'>" + i + "</a></li>");
    }
    $(".pagination").append("<li id='next-page' class='page-item'><a class='page-link' href='#' aria-label='Next'><span aria-hidden='true'> &raquo;</span></a></li>");
    $(".pagination li.current-page").on("click", function(){
        if($(this).hasClass("active")){
            return false;
        }else{
            var currentPage = $(this).index();
            $(".pagination li").removeClass("active");
            $(this).addClass("active");
            $("#loop .card").hide();
            var grandTotal = limitPerPage * currentPage;
            for (var i=grandTotal - limitPerPage; i<grandTotal; i++){
                $("#loop .card:eq(" + i + ")").show();
            }
        }
    }); 
    $("#next-page").on("click", function(){
        var currentPage = $(".pagination li.active").index();
        if(currentPage === totalPages){
            return false;
        }else{
            currentPage ++;
            $(".pagination li").removeClass("active");
            $("#loop .card").hide();
            var grandTotal = limitPerPage * currentPage;
            for (var i=grandTotal - limitPerPage; i<grandTotal; i++){
                $("#loop .card:eq(" + i + ")").show();
            }
            $(".pagination li.current-page:eq(" + (currentPage -1) + ")").addClass("active");
        }
    });
    $("#previous-page").on("click", function(){
        var currentPage = $(".pagination li.active").index();
        if(currentPage === 1){
            return false;
        }else{
            currentPage --;
            $(".pagination li").removeClass("active");
            $("#loop .card").hide();
            var grandTotal = limitPerPage * currentPage;
            for (var i=grandTotal - limitPerPage; i<grandTotal; i++){
                $("#loop .card:eq(" + i + ")").show();
            }
            $(".pagination li.current-page:eq(" + (currentPage -1) + ")").addClass("active");
        }
    });


}
// 'use strict';
// var numberOfitems = $("#loop .card").length;
// var limitPerPage = 10;
// $ ("#loop card:gt("+(limitPerPage-1)+")").hide();
// var totalPages = Math.round(numberOfitems / limitPerPage);
// $ ( ".Pagination" ).append("<li><a href ='Javascript:void(0)'>" + 1 + "</a></li>");
// for ( var i=2 ; i<= totalPages ; i++){
//     $(".pagination").append("<li><a href ='Javascript:void(0)'>" + i + "</a></li>")
// }
// $(".pagination").append("<li><a href ='Javascript:void(0)' aria-label='Next'><span aria-hidden='true'> &raque;</span></a></li>");


// var numberOfItems = $("#loop .card").length;
// var limitPerPage = 10;
// $("#loop .card:gt(" + (limitPerPage - 1) + ")").hide();
// var totalPages = Math.round(numberOfItems / limitPerPage);
// $(".pagination").append("<li class='page-item'><a class='page-link' href='#'>" + 1 + "</a></li>");
// for (var i = 2; i <= totalPages; i++) {
//     $(".pagination").append("<li class='page-item'><a class='page-link' href='#'>" + i + "</a></li>");
// }
// $(".pagination").append("<li class='page-item'><a class='page-link' href='#' aria-label='Next'><span aria-hidden='true'> &raquo;</span></a></li>");




// $(".pagination").append("<li class='page-item'><a class='page-link' href='#'>" + 1 + "</a></li>")
// $(".pagination").append("<li class='page-item'><a class='page-link' href='#'>" + i + "</a></li>")

// $(".pagination").append("<li class='page-item'><a class='page-link' href='#' aria-label='Next'><span aria-hidden='true'> &raquo;</span></a></li>");
// function searchImage(){
//     var input = document.getElementById("myInput");
//     var filter = input.value.toUpperCase();

//     var ul = document.getElementById("loop");
//     var li = ul.getElementsByTagName("img");

//     for (i= 0; i<li.length; i++){
//         var autherName = li[i].author;
//         if(autherName.toUpperCase.indexOf(filter) > -1){
//             li[i].style.display ="";
//         }else{
//             li[i].style.display = "none";
//         }


//     }
// }

// function myFunction(){
//     let ListOfPic = request.response;
//     var resultElement = document.getElementById('img');
//     resultElement.innerHTML=""
    
//     var input, filter, author, i;
//     input = document.getElementById("findInput");
//     filter = input.value.toUpperCase();
    
//     var c=0;
//     for (i = 0; i < ListOfPic.length; i++) { 
//     var d = resultElement.innerHTML;
//     author = ListOfPic[i].author;
//     if (author.toUpperCase().indexOf(filter) > -1) {
//     c=c+1; 
//     resultElement.innerHTML 
// debugger
function myFunction(){
    let ListOfPic = request.response;
    var resultElement = document.getElementById('loop');
    resultElement.innerHTML=""
    
    var input, filter, author, i;
    // input = document.getElementById("myInput");
    // filter = input.value.toUpperCase();
    
    var c=0;
    for (i = 0; i < ListOfPic.length; i++) { 
    var d = resultElement.innerHTML;
    var author = ListOfPic[i]['author'];
    var download = ListOfPic[i]['download_url'];
    var input=document.getElementById("myInput").value;
    if (author.includes(input)) {
    c=c+1; 
    let item = document.createElement("div");
        item.className = 'card';
        item.id = `marzie${i}`;

        let item1 = document.createElement("img");
        item1.className = 'card-img-top  loading';
        item1.src = download;

        // document.querySelector(".card-columns").appendChild(item);
        // document.querySelector(`#marzie${i}`).appendChild(item1);
        document.getElementById("loop").appendChild(item);
        document.getElementById(`marzie${i}`).appendChild(item1);
    }
}
}
// $('img').load(function(){
//     $(this).css('background','none');
//  });
// resultElement.innerHTML=d+" <div class='card'><figure class='snip0013'><img src='" +ListOfPic[i].download_url+"'class='card-img-top w-100 h-100' ><div id='icon'><a href='#'><i class='ion-ios-star-outline left-icon'></i></a><a href='#'><i class='ion-ios-download-outline right-icon'></i></a></div></figure><div class='d' style='position:absolute;background:rgba(10,10,10,0.8);width:100%;height:100%;bottom:0;'></div>"
function functionLike(x){
    x.classList.toggle('fas');
    // console.log("LOL")
}