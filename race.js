





$.get('http://localhost:3000/race').then(data => {
    $.each(data,function(key,val){
        // console.log(val.title);
        $('body').append(`
        <table id="${val.title}" border = "1">
        <caption>${val.title}</caption>
        </table>
        `);
        $.each(val,function(key2,val2){
            $("#"+val.title).append(`<tr>
                <td>${val2.name}</td>
                </tr>`
            );
        })
    
    });
   

})