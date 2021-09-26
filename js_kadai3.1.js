let i = 0;

//キーワード取得
function keyUp(){
  let word = document.getElementById("text").value;
  search(word);
  i = 0;
}


//フィルタリング
function search(letter){
let keyword = document.querySelectorAll(".key_word");//.key_wordのp要素を取得
 keyword.forEach(function(text){//p要素の数だけループ
 $(function(){
  a = ".box" + i;
  i++;
  if(text.textContent.indexOf(letter) == -1){//文字が含まれているか判断
   $(a).addClass("add_hidden");//画像非表示の処理
    }else{
   $(a).removeClass("add_hidden");//画像表示の処理
  }
 });
});
}
