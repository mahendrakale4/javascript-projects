const tagsEL = document.getElementById("tags");
const textarea = document.getElementById("textarea");
textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createtags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createtags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEL.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEL.appendChild(tagEl);
  });
}

function randomSelect() {
  const time = 30;
  const interval = setInterval(() => {
    const randomTag =pickRandomTag();

    console.log(randomTag);
    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag =pickRandomTag();
      highlightTag(randomTag);
      console.log(randomTag);
    }, 100);
  }, time * 100);
}



function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}
function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}
