function clearLikesFromSession() {
  const likes = sessionStorage.setItem("likes", "0");
}

function clearLikes() {
  const elements = document.getElementsByClassName("iconSelected");
  if (elements) {
    Array.from(elements).forEach((element) => {
      element.removeAttribute("selected");
      element.classList.add("iconUnselected");
      element.classList.remove("iconSelected");
    });
    sessionStorage.setItem("likes", "0");
    document.getElementById("likesCounter").innerHTML = "0";
  }
}

function likeAll() {
  const elements = document.getElementsByClassName("iconUnselected");
  if (elements) {
    Array.from(elements).forEach((element) => {
      element.setAttribute("selected", true);
      element.classList.add("iconSelected");
      element.classList.remove("iconUnselected");
    });
    sessionStorage.setItem("likes", "8");
    document.getElementById("likesCounter").innerHTML = "8";
  }
}

function toggleSelection(element) {
  const isSelected = element.getAttribute("selected");
  if (isSelected) {
    element.removeAttribute("selected");
    element.classList.add("iconUnselected");
    element.classList.remove("iconSelected");
  } else {
    element.setAttribute("selected", true);
    element.classList.add("iconSelected");
    element.classList.remove("iconUnselected");
  }
  const likes = sessionStorage.getItem("likes");
  let numberOfLikes = parseInt(likes);
  if (likes && numberOfLikes > -1) {
    if (isSelected) {
      numberOfLikes--;
    } else {
      numberOfLikes++;
    }
    sessionStorage.setItem("likes", numberOfLikes);
    document.getElementById("likesCounter").innerHTML = numberOfLikes;
  } else {
    sessionStorage.setItem("likes", "1");
    document.getElementById("likesCounter").innerHTML = "1";
  }
}
