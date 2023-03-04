function loadLikesFromSession() {
  const likes = sessionStorage.setItem("likes", "0");
}

function toggleSelection(element) {
  const isSelected = element.getAttribute("selected");
  if (isSelected) {
    element.removeAttribute("selected");
    element.classList.add("iconUnselected");
    element.classList.remove("iconSelected");
    document.getanimateIcon;
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
