{


    type FindStringOrNumber = string | number;

    const find = (param: FindStringOrNumber): string | number => {
        if (typeof param === "number") {
            return param * param;
        } else {
            return param.length;
        }

    };

    const result1 = find('shawon');
  
i love typescarkajrthvl

}