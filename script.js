$(document).ready(function(){
        $('#search-text').keyup(function () {
          $('#stateInput').text($(this).val());           
        });
        $("#btn-search").click(function(){
        var searchReg = /^[a-zA-Z0-9-]+$/;
        var searchVal = $("#search-text").val().toLowerCase();
        if(searchVal == "one" || searchVal == "1") {
          $("#one").css("display", "block");
          $("#two").css("display", "none");
          $("#three").css("display", "none");
        }
        else
        if(searchVal == "two" || searchVal == "2") {
          $("#one").css("display", "none");
          $("#two").css("display", "block");
          $("#three").css("display", "none");
        }
        else
        if(searchVal == "three" || searchVal == "3") {
          $("#one").css("display", "none");
          $("#two").css("display", "none");
          $("#three").css("display", "block");
        }
        });
});
      
    