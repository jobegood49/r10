// import Realm from "realm";

// const itemsSchema = {
//   name: "Item",
//   primaryKey: "id",
//   properties: {
//     id: "int",
//     name: {
//       type: "string",
//       default: "yoItem"
//     },
//     color: {
//       type: "string",
//       optional: true
//     }
//   }
// };

// export const realm = new Realm({ schema: [itemsSchema] });

// export const createAnItem = (id, color) => {
//   realm.write(() => {
//     realm.create("Item", { id, name: "item " + id, color });
//   });
// };

// export const getItems = () => {
//   return realm.objects("Item");
// };

// export const removeItem = id => {
//   let itemToDelte = realm.objects("Item").filtered(`id = ${id}`);
//   realm.write(() => {
//     realm.delete(itemToDelte);
//   });
// };

// export default realm;


////


import Realm from 'realm';


const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  }
};

export const realm = new Realm({ schema: [Fave] });

//Query Faves
export const queryFaves = () => {
  return realm.objects('Fave').map((fave) => fave.id)
}

//Get Faves
export const getFaves = () => realm.objects('Fave');

//Create Faves
export const createFave = (id) => {
  realm.write(() => {
    realm.create('Fave', { id: id, faved_on: new Date() })
  })
}


//Delete Fave
export const deleteFave = (id) => {
  realm.write(() => {

    //Query all Fave Objects
    let fave = realm.objects('Fave');

    //Filter by id
    const removeFave = fave.filtered('id == $0', id);

    //Delete removeFave
   realm.delete(removeFave)

  })
}