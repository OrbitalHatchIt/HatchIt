import { normalize, schema } from 'normalizr';

const PetSchema = new schema.Entity(
    'pets', {}, { idAttribute: value => value._id }
);

const PetInfoSchema = new schema.Entity(
    'petInfo', { pets: [PetSchema] }
)

export const normalizePetInfo = petInfo => normalize(petInfo, PetInfoSchema);