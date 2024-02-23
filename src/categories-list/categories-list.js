export function markupCategories(data) {
  return data
    .map(
      ({ imgURL, filter, name }) =>
        `<li class="categories-card-item"
      style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${imgURL}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                ">
        <p class="categories-card-title">${name}</p>
        <p class="categories-card-text">${filter}</p>
      </li>`
    )
    .join('');
}
