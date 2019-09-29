export function focusLogic (key, state){
    let {
        menu,
        destaque
      } = state;
      switch(key){
        case("ArrowLeft"):
            if(menu === false && destaque === true)
                menu = true;
                destaque = false;
            break;
        case("ArrowRight"):
            if(menu === true && destaque === false)
                menu = false;
                destaque = true;
            break;
        default:
            break;
      }
      return {
        menu: menu,
        destaque: destaque
      }
}