$('#klik').click(function(){
    $('#pozdrav').text('Hello world');3
    $('#makniPozdrav').show();
    return false;
});

$('#makniPozdrav').click(function(){
    $('#pozdrav').text('');
    $('#makniPozdrav').hide();
    return false;
});

$('#makniPozdrav').hide();