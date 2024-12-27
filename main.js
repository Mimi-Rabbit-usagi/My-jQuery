"use strict";

$(() => {
  const $input = $("input");
  $input.focus();
  $("button").click(() => {
    // $("p").text("おはよう！");
    // $("p").addClass("red-text");
    // $("p").text("おはよう！").addClass("red-text"); //メソッドをつなげることをメソッドチェーンと言う

    // $("li").eq(2).addClass("red-text");
    // $("li:nth-child(odd),li:last-child").addClass("red-text"); //奇数番目と最後の要素の色を赤くする
    // $("<li>").text("New Item").appendTo("ul"); //新しいリストの追加　createElement()

    $("<li>").text($input.val()).appendTo("ul"); //新しいリストの追加　createElement()
    $input.val("").focus();
  });
  $("ul").click((e) => {
    if (e.target.nodeName !== "LI" || !confirm("Are you sure?")) {
      return;
    }
    $(e.target).fadeOut(); //fadeOutはjQueryで取得したオブジェクトでしか使えない　//jQueryのオブジェクトに変換する必要がある$()
  });
});
