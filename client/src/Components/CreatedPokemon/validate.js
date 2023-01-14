const urlPatternValidation = (URL) => {
    const regex = new RegExp(/(https?:\/\/.*\.(?:png|jpg|svg))/);
    return regex.test(URL);
  };


  
export function validate(info) {   
    let error={}
    if(info.name.length > 0 && info.name.length < 4) error.name = 'the name cannot have less than 5 letters';
    if(info.name.length > 15) error.name = 'the name cannot have more than 15 letters';
    if (info.strength <= 0) error.strength = "need strength!";
    if (info.defense <= 0) error.defense = "need defense";
    if (info.attack <= 0) error.attack = "need attack!";
    if (info.height <= 0) error.height = "need height!";
    if (info.weight <= 0) error.weight = "need weight";
    if (info.speed <= 0) error.speed = "need speed!";
    if (!info.name) error.name = "name is required";
    if (info.hp <= 0) error.hp = "need hp!";
    if (!urlPatternValidation(info.image) && info.image !== "") error.image = 'unsupported format' 
    return error;
  }
