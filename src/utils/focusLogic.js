export function focusLogic (value, state){
    let {
        menu,
        destaque,
        trilho,
        lastFocus
      } = state;
      
      
      for (var i in state) {
        if (state[i] === true) {
            lastFocus = i
        }
      }
      
      switch(value){
        case("destaque"):
            menu = false;
            destaque = true;
            trilho = false;
            break;
        case("trilho"):
            menu = false;
            destaque = false;
            trilho = true;
            break;
        case("menu"):
            menu = true;
            destaque = false;
            trilho = false;
        break;
        default:
            break;
      }
      
      return {
        menu: menu,
        destaque: destaque,
        trilho: trilho,
        lastFocus: lastFocus
      }
}