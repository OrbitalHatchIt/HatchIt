function clonePet(pet) {
    return {
        pet: pet.pet,
        happiness: pet.happiness,
        unlocked: pet.unlocked,
        _id: pet._id
    };
}

export function updatePet(pets, pet) {
    // clone pets object
    const newPets = {};
    for (const id in pets) {
        newPets[id] = clonePet(pets[id]);
    }

    // update pet
    newPets[pet._id] = pet;

    return newPets;
}

export function addPetId(idArr, id) {
    const newIdArr = Array.from(idArr);
    newIdArr[newIdArr.length] = id;
    return newIdArr;
}