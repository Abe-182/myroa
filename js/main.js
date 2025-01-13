$(function () {
  // ハンバーガーボタン
  // ----------------------
  // ボタンクリック
  $(".toggle_btn").click(function () {
    $("header").toggleClass("open");
  });
  $(".mask").on("click", function () {
    $("header").toggleClass("open");
  });
  //ナビゲーションのリンクがクリックされたらopenクラスが取れて（削除されて）ナビゲーションが閉じる
  $("#nav a").click(function () {
    $("header").removeClass("open");
    //ボタンの openクラスを除去
  });
});
// =====================================
  // スムーススクロール
  $(function () {
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
      // クリックしたaタグのリンクを取得
      let href = $(this).attr("href");
      // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
      let target = $(href == "#" || href == "" ? "html" : href);
      // 「headerの高さ80px」を引いた値からジャンプ先の要素までの距離を取得
      let position = target.offset().top;
      // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
      // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
      $("html, body").animate({ scrollTop: position }, 600, "swing");
      // urlが変化しないようにfalseを返す
      return false;
    });
  });


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// スクロースで要素をフェードインさせる
$(window).scroll(function () {
  // fade-inクラスに対して順に処理を行う
  $(".fade-in").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fade-inクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fade-inクラスの要素が画面下にきてから30px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 70) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});

// =================================================
//textareaのリサイズに合わせてlabelの高さを連動させる
// $(document).ready(function () {
//   // textareaのリサイズイベントに連動する処理
//   const syncHeight = () => {
//     let textareaHeight = $("textarea").outerHeight(); // textareaの高さを取得
//     $(".textarea label").css("height", textareaHeight + "px"); // labelの高さを適用
//   };

//   // 初期状態の高さを同期
//   syncHeight();

//   // マウスダウン（リサイズ開始）、マウスムーブ（リサイズ中）、マウスアップ（リサイズ終了）に対応
//   $("textarea").on("input", syncHeight); // テキスト変更時
//   $("textarea").on("mouseup", syncHeight); // リサイズ完了時
//   $("textarea").on("mousemove", syncHeight); // リサイズ中
// });
