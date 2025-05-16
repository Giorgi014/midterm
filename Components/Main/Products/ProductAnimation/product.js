const ITEM_NUMBER = document.getElementById("total_item_number");

let speed = 300;

const updateItemNumber = () => {
  const target = +ITEM_NUMBER.getAttribute("data-target");
  const totalItemNumber = +ITEM_NUMBER.innerText;

  const incrementNumber = target / speed;

  if (totalItemNumber < target) {
    ITEM_NUMBER.innerText = totalItemNumber + incrementNumber;
    setTimeout(updateItemNumber, 1);
  } else {
    ITEM_NUMBER.innerText = target;
  }
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateItemNumber();
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(ITEM_NUMBER);
