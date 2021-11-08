export function findPromo(promos, searchedPromoId) {
  console.log(promos)
  console.log(searchedPromoId)
  const promo = promos.find((testedPromo) => {
    console.log(testedPromo.id)
    console.log(searchedPromoId)
    return testedPromo.id == searchedPromoId;
  });
  console.log(promo)
  return promo;
}
export function filteredSearch(promos, search) {
  if (!search) {
    return promos
  } else {
    const filteredPromos = promos.filter(promo => promo.name.toLowerCase().includes(search))
    console.log(filteredPromos)
    return filteredPromos
  }
}
