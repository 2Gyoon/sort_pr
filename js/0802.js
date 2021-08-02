$(document).ready(function(){

    var $pd_arr = [
        ["img1.jpg", "거실 인테리어1", "합리적 실용 인테리어1", "30000", "20210401", "23"],
        ["img2.jpg", "거실 인테리어7", "합리적 실용 인테리어7", "120000", "20210224", "90"],
        ["img3.jpg", "침실 인테리어5", "미니멀리즘 인테리어5", "50000", "20210328", "53"],
        ["img4.jpg", "침실 인테리어6", "모더니즘 인테리어6", "80000", "20210110", "104"],
        ["img5.jpg", "주방 인테리어2", "아르누보 양식 인테리어2", "90000", "20201231", "87"],
        ["img6.jpg", "침실 인테리어1", "모더니즘 실용 인테리어1", "70000", "20210202", "61"],
        ["img7.jpg", "서재 인테리어12", "합리적 실용 인테리어12", "55000", "20210412", "13"],
        ["img8.jpg", "욕실 인테리어3", "합리적 실용 인테리어3", "78000", "20210315", "24"],
        ["img9.jpg", "거실 인테리어1", "합리적 실용 인테리어1", "39000", "20210318", "40"],
        ["img3.jpg", "침실 인테리어5", "미니멀리즘 인테리어5", "50000", "20210328", "53"],
        ["img4.jpg", "침실 인테리어6", "모더니즘 인테리어6", "85000", "20210111", "103"],
        ["img5.jpg", "주방 인테리어2", "아르누보 양식 인테리어2", "90000", "20201231", "88"],
        ["img6.jpg", "침실 인테리어1", "모더니즘 실용 인테리어1", "70000", "20210202", "61"],
        ["img7.jpg", "서재 인테리어12", "합리적 실용 인테리어12", "55000", "20210412", "13"],
        ["img8.jpg", "욕실 인테리어3", "합리적 실용 인테리어3", "78000", "20210315", "24"],
        ["img9.jpg", "거실 인테리어1", "합리적 실용 인테리어1", "39000", "20210318", "40"],
        ["img9.jpg", "거실 인테리어1", "합리적 실용 인테리어1", "39000", "20210318", "40"],
    ];

    var box = `
    <div class="pd_box">
        <div class="pd_img"></div>
        <div class="pd_text">
            <h3 class="title">거실 인테리어</h3>
            <p class="sub">합리적 실용 인테리어</p>
        </div>
        <div class="pd_cont">
            <p class="price">40000</p>
            <span class="update">20210506</span>
        </div>
        <p class="like">좋아요<span>23</span></p>
    </div>
    `;

    for(i=0; i<$pd_arr.length; i++){
        $(".pd_detail").append(box);
    };

    var btn_index;  //클릭한 버튼의 인덱스

    function sort_pd(){
        $(".left button").removeClass("active");
        $(".left button").eq(btn_index).addClass("active");

        $(".pd_detail .pd_box").each(function(i){
            $(this).find(".pd_img").css("background-image", "url(./img/"+$pd_arr[i][0]+")");
            $(this).find(".title").text($pd_arr[i][1]);
            $(this).find(".sub").text($pd_arr[i][2]);
            $(this).find(".price").text($pd_arr[i][3]);
            $(this).find(".update").text($pd_arr[i][4]);
            $(this).find(".like span").text($pd_arr[i][5]);
        });

        $(".sort option").prop("selected", false);
        $(".sort option").eq(btn_index + 1).prop("selected", true);
    };

    sort_pd();

    // 최신순
    $(".recent").click(function(){
        
        btn_index = $(this).index();

        $pd_arr.sort(function(a,b){
            return b[4] - a[4];
        });
        console.log($pd_arr);

        sort_pd();

    });

    //저가순
    $(".low").click(function(){
        
        btn_index = $(this).index();

        $pd_arr.sort(function(a,b){
            return a[3] - b[3];
        });
        console.log($pd_arr);

        sort_pd();
    });

    //고가순
    $(".high").click(function(){
        
        btn_index = $(this).index();

        $pd_arr.sort(function(a,b){
            return b[3] - a[3];
        });
        console.log($pd_arr);

        sort_pd();
    });

    $(".fav").click(function(){
        
        btn_index = $(this).index();

        $pd_arr.sort(function(a,b){
            return b[5] - a[5];
        });
        console.log($pd_arr);

        sort_pd();
    });

    $(".sort").change(function(){
        var change_val = $(this).val();
        if(change_val == "recent"){//최신순
            $pd_arr.sort(function(a,b){
                return b[4] - a[4];
            });
            $(".pd_detail .pd_box").each(function(i){
                $(this).find(".pd_img").css("background-image", "url(./img/"+$pd_arr[i][0]+")");
                $(this).find(".title").text($pd_arr[i][1]);
                $(this).find(".sub").text($pd_arr[i][2]);
                $(this).find(".price").text($pd_arr[i][3]);
                $(this).find(".update").text($pd_arr[i][4]);
                $(this).find(".like span").text($pd_arr[i][5]);
            });
        }else if(change_val == "low"){//저가순
            $pd_arr.sort(function(a,b){
                return  a[3] - b[3];
            });
            $(".pd_detail .pd_box").each(function(i){
                $(this).find(".pd_img").css("background-image", "url(./img/"+$pd_arr[i][0]+")");
                $(this).find(".title").text($pd_arr[i][1]);
                $(this).find(".sub").text($pd_arr[i][2]);
                $(this).find(".price").text($pd_arr[i][3]);
                $(this).find(".update").text($pd_arr[i][4]);
                $(this).find(".like span").text($pd_arr[i][5]);
            });
        }else if(change_val == "high"){
            $pd_arr.sort(function(a,b){
                return b[3] - a[3];
            });
            $(".pd_detail .pd_box").each(function(i){
                $(this).find(".pd_img").css("background-image", "url(./img/"+$pd_arr[i][0]+")");
                $(this).find(".title").text($pd_arr[i][1]);
                $(this).find(".sub").text($pd_arr[i][2]);
                $(this).find(".price").text($pd_arr[i][3]);
                $(this).find(".update").text($pd_arr[i][4]);
                $(this).find(".like span").text($pd_arr[i][5]);
            });
        }else if(change_val == "fav"){
            $pd_arr.sort(function(a,b){
                return b[5] - a[5];
            });
            $(".pd_detail .pd_box").each(function(i){
                $(this).find(".pd_img").css("background-image", "url(./img/"+$pd_arr[i][0]+")");
                $(this).find(".title").text($pd_arr[i][1]);
                $(this).find(".sub").text($pd_arr[i][2]);
                $(this).find(".price").text($pd_arr[i][3]);
                $(this).find(".update").text($pd_arr[i][4]);
                $(this).find(".like span").text($pd_arr[i][5]);
            });
        }


        $(".sort option").eq(0).prop("disabled", true);

        $(".left button").removeClass("active");
        $(".left button[class*='"+change_val+"']").addClass("active");

        $(".sort option").prop("selected", false);
        $(".sort option[value*='"+change_val+"']").prop("selected", true);
        /*
        $(".sort option").removeAttr("selected");
        $(".sort option[value*='"+change_val+"']").attr("selected", "selected");
        */
    });

    // 페이저
    var pd_num = 4;

    function choose_num(){

        if($pd_arr.length % pd_num == 0){
            for(k=0; k<$pd_arr.length / pd_num; k++){
                $(".pager ol").append("<li>"+(k+1)+"</li>");
            }
        }else{
            for(k = 0; k <= $pd_arr.length / pd_num; k++){
                $(".pager ol").append("<li>"+(k+1)+"</li>");
            }
        }
    
        $(".pager ol li").eq(0).addClass("active");
        $(".pd_box").show();
        $(".pd_box").eq(pd_num - 1).nextAll().hide();
    };

    choose_num();   //최초로딩 시 4개

    $(".right button").click(function(){
        pd_num = Number($(this).attr("rel"));
        // console.log(typeof pd_num);

        $(".right button").removeClass("active");
        $(this).addClass("active");


        $(".pager ol").empty();

        choose_num();
    });

    /* 작동을 안함!(pager li가 새롭게 추가되기 때문에)
        $(".pager ol li").click(function(){
            var pager_num = Number($(this).text());
            
            $(".pd_box").show();
            $(".pd_box").eq(pd_num * (pager_num - 1)).prevAll().hide();
            $(".pd_box").eq(pd_num * pager_num - 1).nextAll().hide();

            $(".pager ol li").removeClass("active");
            $(this).addClass("active");
            
        });
    */

    $(document).on("click", ".pager ol li", function(){
        var pager_num = Number($(this).text());
            
        $(".pd_box").show();
        $(".pd_box").eq(pd_num * (pager_num - 1)).prevAll().hide();
        $(".pd_box").eq(pd_num * pager_num - 1).nextAll().hide();

        $(".pager ol li").removeClass("active");
        $(this).addClass("active");
    });


    











});