
function indexImgView(data) {
    for (var i=0;i <data.length;i++){
        if(i>3){
            return null;
        }
        $('.house-list').append(' <li><div class="pic"> ' +
            '<a href="house-detail.html?houseId='+data[i].houseId+'" target="_blank"> ' +
            '<img class="lazy" src="'+data[i].photoAddr+'" title="'+data[i].houseName+'" alt="'+data[i].houseName+'" style="display: block;" /> </a> </div> ' +
            '<div class="wz"> <h3><a href="house-detail.html?houseId='+data[i].houseId+'"  target="_blank">'+data[i].houseName+'</a></h3> </div> </li>')
    }
    $('.house-list li:last-child').addClass('no-margin-r')
};


function hasGoodHouse() {
    $.ajax({
        type:'get',
        url:basePath+'/housePhoto/page',
        data:{
            'houseId':1
        },
        success:function(data){
            indexImgView(data.rows);
        },
        error:function(data){
            alert('服务器走丢了')
        }
    })
};


