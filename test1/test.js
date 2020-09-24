var arr = str.split(" ");
    // arr.forEach((item) => {
       
    //     console.log(item);
    // });
    var back = str;
    var i = 0;
    all.forEach((item) => {
        reg = eval("/"+item[0]+"/gi");
        var trans = back.replace(reg, item[1]+'*');
        if(trans == back){

        }else{
            back = trans;
            i = i + 1;
        }
    })

console.log("使用了"+i+"个单词");
console.log("翻译了"+back.match(/\*/g).length+"个单词");
console.log(back);