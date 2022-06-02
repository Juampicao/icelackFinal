import React from "react";

const Like = () => {
  $(".click").click(function () {
    if ($("span").hasClass("fa-star")) {
      $(".click").removeClass("active");
      setTimeout(function () {
        $(".click").removeClass("active-2");
      }, 30);
      $(".click").removeClass("active-3");
      setTimeout(function () {
        $("span").removeClass("fa-star");
        $("span").addClass("fa-star-o");
      }, 15);
    } else {
      $(".click").addClass("active");
      $(".click").addClass("active-2");
      setTimeout(function () {
        $("span").addClass("fa-star");
        $("span").removeClass("fa-star-o");
      }, 150);
      setTimeout(function () {
        $(".click").addClass("active-3");
      }, 150);
      $(".info").addClass("info-tog");
      setTimeout(function () {
        $(".info").removeClass("info-tog");
      }, 1000);
    }
  });

  return (
    <>
      <div class="click">
        <span class="fa fa-star-o"></span>
        <div class="ring"></div>
        <div class="ring2"></div>
        <p class="info">Added to favourites!</p>
      </div>
    </>
  );
};

export default Like;
