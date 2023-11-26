const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
    /// Quick and dirty.  Super certain that e is going to be an error
  // } catch (e: any) {
  //   return e.message;
  // }
  //   /// A bit better due defining the type as an error before accessing the message
  } catch (e) {
    return (e as Error).message
  }
    /// Checks the type as run time to see if e is an instance of the Error.  Very safe if complicated 
  // } catch (e) {
  //   if (e instanceof Error) {
  //   return e.message
  //   }
  // }
};


tryCatchDemo("fail")
