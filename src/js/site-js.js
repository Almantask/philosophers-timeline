function show(el) {
  el.style.display = 'block';
  el.setAttribute('aria-hidden', false);
}

function hide(el) {
  el.style.display = 'none';
  el.setAttribute('aria-hidden', true);
}

function hideUnchecked() {
  /* Uncheck the "all" box if one of the filter boxes is unchecked */
  var allBoxes = document.querySelectorAll('input[type="checkbox"][name="filter"]');
  var checkedBoxes = document.querySelectorAll('input[type="checkbox"][name="filter"]:checked');
  if (checkedBoxes.length < allBoxes.length) {
    document.querySelector('input[type="checkbox"]#all').checked = false;
  } else {
    document.querySelector('input[type="checkbox"]#all').checked = true;
  }

  var activeFilters = [];
  checkedBoxes.forEach(function (filter) {
    activeFilters.push(filter.id);
  });

  var entries = document.getElementsByClassName('timeline-entry');
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var categories = [];
    try {
      categories = entry.dataset.category.split(',').filter((category) => category.length > 0);
    } catch {
      // Pass
    }
    if (categories.length && !isItemInCategories(categories, activeFilters)) {
      hide(entry);
    } else {
      show(entry);
    }
  }

  reflowEntries();
}

function checkAll() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"][name="filter"]');
  checkboxes.forEach(function (box) {
    box.checked = true;
  });
  var entries = document.getElementsByClassName('timeline-entry');
  for (var i = 0; i < entries.length; i++) {
    show(entries[i]);
  }
  reflowEntries();
}

function isItemInCategories(categories, visibleCategories) {
  return visibleCategories.some(function (id) {
    return categories.indexOf(id) >= 0;
  });
}

function reflowEntries() {
  var entries = document.querySelectorAll('.timeline-entry[aria-hidden="false"]');
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    entry.classList.remove('odd', 'even', 'first');
    if (i === 0) {
      entry.classList.add('first');
    }
    if (i % 2 === 0) {
      entry.classList.add('even');
    } else {
      entry.classList.add('odd');
    }
  }
}

function limitInputWidth(event) {
  const input = event.target;
  const container = input.parentElement;
  const containerWidth = input.offsetWidth * 0.95;
  const inputText = input.value;

  const tempElement = document.createElement('span');
  tempElement.style.visibility = 'hidden';
  tempElement.style.whiteSpace = 'nowrap';
  tempElement.style.fontSize = window.getComputedStyle(input).fontSize;
  tempElement.textContent = inputText;

  document.body.appendChild(tempElement);
  const textWidth = tempElement.getBoundingClientRect().width;
  document.body.removeChild(tempElement);

  if (textWidth >= containerWidth) {
    const trimmedText = truncateTextToFit(inputText, containerWidth);
    input.value = trimmedText;
  }
}

function truncateTextToFit(text, maxWidth) {
  let trimmedText = text;
  while (trimmedText.length > 0) {
    const truncatedText = trimmedText.slice(0, -1);
    if (truncatedText === '') {
      return '';
    }
    const tempElement = document.createElement('span');
    tempElement.style.visibility = 'hidden';
    tempElement.style.whiteSpace = 'nowrap';
    tempElement.style.fontSize = 'inherit';
    tempElement.textContent = truncatedText;

    document.body.appendChild(tempElement);
    const truncatedWidth = tempElement.getBoundingClientRect().width;
    document.body.removeChild(tempElement);

    if (truncatedWidth <= maxWidth) {
      return truncatedText;
    }
    trimmedText = truncatedText;
  }
  return '';
}

function onload() {
  /* We have JS! */
  var root = document.documentElement;
  root.classList.remove('no-js');

  // /* Listen for filter changes */
  // document.querySelectorAll('input[type="checkbox"][name="filter"]').forEach(function (box) {
    // box.addEventListener('click', hideUnchecked);
  // });
  // document.querySelector('input[type="checkbox"]#all').addEventListener('click', checkAll);

  /* Flow entries */
  reflowEntries();

  // Clean up
  document.removeEventListener('DOMContentLoaded', onload);
}

if (document.readyState != 'loading') {
  onload();
} else {
  document.addEventListener('DOMContentLoaded', onload);
}
