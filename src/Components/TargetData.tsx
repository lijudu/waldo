interface Target {
    name: string;
    xCoord: number;
    yCoord: number; 
    found: boolean; 
}

const prisoner: Target = {
    name: 'prisoner',
    xCoord: 10, 
    yCoord: 10, 
    found: false,
    // top left 
}

const guards: Target = {
    name: 'guard',
    xCoord: 30,
    yCoord: 30,
    found: false
    // bottom left 
}

const hanging: Target = {
    name: 'hanging',
    xCoord: 50,
    yCoord: 50, 
    found: false
    // middle
}

export { prisoner, guards, hanging }