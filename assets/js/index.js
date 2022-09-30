let rank = "";

const ITEM_SELECTED_CLASS = "selected";
const ACTIVE_CARD_CLASS = "active";

const button = document.getElementById("submit");

const rankingSelectorCard = document.getElementById("ranking-selector");
const thankYouCard = document.getElementById("thank-you-page");

const rankValue = document.getElementById("rank-value");

button.addEventListener("click", () => {
  console.log(`Selected item: ${rank}`);
  rankValue.innerText = rank;
  rankingSelectorCard.classList.remove(ACTIVE_CARD_CLASS);
  thankYouCard.classList.add(ACTIVE_CARD_CLASS);
});

const rankItems = Array.from(document.getElementsByClassName("rank-item"));

rankItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    rank = index + 1;

    // mark all items before the selected item as active
    rankItems.forEach((item, index) => {
      if (index + 1 === rank) {
        item.classList.add(ITEM_SELECTED_CLASS);
      } else {
        item.classList.remove(ITEM_SELECTED_CLASS);
      }
    });

    button.removeAttribute("disabled");
  });
});
