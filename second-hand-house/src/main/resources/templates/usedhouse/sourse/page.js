
    /*pageCount是总共几页*/
    var pageCount=8;
    inserHtml(pageCount,1);
    bindEvent(pageCount);
    function inserHtml(page,current){
        var obj = $(".ts-page");
        obj.empty();
        if(current > 1){
            obj.append('<span class="tspage-start">首页</span>');
            obj.append('<span class="tspage-before">上一页</span>');
        }else{
            obj.remove('.tspage-start');
            obj.append('<span class="tspage-before disable">上一页</span>');
        }
        if(current>3 && current <= page && page>5){
            obj.append('<span class="tspage-ell">...</span>');
        }
        var start = current-2, end= current+2; //中间显示5个
        if(start >1 && current < 4||current == 1){
            end++;
        }
        if(current > page-2 && current <= page){
            start--;
        }
        for(;start<=end;start++){
            if(start<=page && start >=1){
                if(start != current){
                    obj.append('<span class="page">'+start+'</span>');
                }else{
                    obj.append('<span class="page on">'+start+'</span>');
                }
            }
        }
        if(current+2<page && current >=1 && page>4){
            obj.append('<span class="tspage-ell">...</span>');
        }
        if(current<page){
            obj.append('<span class="tspage-after">下一页</span>');
            obj.append('<span class="tspage-end">尾页</span>');
        }else{
            obj.remove('.tspage-end');
            obj.append('<span class="tspage-after disable">下一页</span>');
        }
    }
    function bindEvent(page){
        var obj = $(".ts-page");
        obj.on('click','.page',function(){
            var currentPage = parseInt($(this).text());
            inserHtml(currentPage,page);
            inserHtml(page,currentPage);
            //获取后台传来数据的ajax函数+数据适配
            // getData(currentPage);
        });
        obj.on('click','.tspage-before',function(){
            var currentPage = parseInt(obj.children('.on').text());
            if(currentPage>1){
                inserHtml(page,currentPage-1);
                //获取后台传来数据的ajax函数+数据适配
                // getData(currentPage-1);
            }

        });
        obj.on('click','.tspage-after',function(){
            var currentPage = parseInt(obj.children('.on').text());
            if(currentPage<page){
                inserHtml(page,currentPage+1);
                //获取后台传来数据的ajax函数+数据适配
                // getData(currentPage+1);
            }
        });
        obj.on('click','.tspage-start',function(){
            inserHtml(page,1);
            //获取后台传来数据的ajax函数+数据适配
            // getData(1);
        });
        obj.on('click','.tspage-end',function(){
            inserHtml(page,page);
            //获取后台传来数据的ajax函数+数据适配
            // getData(page);
        });
    }

    function getData(num){
        $.get('url?p='+num,function(data){
           console.log(data); //这里是数据适配
        })
    }
    window.pageCount=pageCount;
    window.inserHtml=inserHtml;
    window.bindEvent=bindEvent;