interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

/* Async requests */

/* Reccommended maybe.  Tells TS that the return should represent interface when resolved*/
// export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
//   const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json();
//   });

//   return data;
// };


/* Typing the (any) varialbe data to the interface.  TS infers the Promise<LukeSkywalker >  */ 
export const fetchLukeSkywalker = async () => {
  const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};


/* CASTING: "as" casts data to the interface of LukeSkywalker */
/* Casting is a stronger way to tell TS what you think it should return */
// export const fetchLukeSkywalker = async () => {
//   const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json();
//   });

//   return data as LukeSkywalker;
// };
