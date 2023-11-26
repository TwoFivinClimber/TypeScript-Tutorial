/// It 
 
const addListener = (onFocusChange: (isFocused: boolean) => void) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });


/// Declares type first and is passed to function
// type FocusLIstener = (isFocused: boolean) => void

// const addListener = (onFocusChange: FocusLIstener) => {
//   window.addEventListener("focus", () => {
//     onFocusChange(true);
//   });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });
});
