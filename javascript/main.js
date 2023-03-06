/**
 * Clears the sesion storage for the "likes" item.
 * Need to call this each time the page is reloaded.
 */
function clearLikesFromSession() {
  sessionStorage.setItem("likes", "0");
}

/**
 * Clear likes functionality.
 * Removes all likes from all available items.
 */
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

/**
 * Like all functionality.
 * Likes all available items.
 */
function likeAll() {
  const elements = document.getElementsByClassName("iconUnselected");
  const likes = sessionStorage.getItem("likes");
  let numberOfLikes = likes ? parseInt(likes) : 0;
  if (elements) {
    Array.from(elements).forEach((element) => {
      element.setAttribute("selected", true);
      element.classList.add("iconSelected");
      element.classList.remove("iconUnselected");
      numberOfLikes++;
    });
    sessionStorage.setItem("likes", numberOfLikes);
    document.getElementById("likesCounter").innerHTML = numberOfLikes;
  }
}

/**
 * Toggles the "like"/"unlike" of an item and increments/decrements the "likes" counter.
 * @param element
 */
function toggleSelection(element) {
  const isSelected = element.getAttribute("selected");
  if (isSelected) {
    element.removeAttribute("selected");
    element.classList.remove("iconSelected");
    element.classList.add("iconUnselected");
  } else {
    element.setAttribute("selected", true);
    element.classList.remove("iconUnselected");
    element.classList.add("iconSelected");
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
