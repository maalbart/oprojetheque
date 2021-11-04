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
